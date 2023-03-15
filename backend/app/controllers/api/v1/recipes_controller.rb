class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show]

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def show
    render json: @recipe.as_json(
      include: {
        recipe_ingredients: {},
        recipe_steps: {
          include: {
            step_image_attachment: {
              include: { blob: { methods: :service_url } }
            }
          }
        }
      }
    ).merge(image_url: url_for(@recipe.image))
  end

  def create
    @recipe = Recipe.new(recipe_params)

    attach_recipe_image(@recipe)
    attach_recipe_steps_images(@recipe)

    if @recipe.save
      render json: { status: :created, recipe: @recipe }
    else
      render json: { status: :unprocessable_entity }
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
      recipe_ingredients_attributes: [:ingredient_name, :quantity, :_destroy],
      recipe_steps_attributes: [:description, :_destroy, { step_image: [] }],
    )
  end

  def attach_recipe_image(recipe)
    image_data = params[:image][:data]
    decoded_image_data = Base64.decode64(image_data)
    io = StringIO.new(decoded_image_data)
    filename = params[:image][:filename]

    blob = ActiveStorage::Blob.create_and_upload!(
      io: io,
      filename: filename
    )

    recipe.image.attach(blob)
  end

  def attach_recipe_steps_images(recipe)
    recipe.recipe_steps.each do |recipe_step|
      next unless recipe_step.step_image.present?

      recipe_step.step_image.each do |image|
        blob = ActiveStorage::Blob.create_and_upload!(
          io: StringIO.new(Base64.decode64(image[:data])),
          filename: image[:filename],
        )
        recipe_step.step_image_attachment.attach(blob)
      end
    end
  end
end
