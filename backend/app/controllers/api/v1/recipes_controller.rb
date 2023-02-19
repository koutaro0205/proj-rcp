class Api::V1::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  # def new
  #   @recipe = Recipe.new
  #   3.times { @recipe.materials.build }
  #   3.times { @recipe.instructions.build }
  # end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render json: { recipe: @recipe }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :title,
      :main_image,
      :cooking_time,
      :cost,
      :description,
      :tip,
      :serving_size,
      recipe_ingredients_attributes: [:id, :ingredient_name, :quantity, :_destroy],
      recipe_steps_attributes: [:id, :description, :recipe_steps_images, :_destroy]
    )
  end

  def attach_recipe_image(recipe)
    blob = ActiveStorage::Blob.create_and_upload!(
      io: StringIO.new(decode(params[:image][:data]) + "\n"),
      filename: params[:image][:filename]
    )
    recipe.image.attach(blob)
  end

  def attach_recipe_steps_images(recipe)
    recipe_params[:recipe_steps_attributes].each do |_, recipe_step_attributes|
      recipe_step_attributes[:recipe_steps_images].each do |image_params|
        blob = ActiveStorage::Blob.create_and_upload!(
          io: StringIO.new(decode(image_params[:data]) + "\n"),
          filename: image_params[:filename]
        )
        recipe_step.images.attach(blob)
      end
    end
  end
end
