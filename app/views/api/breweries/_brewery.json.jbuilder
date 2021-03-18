json.key_format! camelize: :lower

url = "breweries/#{brewery.name.split.join("_").downcase}.jpeg"

json.extract! brewery, :id, :name, :brewery_type, :country
json.image_url url
unique_user_ids = {}
ratings = []

json.checkIns do
    json.array!(brewery.check_ins) do |check_in|
        ratings << check_in.rating if check_in.rating > 0
        json.partial! '/api/check_ins/check_in', check_in: check_in
    end
end

ratings_avg = !ratings.empty? ? (ratings.sum / ratings.length.to_f).round(2) : 0
json.ratings do
    json.total ratings.length
    json.avg ratings_avg
end

json.beer_total brewery.beers.length

if brewery.beers.empty?
    json.beers({})
else
    json.beers do
        brewery.beers.each do |beer|
            json.set! beer.id do
                json.partial! '/api/beers/beer.json.jbuilder', beer: beer
            end
        end
    end
end