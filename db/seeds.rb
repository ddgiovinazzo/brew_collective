# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.create(username: 'demo', password:'password', email: 'demo@demo.com', country: 'USA', first_name: 'demo', last_name: 'demo', birthday: DateTime.new(1953,9,14))

Brewery.create(name: "Founders Brewing Co.")
Brewery.create(name: "Bell's Brewery")

b1 = Beer.create(name: 'Breakfast Stout', brewery_id: 1, serving_style: 'Stout', abv: 8.3, ibu: 60, flavor_profile: 'The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and two types of coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever.')
# f1 = URI.open('https://kegger-aa-dev.s3.amazonaws.com/breakfast_stout.jpeg')
# b1.image.attach(io: f1, filename: 'breakfast_stout.jpeg')

b2 = Beer.create(name: 'Two Hearted Ale', brewery_id: 2, serving_style: 'IPA', abv: 7, ibu: 55, flavor_profile: "Brewed with 100% Centennial hops from the Pacific Northwest and named after the Two Hearted River in Michigan’s Upper Peninsula, this IPA is bursting with hop aromas ranging from pine to grapefruit from massive hop additions in both the kettle and the fermenter. 
Perfectly balanced with a malt backbone and combined with the signature fruity aromas of Bell's house yeast, this beer is remarkably drinkable and well suited for adventures everywhere.")
# f2 = URI.open('https://kegger-aa-dev.s3.amazonaws.com/two_hearted.jpeg')
# b2.image.attach(io: f2, filename: 'two_hearted.jpeg')
