class RemoveServingSizeFromRecipeIngredients < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipe_ingredients, :serving_size, :integer
  end
end
