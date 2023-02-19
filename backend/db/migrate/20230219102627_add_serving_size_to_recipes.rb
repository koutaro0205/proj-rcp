class AddServingSizeToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :serving_size, :integer
  end
end
