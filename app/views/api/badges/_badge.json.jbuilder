json.key_format! camelize: :lower

url = "badges/#{badge.name.split.join("_").downcase}.jpeg"
json.extract! badge, :id, :name, :description
json.image_url url