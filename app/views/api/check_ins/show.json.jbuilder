json.beer do
    json.partial! "api/beers/beer", beer: @beer
end
json.brewery do
    json.partial! "api/breweries/brewery", brewery: @brewery
end
json.user do
    json.partial! "api/users/user", user: @user
end
