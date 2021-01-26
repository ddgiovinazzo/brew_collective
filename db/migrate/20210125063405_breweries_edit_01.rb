class BreweriesEdit01 < ActiveRecord::Migration[5.2]
  def change
    change_column :breweries, :brewery_country, :string

  end
end
