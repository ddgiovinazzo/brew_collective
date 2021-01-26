class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :brewery_type, null: false
      t.string :brewery_country, null: false

      t.index [ :name ], unique: true
      t.timestamps
    end
  end
end
