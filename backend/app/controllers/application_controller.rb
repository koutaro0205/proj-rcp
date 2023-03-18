class ApplicationController < ActionController::API
  before_action :set_csrf_token_header

  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  include SessionsHelper

  def set_csrf_token_header
    response.set_header('X-CSRF-Token', form_authenticity_token)
  end

  private

  def attach_image(parameters)
    blob = ActiveStorage::Blob.create_and_upload!(
      io: StringIO.new(decode(params[:image][:data]) + "\n"),
      filename: params[:image][:filename]
    )
    parameters.image.attach(blob)
  end

  def decode(str)
    Base64.decode64(str.split(',').last)
  end
end
