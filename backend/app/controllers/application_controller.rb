class ApplicationController < ActionController::API
  include SessionsHelper

  private
    def logged_in_user
      unless logged_in?
        render json: { status: :forbidden, logged_in: false, message: 'ユーザーが存在しません' }
      end
    end
end
