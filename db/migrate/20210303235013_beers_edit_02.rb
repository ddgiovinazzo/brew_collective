class BeersEdit02 < ActiveRecord::Migration[5.2]
  def change
    remove_column :beers, :image_url
  end
end
