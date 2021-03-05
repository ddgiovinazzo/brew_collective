json.key_format! camelize: :lower

url = "beers/#{beer.name.split.join("_").downcase}.jpeg"

json.extract! beer, :id, :name, :serving_style, :abv, :ibu, :flavor_profile, :brewery,:created_at
json.image_url url
unique_user_ids = {}
user_ids = ""
ratings = []


json.checkIns do
    json.array!(beer.check_ins) do |check_in|
        ratings << check_in.rating if check_in.rating > 0

        if !unique_user_ids[check_in.user_id]
            user_ids += "#{check_in.user_id}, "
            unique_user_ids[check_in.user_id] = 1
        end
        
        json.partial! '/api/check_ins/check_in', check_in: check_in
        

    end
    

    
end

json.user_ids user_ids
ratings_avg = !ratings.empty? ? (ratings.sum / ratings.length.to_f).round(2) : 0
json.ratings do
    json.total ratings.length
    json.avg ratings_avg
end
