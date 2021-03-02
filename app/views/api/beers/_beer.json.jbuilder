json.key_format! camelize: :lower

url = "beers/#{beer.name.split.join("_").downcase}.jpeg"

json.extract! beer, :id, :name, :serving_style, :abv, :ibu, :flavor_profile, :brewery, :check_ins
json.image_url url