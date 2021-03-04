class Brewery < ApplicationRecord
    validates :name, presence: true, uniqueness: {case_sensitive: false}

    has_many :beers

    has_many :check_ins,
    through: :beers
end
