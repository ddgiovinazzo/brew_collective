json.key_format! camelize: :lower

brewery = Brewery.find_by(id: beer.brewery_id)
url = "beers/#{beer.name.split.join("_").downcase}.jpeg"

json.extract! beer, :id, :name, :serving_style, :abv, :ibu, :flavor_profile
json.image_url url
json.brewery do
    json.extract! brewery, :id, :name
end
