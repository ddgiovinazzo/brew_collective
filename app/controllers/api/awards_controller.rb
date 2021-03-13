class Api::AwardsController < ApplicationController
    def create
        badge_id = Badge.find_by(name: award_params[:badge_name]).id
        user_id = award_params[:user_id]

        @award = Award.new(user_id: user_id, badge_id: badge_id)

        if @award.save
            @user = User.find(user_id)
            render "/api/users/show"
        else
            render json: @award.errors.full_messages, status: 422
        end    
    end

    def destroy
        @award = Award.find(params[:id])
        id = @award.user_id
        
        if @award.destroy
            @users = User.where(id: id)
            render "/api/users/show"
        else
            render json: @award.errors.full_messages, status: 422
        end    
    end
    
    private
    def award_params
        params.require(:award).permit(:user_id, :badge_name)
    end

end
