json.key_format! camelize: :lower

json.extract! user, :id, :username, :email, :last_name, :first_name, :country, :gender, :location, :birthday

if user.friendships_as_requestor.empty?
    json.friendships_as_requestor({})
else
    json.friendships_as_requestor do
        user.friendships_as_requestor.each do |friendship|
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
            json.set! friendship.requestor_id do
                json.partial! '/api/friendships/friendship.json.jbuilder', friendship: friendship
            end
        end
    end
end

json.checkIns do
    json.array!(user.check_ins.reverse) do |check_in|
        json.partial! '/api/check_ins/check_in.json.jbuilder', check_in: check_in
    end
end

json.friends user.friendships_as_receiver.length + user.friendships_as_requestor.length