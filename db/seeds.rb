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


users = [
    {username: 'flickfeature73', password:'password', email: 'flickfeature73@demo.com', country: 'United States', first_name: 'Flick', last_name: 'Van Rossum', gender: 'he/him/his', location: 'New York', birthday: DateTime.new(1998,6,11)},
    {username: 'lewindavisbangbang61', password:'password', email: 'lewindavisbangbang61@demo.com', country: 'United Kingdom', first_name: 'Lewin', last_name: 'Davis', gender: 'they/them/theirs', location: '', birthday: DateTime.new(1985,8,16)},
    {username: 'obviouslyannalise', password:'password', email: 'obviouslyannalise@demo.com', country: 'United States', first_name: 'Annalise', last_name: 'Horn', gender: 'she/her/hers', location: 'Austin', birthday: DateTime.new(1996,6,25)},
    {username: 'lorettadimov24', password:'password', email: 'lorettadimov24@demo.com', country: 'Russia', first_name: 'Loretta', last_name: 'Dimov', gender: 'she/her/hers', location: 'St. Petersburg', birthday: DateTime.new(1987,7,28)},
    {username: 'miraoakum18', password:'password', email: 'miraoakum18@demo.com', country: 'United States', first_name: 'Mira', last_name: 'Cooney', gender: 'she/her/hers', location: 'Jersey City', birthday: DateTime.new(1993,2,17)},
    {username: 'wonderleontine19', password:'password', email: 'wonderlontine19@demo.com', country: 'France', first_name: 'Léontine', last_name: 'Amerighi', gender: 'they/them/theirs', location: 'Paris', birthday: DateTime.new(1988,8,16)},
    {username: 'juliecroissant', password:'password', email: 'juliecroissant@demo.com', country: 'United States', first_name: 'Julie', last_name: 'Ericson', gender: '', location: '', birthday: DateTime.new(1990,3,10)},
]
breweries = [
    {name: "Founders Brewing Co.", brewery_type: "Regional Brewery", country: "United States"},
    {name: "Bell's Brewery", brewery_type: "Regional Brewery", country: "United States"},
    {name: "Coors Brewing Company", brewery_type: "Macro Brewery", country: "United States"},
    {name: "Woodchuck Cidery", brewery_type: "Cidery", country: "United States"},
    {name: "Einstök Ölgerð", brewery_type: "Micro Brewery", country: "Iceland"},
    {name: "Deschutes Brewery", brewery_type: "Regional Brewery", country: "United States"},
    {name: "Koninklijke Grolsch", brewery_type: "Macro Brewery", country: "Netherlands"},
    {name: "Brasserie Jupiler", brewery_type: "Macro Brewery", country: "Belgium"},
    {name: "Tröegs Independent Brewing", brewery_type: "Regional Brewery", country: "United States"},
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
    flavor_profile: "Legendary showman P.T. Barnum once noted, “everybody drank cider-spirits called ‘gumption’.” Our Woodchuck GUMPTION™ celebrates the spirit of P.T. Barnum and those with the gumption to follow their own path. We pair the fresh juice of common eating apples with dry cider apples to bring you a bold and unique drinking experience."},

    {name: 'Icelandic White Ale', brewery_id: Brewery.where(name: "Einstök Ölgerð").pluck(:id).first, 
    serving_style: 'Wheat Beer - Witbier', abv: 5.2, ibu: 0, 
    flavor_profile: "Pure Icelandic glacier water and a classic witbier recipe combine to create our Icelandic White Ale. Crafted clean and crisp, the balanced addition of orange peel, coriander, and rolled oats ensure this beer remains incredibly ﬂavorful and refreshingly drinkable."},

    {name: 'Black Butte Porter', brewery_id: Brewery.where(name: "Deschutes Brewery").pluck(:id).first, 
    serving_style: 'Porter - American', abv: 5.5, ibu: 30, 
    flavor_profile: "This is the beer that started it all. A delicate, creamy mouthfeel contrasts with layered depth revealing distinctive chocolate and coffee notes. Dark and rich, yet easy to drink."},

    {name: 'Grolsch Premium Lager', brewery_id: Brewery.where(name: "Koninklijke Grolsch").pluck(:id).first, 
    serving_style: 'Pilsner - Other', abv: 5, ibu: 28, 
    flavor_profile: "A traditional Pilsner style beer with a big hoppy flavour and bite owing to dry hopping late in the brewing process. The zesty and fragrant hops make for a refreshingly dry finish and a slight sweet and sharp zing to the palate, which are best enjoyed with rich, creamy foods like pork sausage and mustard mash, quality fish and chips or cheese like Old Amsterdam, Edam or Brie. Grolsch is known to use a distinctively shaped bottle for its beer, known as de beugel or 'swingtop'."},

    {name: 'Jupiler', brewery_id: Brewery.where(name: "Brasserie Jupiler").pluck(:id).first, 
    serving_style: 'Lager - Euro Pale', abv: 5.2, ibu: 25, 
    flavor_profile: "Jupiler is the most famous and most popular beer in Belgium. This delicious lager is brewed with the finest ingredients (malt, maize, water, hop, yeast), using undisputed craftsmanship, ensuring an outstanding beer quality. Jupiler offers refreshment on a wide variety of occasions, thanks to its digestibility and accessible taste. Jupiler (5,2 % ABV) is ideally served at a temperature of 3 °C. The low-alcoholic variant Jupiler N.A. (0.5%) should be served at 1-2 °C."},

    {name: 'Nugget Nectar', brewery_id: Brewery.where(name: "Tröegs Independent Brewing").pluck(:id).first, 
    serving_style: 'Red Ale - Imperial / Double', abv: 7.5, ibu: 93, 
    flavor_profile: "Squeeze those hops for all they're worth and prepare to pucker up: Nugget Nectar Ale, will take hopheads to nirvana with a heady collection of Nugget, Warrior and Tomahawk hops. Starting with the same base ingredients of our flagship HopBack Amber Ale, Nugget Nectar intensifies the malt and hop flavors to create an explosive hop experience."},

    {name: 'Rübæus', brewery_id: Brewery.where(name: "Founders Brewing Co.").pluck(:id).first, 
    serving_style: 'Fruit Beer', abv: 5.7, ibu: 15, 
    flavor_profile: "Optimizing the flavor of fresh raspberries, Rubaeus is the perfect blend of sweet, tart and refreshing."},

    {name: 'Best Brown Ale', brewery_id: Brewery.where(name: "Bell's Brewery").pluck(:id).first, 
    serving_style: 'Brown Ale - American', abv: 5.8, ibu: 0, 
    flavor_profile: "A smooth, toasty brown ale, Best Brown Ale is a mainstay in our fall & winter lineup. With hints of caramel and cocoa, the malt body has the depth to stand up to cool weather, but does not come across as heavy. This balancing act is aided by the generous use of American hops."},

    {name: "George Killian's Irish Red", brewery_id: Brewery.where(name: "Coors Brewing Company").pluck(:id).first, 
    serving_style: 'Lager - American Amber / Red', abv: 5.4, ibu: 14, 
    flavor_profile: "Killian's Irish Red is a traditional lager with an authentic Irish heritage, based on the Killian family's recipe created for the Killian's brewery in Enniscorthy, Ireland in 1864. Coors acquired the rights to brew and market the product in America and Killian's was introduced to the U.S. in 1981.\n\nKillian's Irish Red derives its distinctive red-amber color and taste from a special caramel malt that has been roasted at a high temperature longer and more slowly than most malts. There are no coloring agents or artificial additives used in brewing Killian's. The brew is known for its rich amber color and thick, creamy head."},

    {name: "Woodchuck Pear Hard Cider", brewery_id: Brewery.where(name: "Woodchuck Cidery").pluck(:id).first, 
    serving_style: 'Cider - Traditional', abv: 4, ibu: 0, 
    flavor_profile: "Woodchuck® Pear Hard Cider is aged in small batches producing a light color, with cool crisp taste. Deliciously flavored with a pear finish. Naturally gluten-free, this cider is available year round in six-packs and on draft."},

    {name: "Icelandic Arctic Berry Ale", brewery_id: Brewery.where(name: "Einstök Ölgerð").pluck(:id).first, 
    serving_style: 'Wheat Beer - Witbier', abv: 5.2, ibu: 0, 
    flavor_profile: "SUMARDAGURINN FYRSTI means the start of Summer and the arrival of warmer temperatures. At Einstök, we celebrate these months of ceaseless daylight with our refreshing, seasonally-limited witbier. Accented with tasty Icelandic bilberries hand-picked near the Arctic Circle by
    Berjabúið Vellir in Dalvík, it’s the perfect ale for your
    summer adventures. Savor it while you can – it will disappear with the midnight sun."},

    {name: "Chainbreaker White IPA", brewery_id: Brewery.where(name: "Deschutes Brewery").pluck(:id).first, 
    serving_style: 'IPA - White', abv: 5.6, ibu: 55, 
    flavor_profile: "Back by popular demand! This thirst-quenching hopped up wit beer delivers citrus aromas from hops, orange peel, and coriander that meld with the fruit
    and spice esters of the Belgian-style yeast strain dubbed “Forbidden Fruit.” For a limited time only--enjoy while you can!"},

    {name: "Puur Weizen", brewery_id: Brewery.where(name: "Koninklijke Grolsch").pluck(:id).first, 
    serving_style: 'Hefeweizen', abv: 5.1, ibu: 11, 
    flavor_profile: "Puur Weizen is een krachtig volfris bier, gebrouwen naar eeuwenlange traditie volgens het Reinheitsgebot met pure ingrediënten. Dit bier heeft een kruidig aroma en de frisheid van citroen. Schenk het troebele bier langzaam in, tussendoor ‘’walsen’’ met een voorzichtige polsbeweging, uitschenken met een romige schuimkraag hoog boven de rand van het glas."},

    {name: "Piedboeuf Tripel", brewery_id: Brewery.where(name: "Brasserie Jupiler").pluck(:id).first, 
    serving_style: 'Table Beer', abv: 3.8, ibu: 0, 
    flavor_profile: "Not to be confused with the belgian tripel style. It's named tripel because it has nearly three times the ABV of a Piedboeuf blond."},
    
    {name: "JavaHead Stout", brewery_id: Brewery.where(name: "Tröegs Independent Brewing").pluck(:id).first, 
    serving_style: 'Stout - Coffee', abv: 7.5, ibu: 60, 
    flavor_profile: "JavaHead is like a day at Tröegs; it’s hard to tell where the coffee ends and the beer begins. This creamy oatmeal stout is infused with locally roasted, cold steeped coffee through our HopBack vessel, releasing subtle hints of cocoa, roasted nuts and dark mocha."},
]

users.each{|user| User.create(user)}
breweries.each{|brewery| Brewery.create(brewery)}
beers.each{|beer| Beer.create(beer)}