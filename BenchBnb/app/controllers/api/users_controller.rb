class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      #TODO redirect_to
    else
      render json: @user.errors.full_messages, status: 401
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
