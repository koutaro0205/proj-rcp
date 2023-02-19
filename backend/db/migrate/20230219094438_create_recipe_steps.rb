class CreateRecipeSteps < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_steps do |t|
      t.references :recipe, foreign_key: true, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
