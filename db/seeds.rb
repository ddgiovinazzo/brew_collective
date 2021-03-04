# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# f1 = URI.open('https://brew_collective-aa-dev.s3.amazonaws.com/breakfast_stout.jpeg')
# b1.image.attach(io: f1, filename: 'breakfast_stout.jpeg')
require 'open-uri'

User.create(username: 'demo', password:'password', email: 'demo@demo.com', country: 'USA', first_name: 'Ima', last_name: 'Person', birthday: DateTime.new(1953,9,14))

Brewery.create(name: "Founders Brewing Co.")
Brewery.create(name: "Bell's Brewery")
Brewery.create(name: "Coors Brewing Company")

Beer.create(name: 'Breakfast Stout', brewery_id: Brewery.where(name: "Founders Brewing Co.").pluck(:id).first, 
    serving_style: 'Stout - Oatmeal', abv: 8.3, ibu: 60,
    flavor_profile: 'The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and Sumatra and Kona coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever.')

Beer.update(name: 'Two Hearted Ale', brewery_id: Brewery.where(name: "Bell's Brewery").pluck(:id).first,
    serving_style: 'IPA - American', abv: 7, ibu: 55, 
    flavor_profile: "Brewed with 100% Centennial hops from the Pacific Northwest and named after the Two Hearted River in Michigan’s Upper Peninsula, this IPA is bursting with hop aromas ranging from pine to grapefruit from massive hop additions in both the kettle and the fermenter.\n\nPerfectly balanced with a malt backbone and combined with the signature fruity aromas of Bell's house yeast, this beer is remarkably drinkable and well suited for adventures everywhere.")

Beer.create(name: 'Coors Light', brewery_id: Brewery.where(name: "Coors Brewing Company").pluck(:id).first, 
    serving_style: 'Lager', abv: 4.2, ibu: 10, 
    flavor_profile: "Coors Light is Coors Brewing Company's largest-selling brand and the fourth best-selling beer in the U.S. Introduced in 1978, Coors Light has been a favorite in delivering the ultimate in cold refreshment for more than 25 years. The simple, silver-toned can caught people's attention and the brew became nicknamed the \"Silver Bullet\" as sales climbed.")

