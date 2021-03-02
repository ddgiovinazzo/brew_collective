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

    def show
        @beer = Beer.find(params[:id])
    end
    
    private
    def beer_params
        
        params.require(:beer).permit(:name, :brewery_id, :serving_style, :abv, :ibu, :flavor_profile, :image_url)
    end
end
