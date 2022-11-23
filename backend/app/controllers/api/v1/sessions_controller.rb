class Api::V1::SessionsController < ApplicationController
  after_action :set_csrf_token_header
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      if user.activated?
        log_in user
        params[:session][:remember_me] ? remember(user) : forget(user)
        render json: { logged_in: true, user: current_user }
      else
        render json: { logged_in: false, status: :unprocessable_entity, activated: false }
      end
    else
      render json: { logged_in: false, status: :unauthorized }
    end
  end

  def destroy
    log_out if logged_in?
    render json: { status: :ok, logged_in: false }
  end

  def logged_in_user
    if current_user
      render json: { logged_in: true, user: current_user }
    else
      render json: { logged_in: false, message: 'ユーザーが存在しません' }
    end
  end

  # private
  #   def associate(obj)
  #     JSON.parse(obj.to_json(methods: [:image_url], include: [:questions, { recipes: { methods: [:image_url] } }] ) )
  #   end
end
