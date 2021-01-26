class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.integer :brewery_id, null: false
      t.string :serving_style, null: false
      t.integer :abv, null: false
      t.integer :ibu, null: false
      t.text :flavor_profile, null: false

      t.index [ :name ], unique: true
      t.index [ :brewery_id ]
      t.timestamps
    end
  end
end