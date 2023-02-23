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

    attach_recipe_image(@recipe)
    attach_recipe_steps_images(@recipe)

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
      :image,
      :cooking_time,
      :cost,
      :description,
      :tip,
      :serving_size,
      recipe_ingredients_attributes: [:id, :ingredient_name, :quantity, :_destroy],
      recipe_steps_attributes: [:id, :description, :images, :_destroy]
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
    # recipe_steps_attributes内のimageに対して処理を行う
    recipe.recipe_steps.each do |recipe_step|
      # 既にActiveStorageに紐づいている場合は処理をスキップ
      next unless recipe_step.image.attached?

      uploaded_file = ActionDispatch::Http::UploadedFile.new({
        tempfile: StringIO.new(Base64.decode64(recipe_step.image[:data])),
        filename: recipe_step.image[:filename]
      })
      blob = ActiveStorage::Blob.create_after_upload!(io: uploaded_file.open, filename: uploaded_file.original_filename, content_type: uploaded_file.content_type)
      recipe_step.image.attach(blob)
    end
  end

  # def attach_recipe_steps_images
  #   params[:recipe_steps_attributes].each do |_, recipe_step_attributes|
  #     recipe_step_attributes[:images].each do |image_params|
  #       blob = ActiveStorage::Blob.create_and_upload!(
  #         io: StringIO.new(decode(image_params[:data]) + "\n"),
  #         filename: image_params[:filename]
  #       )
  #       recipe_step.images.attach(blob)
  #     end
  #   end
  # end
end
