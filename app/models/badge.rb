class Badge < ApplicationRecord
    validates :name, uniqueness: true
    has_many :awards
end
