class ChangeDataTypeForCostInRecipes < ActiveRecord::Migration[7.0]
  def change
    change_column :recipes, :cost, :text
    change_column :recipes, :cook_time, :text
  end
end
