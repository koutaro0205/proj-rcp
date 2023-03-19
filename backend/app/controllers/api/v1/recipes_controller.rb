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
      include: {
        recipe_ingredients: {},
        recipe_steps: {
          include: {
            step_image_attachment: {
              include: { blob: { methods: [:image_url] } }
            }
          }
        }
      },
      methods: [:image_url]
    )
  end

  def create
    @recipe = current_user.recipes.build(recipe_params)

    if params[:image]
      attach_image(@recipe)
    end
    # attach_recipe_steps_images(@recipe)
    if recipe_params[:step_image_attributes].present?
      @recipe.recipe_steps.last.step_image.attach(io: StringIO.new(Base64.decode64(recipe_params[:step_image_attributes][:io])), filename: recipe_params[:step_image_attributes][:filename])
    end

    # if recipe_params[:recipe_steps_attributes].present?
    #   recipe_params[:recipe_steps_attributes].each do |step|
    #     if step[:step_image].present?
    #       @recipe_step = RecipeStep.new(step)
    #       @recipe_step.step_image.attach(step[:step_image])
    #       @recipe_step.save
    #     end
    #   end
    # end

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
      recipe_ingredients_attributes: [:ingredient_name, :quantity, :_destroy],
      recipe_steps_attributes: [:description, :_destroy, { step_image_attributes: [:io, :filename] }],
    )
  end

  # def attach_recipe_image(recipe)
  #   image_data = params[:image][:io]
  #   decoded_image_data = Base64.decode64(image_data)
  #   io = StringIO.new(decoded_image_data)
  #   filename = params[:image][:filename]

  #   blob = ActiveStorage::Blob.create_and_upload!(
  #     io: io,
  #     filename: filename
  #   )

  #   recipe.image.attach(blob)
  # end

  # def attach_recipe_steps_images(recipe)
  #   recipe.recipe_steps.each do |recipe_step|
  #     next unless recipe_step.step_image.present?

  #     recipe_step.step_image.each do |image|
  #       blob = ActiveStorage::Blob.create_and_upload!(
  #         io: StringIO.new(Base64.decode64(image[:io])),
  #         filename: image[:filename],
  #       )
  #       recipe_step.step_image_attachment.attach(blob)
  #     end
  #   end
  # end

  # def attach_recipe_steps_images(recipe)
  #   recipe.recipe_steps.each do |recipe_step|
  #     next unless recipe_step.step_image.present?

  #     image = recipe_step.step_image
  #     io = StringIO.new(Base64.decode64(image[:io]))

  #     filename = image[:filename]
  #     blob = ActiveStorage::Blob.create_and_upload!(
  #       io: io,
  #       filename: filename
  #     )
  #     recipe_step.step_image_attachment.attach(blob)
  #   end
  # end
end
