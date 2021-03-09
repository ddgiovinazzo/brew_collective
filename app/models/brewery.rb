class Brewery < ApplicationRecord
    validates :name, presence: true, uniqueness: {case_sensitive: false}
    validates :brewery_type, :country, presence: true

    has_many :beers

    has_many :check_ins,
    through: :beers
end
