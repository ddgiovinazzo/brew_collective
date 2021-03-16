json.key_format! camelize: :lower
json.extract! user, :id, :username, :email, :last_name, :first_name, :country, :gender, :location, :birthday
friend_ids = []
friend_pending_ids = []

if user.friendships_as_requestor.empty?
    json.friendships_as_requestor({})
else
    json.friendships_as_requestor do
        user.friendships_as_requestor.each do |friendship|
            if friendship.status == "accepted"
                friend_ids << friendship.receiver_id
            else
                friend_pending_ids << friendship.receiver_id
            end

            json.set! friendship.receiver_id do
                json.partial! '/api/friendships/friendship.json.jbuilder', friendship: friendship
            end
        end
    end
end

if user.friendships_as_receiver.empty?
    json.friendships_as_receiver({})
else
    json.friendships_as_receiver do
        user.friendships_as_receiver.each do |friendship|

             if friendship.status == "accepted"
                friend_ids << friendship.requestor_id
             else
                friend_pending_ids << friendship.requestor_id
             end

            json.set! friendship.requestor_id do
                json.partial! '/api/friendships/friendship.json.jbuilder', friendship: friendship
            end
        end
    end
end

json.friend_ids friend_ids
json.friend_pending_ids friend_pending_ids

uniques = {}
unique_check_ins = 0

json.checkIns do
    json.array!(user.check_ins.reverse) do |check_in|
        if !uniques[check_in.beer_id]
            uniques[check_in.beer_id] = 1
            unique_check_ins += 1
        end
        json.partial! '/api/check_ins/check_in.json.jbuilder', check_in: check_in
    end
end
json.unique_check_ins unique_check_ins

if user.photo.attached?
    json.photo_url url_for(user.photo)
else
    json.photo_url ""
end

if user.awards.empty?
    json.awards({})
else
    json.awards do
        user.awards.each do |award|
            json.key_format! :itself
            json.set! award.badge.name do
                json.key_format! camelize: :lower
                json.id award.id
                json.badge do
                    json.partial! '/api/badges/badge.json.jbuilder', badge: award.badge
                end
            end
        end
    end
end

if user.beers.empty?
    json.beers({})
else
    json.beers do
        user.beers.each do |beer|
            json.set! beer.id do
                json.partial! '/api/beers/beer.json.jbuilder', beer: beer
            end
        end
    end
end

json.badges user.awards.length