class ApplicationController < ActionController::API
  before_action :set_csrf_token_header
  before_action :check_xhr_header

  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception
  include SessionsHelper

  private
    def set_csrf_token_header
      response.set_header('X-CSRF-Token', form_authenticity_token)
    end

    def check_xhr_header
      return if request.xhr?

      render json: { error: 'forbidden' }, status: :forbidden
    end

    def logged_in_now?
      unless logged_in?
        render json: { status: :forbidden, logged_in: false, message: 'ユーザーが存在しません' }
      end
    end
end
