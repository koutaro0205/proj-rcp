class RecipeStep < ApplicationRecord
  has_many_attached :images
  belongs_to :recipe
  validates :description, presence: true
end
