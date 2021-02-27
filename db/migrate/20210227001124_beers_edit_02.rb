class BeersEdit02 < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :image_url, :string
  end
end
