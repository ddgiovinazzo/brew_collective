ENV['AWS_ACCESS_KEY_ID'] = Rails.application.credentials.aws[:access_key_id]
ENV["AWS_SECRET_ACCESS_KEY"] = Rails.application.credentials.aws[:secret_access_key]
ENV['AWS_REGION'] = Rails.application.credentials.aws[:region]

class Api::UsersController < ApplicationController
    
    def index
        @users = User.all
    end
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end    
    end
    def update
        @user = User.find(params[:id])

        current_password = params[:user][:current_password]
        if current_password && !@user.is_password?(current_password)
            render json: ['Please enter correct current password'], status: 401
        elsif @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end    
    end
    
    def photo
        @user = User.find(params[:user][:id])
        if @user.photo.attached?
            s3 = Aws::S3::Resource.new
            bucket = s3.bucket(Rails.application.credentials.aws[:dev][:bucket])
            obj = bucket.object(url_for(@user.photo))
            obj.delete
            @user.photo.destroy
        end

        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end    
    end

    def show
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(
            :username, 
            :password, 
            :password_confirmation, 
            :email, 
            :last_name, 
            :first_name, 
            :country, 
            :gender, 
            :location, 
            :birthday, 
            :photo
        )
    end
end
