class RecipeStep < ApplicationRecord
  has_many_attached :recipe_steps_images
  belongs_to :recipe
  validates :description, presence: true
end
