class Api::V1::AccountActivationsController < ApplicationController
  def edit
    user = User.find_by(email: params[:email])
    if user && !user.activated? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      render json: { status: :ok, user: user, logged_in: true, activated: true }
    else
      render json: { status: :unprocessable_entity, logged_in: false, activated: false }
    end
  end

  # private
  #   def associate(obj)
  #     JSON.parse(obj.to_json(methods: [:image_url], include: [:questions, { recipes: { methods: [:image_url] } }] ) )
  #   end
end
