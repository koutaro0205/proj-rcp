class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: %i[show]

  def index
    @categories = Category.all
    render json: @categories
  end

  # カテゴリ詳細ページ
  # NOTE: カテゴリに紐づくレシピ一覧を返す
  def show
    @recipes = @category.recipes
    render json: @recipes.to_json(
      include: %i[
        user: { methods: [:image_url] }
        category
      ],
      methods: [:image_url]
    )
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end
end
