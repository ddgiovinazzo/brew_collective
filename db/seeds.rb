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

breweries = [
    {name: "Founders Brewing Co.", brewery_type: "Regional Brewery", country: "United States"},
    {name: "Bell's Brewery", brewery_type: "Regional Brewery", country: "United States"},
    {name: "Coors Brewing Company", brewery_type: "Macro Brewery", country: "United States"},
    {name: "Woodchuck Cidery", brewery_type: "Cidery", country: "United States"},
]

beers = [
    {name: 'Breakfast Stout', brewery_id: Brewery.where(name: "Founders Brewing Co.").pluck(:id).first, 
    serving_style: 'Stout - Oatmeal', abv: 8.3, ibu: 60,
    flavor_profile: 'The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and Sumatra and Kona coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever.'},

    {name: 'All Day IPA', brewery_id: Brewery.where(name: "Founders Brewing Co.").pluck(:id).first, 
    serving_style: 'IPA - Session / India Session Ale', abv: 4.7, ibu: 42,
    flavor_profile: 'Satisfies your tastes while keeping your senses sharp. Brewed with a complex array of ingredients. Balanced for optimal aromatics and a clean finish.'},

    {name: 'Dirty Bastard', brewery_id: Brewery.where(name: "Founders Brewing Co.").pluck(:id).first, 
    serving_style: 'Scotch Ale / Wee Heavy', abv: 8.5, ibu: 50,
    flavor_profile: 'Dark ruby in color. Brewed with seven varieties of imported malts. Complex, with hints of smoke and peat, malty richness and a right hook of hops.'},
    
    {name: 'Two Hearted Ale', brewery_id: Brewery.where(name: "Bell's Brewery").pluck(:id).first,
    serving_style: 'IPA - American', abv: 7, ibu: 55, 
    flavor_profile: "Brewed with 100% Centennial hops from the Pacific Northwest and named after the Two Hearted River in Michigan’s Upper Peninsula, this IPA is bursting with hop aromas ranging from pine to grapefruit from massive hop additions in both the kettle and the fermenter.\n\nPerfectly balanced with a malt backbone and combined with the signature fruity aromas of Bell's house yeast, this beer is remarkably drinkable and well suited for adventures everywhere."},

    {name: 'Oberon Ale', brewery_id: Brewery.where(name: "Bell's Brewery").pluck(:id).first,
    serving_style: 'Wheat Beer - American Pale Wheat', abv: 5.8, ibu: 10, 
    flavor_profile: "Bell's Oberon is a wheat ale fermented with Bell's signature house ale yeast, mixing a spicy hop character with mildly fruity aromas. The addition of wheat malt lends a smooth mouthfeel, making it a classic summer beer."},

    {name: 'Coors Light', brewery_id: Brewery.where(name: "Coors Brewing Company").pluck(:id).first, 
    serving_style: 'Lager', abv: 4.2, ibu: 10, 
    flavor_profile: "Coors Light is Coors Brewing Company's largest-selling brand and the fourth best-selling beer in the U.S. Introduced in 1978, Coors Light has been a favorite in delivering the ultimate in cold refreshment for more than 25 years. The simple, silver-toned can caught people's attention and the brew became nicknamed the \"Silver Bullet\" as sales climbed."},

    {name: 'Gumption', brewery_id: Brewery.where(name: "Woodchuck Cidery").pluck(:id).first, 
    serving_style: 'Cider - Traditional', abv: 5.5, ibu: 0, 
    flavor_profile: "Legendary showman P.T. Barnum once noted, “everybody drank cider-spirits called ‘gumption’.” Our Woodchuck GUMPTION™ celebrates the spirit of P.T. Barnum and those with the gumption to follow their own path. We pair the fresh juice of common eating apples with dry cider apples to bring you a bold and unique drinking experience. "},
]

breweries.each{|brewery| Brewery.create(brewery)}
beers.each{|beer| Beer.create(beer)}


