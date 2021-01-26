class BreweriesEdit03 < ActiveRecord::Migration[5.2]
  def change
    change_column :breweries, :brewery_type, :string, null:true
  end
end
