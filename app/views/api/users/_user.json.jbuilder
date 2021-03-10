json.key_format! camelize: :lower

json.extract! user, :id, :username, :email, :last_name, :first_name, :country, :gender, :location, :birthday


json.checkIns do
    json.array!(user.check_ins.reverse) do |check_in|
        json.extract! check_in, :id, :beer_id, :user_id, :review, :rating, :created_at
    end
end