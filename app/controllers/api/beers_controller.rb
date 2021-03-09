class Api::BeersController < ApplicationController

    def index
        @beers = Beer.all
    end

    def create
        @beer = Beer.new(beer_params)
        if @beer.save
            render :show
        else
            render json: @beer.errors.full_messages, status: 422
        end    
    end

    def brewery
        @beer = Beer.new(beer_params)
        @brewery = Brewery.new(brewery_params)
        @beer.brewery_id = Brewery.first.id
        if @beer.valid? && @brewery.valid?
            @brewery.save
            @beer.brewery_id = @brewery.id
            @beer.save
            render :show
        elsif @beer.valid? && @brewery.invalid?
            render json: @brewery.errors.full_messages, status: 422    
        elsif @beer.invalid? && @brewery.valid?
            render json: @beer.errors.full_messages, status: 422    
        else
            render json: @beer.errors.full_messages + @brewery.errors.full_messages, status: 422
        end    
    end

    def show
        @beer = Beer.find(params[:id])
    end
    
    private
    def beer_params
        
        params.require(:beer).permit(:name, :brewery_id, :serving_style, :abv, :ibu, :flavor_profile, :image_url)
    end

    def brewery_params
        params.require(:brewery).permit(:name, :brewery_type, :country)
    end
end
