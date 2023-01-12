class ApplicationController < ActionController::Base
  after_action :set_csrf_token_header

  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection
  include SessionsHelper

  def debug_session
    puts(session[:user_id] ? "#{session[:user_id]}のセッションIDを確認できました" : 'セッションIDを確認できません。')
    puts("sessionハッシュの中身: #{session}")
    puts('----------------------')
    puts(current_user ? 'カレントユーザーはいません。' : 'カレントユーザーはいます！')
    puts("カレントユーザー: #{current_user}")
  end

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
