class User < ApplicationRecord
    validates :username,
        uniqueness: { case_sensitive: false },
        length: {minimum: 2}

    validates :email,
        presence: true,
        format: {
            with: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i, 
            multiline: true, 
            message: "must contain a valid email address."
        },
        uniqueness: { case_sensitive: false }
        
    validates :password,
    length: {minimum: 5}, 
    allow_nil: true,
    confirmation: { case_sensitive: true, message: "does not match the Password field." }

    validates :password_digest, :country, :birthday, presence: true

    validate :valid_age, if: proc { |u| u.birthday.present? }

    has_many :check_ins, dependent: :destroy

    has_many :friendships_as_requestor,
    foreign_key: :requestor_id,
    class_name: :Friendship

    has_many :friendships_as_receiver,
    foreign_key: :receiver_id,
    class_name: :Friendship
    
    has_many :awards

    has_one_attached :photo

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

    protected
    def valid_age
        return if self.birthday < 21.years.ago.to_date
        errors.clear
        errors.add(:age, "You must be at least 21 years old to create an account")
    end

end
