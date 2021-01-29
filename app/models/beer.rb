class Beer < ApplicationRecord    
    validates :name, :brewery_id, :serving_style, :abv, :ibu, :flavor_profile, presence: true
    validates :name, uniqueness: true

    has_one_attached :image
end
