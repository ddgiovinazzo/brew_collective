@breweries.each do |brewery|
    json.set! brewery.id do
      json.partial! 'brewery', brewery: brewery
    end
  end