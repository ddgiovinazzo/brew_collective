class Api::FriendshipsController < ApplicationController
    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            @users = User.where(id: [@friendship.requestor_id, @friendship.receiver_id])
            render "/api/users/index"
        else
            render json: @friendship.errors.full_messages, status: 422
        end    
    end

    def update
        @friendship = Friendship.find(params[:id])
        if @friendship.update(friendship_params)
            @users = User.where(id: [@friendship.requestor_id, @friendship.receiver_id])
            render "/api/users/index"
        else
            render json: @friendship.errors.full_messages, status: 422
        end    
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        requestor_id = @friendship.requestor_id
        receiver_id = @friendship.receiver_id
        
        if @friendship.destroy
            @users = User.where(id: [requestor_id , receiver_id])
            render "/api/users/index"
        else
            render json: @friendship.errors.full_messages, status: 422
        end    
    end

    def show
        @friendship = Friendship.find(params[:id])
    end
    
    private
    def friendship_params
        params.require(:friendship).permit(:requestor_id, :receiver_id, :status)
    end

end
