class Api::CheckInsController < ApplicationController
    def create
        @check_in = CheckIn.new(check_in_params)
        if @check_in.save
            @beer = Beer.find(@check_in.beer_id)
            render "/api/beers/show"
        else
            render json: @check_in.errors.full_messages, status: 422
        end    
    end

    def show
        @check_in = CheckIn.find(params[:id])
    end
    
    private
    def check_in_params
        params.require(:check_in).permit(:beer_id, :user_id, :review, :rating)
    end

end
