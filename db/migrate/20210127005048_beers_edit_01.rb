class BeersEdit01 < ActiveRecord::Migration[5.2]
  def change
    change_column :beers, :abv, :float, null:false
  end
end
