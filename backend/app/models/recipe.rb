class Recipe < ApplicationRecord
  has_one_attached :image
  has_many :recipe_ingredients, dependent: :destroy
  has_many :recipe_steps, dependent: :destroy
  belongs_to :user
  belongs_to :category
  accepts_nested_attributes_for :recipe_ingredients, allow_destroy: true
  accepts_nested_attributes_for :recipe_steps, allow_destroy: true
  has_many :favorites, dependent: :destroy
  # レシピをお気に入り登録したユーザー一覧
  has_many :users_favorite, through: :favorites, source: :user

  validates :title, presence: true
  validates :description, presence: true
  validates :serving_size, presence: true
  validates :user_id, presence: true

  include Rails.application.routes.url_helpers

  def image_url
    image.attached? ? url_for(image) : nil
  end
end
