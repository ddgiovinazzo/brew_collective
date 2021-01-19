class User < ApplicationRecord
    validates :username, :password_digest, :email, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 5}, allow_nil: true
    validates :email, length: {minimum: 2}

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        user if user && user.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
