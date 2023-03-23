class RecipeStep < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :recipe
  has_one_attached :step_image

  validates :description, presence: true

  # Methods
  ## RecipeSteps
  def image_url
    step_image.attached? ? url_for(image) : nil
  end
end
