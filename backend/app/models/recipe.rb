class Recipe < ApplicationRecord
  has_one_attached :image
  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipe_steps, dependent: :destroy
  accepts_nested_attributes_for :recipe_ingredients, allow_destroy: true
  accepts_nested_attributes_for :recipe_steps, allow_destroy: true

  validates :title, presence: true
  validates :description, presence: true
  validates :serving_size, presence: true

  include Rails.application.routes.url_helpers

  def image_url
    image.attached? ? url_for(image) : nil
  end
end
