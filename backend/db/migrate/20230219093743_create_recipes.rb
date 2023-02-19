class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :description
      t.text :tip
      t.integer :cook_time
      t.integer :cost
      t.timestamps
    end
  end
end
