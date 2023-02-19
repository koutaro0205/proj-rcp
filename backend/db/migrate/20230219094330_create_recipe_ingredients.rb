class CreateRecipeIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_ingredients do |t|
      t.references :recipe, foreign_key: true, null: false
      t.integer :serving_size, null: false
      t.string :ingredient_name, null: false
      t.string :quantity, null: false
      t.timestamps
    end
  end
end
