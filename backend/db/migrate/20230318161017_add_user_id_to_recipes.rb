class AddUserIdToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_reference :recipes, :user, null: false, foreign_key: true
    add_index :recipes, [:user_id, :created_at]
  end
end
