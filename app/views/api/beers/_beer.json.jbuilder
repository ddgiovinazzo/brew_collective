json.key_format! camelize: :lower

brewery = Brewery.find_by(id: beer.brewery_id)

json.extract! beer, :id, :name, :serving_style, :abv, :ibu, :flavor_profile, :image_url
json.brewery do
    json.extract! brewery, :id, :name
end
