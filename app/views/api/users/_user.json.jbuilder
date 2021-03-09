json.key_format! camelize: :lower

json.extract! user, :id, :username, :email, :last_name, :first_name, :country, :gender, :location, :birthday
json.checkIns do
    json.array!(user.check_ins.reverse) do |check_in|
        json.partial! '/api/check_ins/check_in', check_in: check_in
    end
end