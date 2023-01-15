class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update destroy]
  before_action :correct_user, only: %i[edit update]
  def index
    @users = User.where(activated: true)
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
      render json: { status: :unprocessable_entity }
    end
  end

  def edit
    render json: { status: :ok, user: @user }
  end

  def update
    if @user.update(user_params)
      render json: { user: @user, status: :ok }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def destroy
    @user.destroy
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def correct_user
      @checked_user = User.find_by(id: params[:id])
      unless current_user?(@checked_user)
        render json: { status: :forbidden }
      end
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
