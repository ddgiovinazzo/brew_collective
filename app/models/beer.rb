class Beer < ApplicationRecord  
    validates :name, presence: true
    validates :name, :abv, :ibu, :serving_style, :flavor_profile, presence: true
    validates :name, uniqueness: true
    
    has_one_attached :image
    belongs_to :brewery
    has_many :check_ins, dependent: :destroy
end
