class Api::BreweriesController < ApplicationController
    
    def index
        @breweries = Brewery.all
    end

    def create
        @brewery = Brewery.new(brewery_params)
        if @brewery.save
            render :show
        else
            render json: @brewery.errors.full_messages, status: 422
        end    
    end

    def show
        @brewery = Brewery.find(params[:id])
    end

    private
    def brewery_params
        params.require(:brewery).permit(:name, :brewery_type, :brewery_country)
    end
end