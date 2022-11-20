class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  include SessionsHelper

  def set_csrf_token_header
    response.set_header('X-CSRF-Token', form_authenticity_token)
  end

  private
    def logged_in_now?
      unless logged_in?
        render json: { status: :forbidden, logged_in: false, message: 'ユーザーが存在しません' }
      end
    end
end
