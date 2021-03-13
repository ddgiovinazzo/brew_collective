class Award < ApplicationRecord
    validates :badge_id, uniqueness: true
    belongs_to :user
    belongs_to :badge
end
