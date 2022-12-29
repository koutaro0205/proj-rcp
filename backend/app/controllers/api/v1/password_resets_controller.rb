class Api::V1::PasswordResetsController < ApplicationController
  before_action :get_user,   only: %i[edit update]
  before_action :valid_user, only: %i[edit update]
  before_action :check_expiration, only: %i[edit update]

  def create
    @user = User.find_by(email: params[:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      render json: { user: @user, status: :ok }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def edit
    render json: { status: :ok }
  end

  def update
    if params[:password].empty?
      render json: { status: :unauthorized }
    elsif @user.update(user_params)
      log_in @user
      @user.update_attribute(:reset_digest, nil)
      render json: { status: :ok, user: @user, logged_in: true}
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def check_expiration
    if @user.password_reset_expired?
      render json: { status: :unprocessable_entity, expired: true }
    end
  end

  private
    def get_user
      @user = User.find_by(email: params[:email])
    end

    def valid_user
      render json: { status: :unprocessable_entity } unless @user && @user.authenticated?(:reset, params[:id])
    end

    def user_params
      params.permit(:password, :password_confirmation)
    end
end
