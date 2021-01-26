class Brewery < ApplicationRecord
    validates :name, length: {minimum: 1}

end
