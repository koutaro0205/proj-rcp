class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show]

  def index
    @recipes = Recipe.all
    render json: @recipes.to_json(
      include: {
        user: { methods: [:image_url] }
      },
      methods: [:image_url]
    )
  end

  def show
    render json: @recipe.as_json(
      include: %i[
        recipe_ingredients
        recipe_steps
      ],
      methods: [:image_url]
    )
  end

  def create
    @recipe = current_user.recipes.build(recipe_params)

    attach_image(@recipe) if params[:image]

    if @recipe.save
      render json: { status: :created, recipe: @recipe }
    else
      render json: { status: :unprocessable_entity, errors: @recipe.errors }
    end
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.permit(
      :title,
      :image,
      :cook_time,
      :cost,
      :description,
      :tip,
      :serving_size,
      recipe_ingredients_attributes: %i[
        ingredient_name
        quantity
        _destroy
      ],
      recipe_steps_attributes: %i[
        description
        step_image
        _destroy
      ]
    )
  end
end
