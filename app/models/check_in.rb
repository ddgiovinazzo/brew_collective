class CheckIn < ApplicationRecord
    validates uniquness: :user_id, :beer_id
    validates presence:  :user_id, :beer_id

    has_many_attached :images
end