class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @user.send_activation_email
      render json: { status: :created, user: @user }
    else
      render json: { errors: @user.errors, status: :unprocessable_entity }
    end
  end

  def update
    if @user.update(user_params)
      render json: { user: @user, status: :ok }
    else
      render json: { errors: @user.errors, status: :unprocessable_entity }
    end
  end

  def destroy
    @user.destroy
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.permit(
        :name,
        :email,
        :password,
        :password_confirmation,
        :image,
      )
    end
end
