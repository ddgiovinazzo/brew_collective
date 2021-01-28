class Api::CheckinsController < ApplicationController
        
    def index
        @checkins = Checkin.all
    end

    def create
        @checkin = Checkin.new(brewery_params)
        if @checkin.save
            render :show
        else
            render json: @checkin.errors.full_messages, status: 422
        end    
    end

    def show
        @checkin = Checkin.find(params[:id])
    end

    private
    def brewery_params
        params.require(:checkin).permit(:beer_id, :brewery_id, :review)
    end
end
