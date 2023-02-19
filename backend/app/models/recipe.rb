class Recipe < ApplicationRecord
  has_one_attached :main_image
  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipe_steps, dependent: :destroy
  accepts_nested_attributes_for :recipe_ingredients, allow_destroy: true
  accepts_nested_attributes_for :recipe_steps, allow_destroy: true

  validates :title, presence: true
  validates :description, presence: true
  validates :serving_size, presence: true
end
