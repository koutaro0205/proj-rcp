class RecipeStep < ApplicationRecord
  belongs_to :recipe
  has_one_attached :step_image

  validates :description, presence: true
end
