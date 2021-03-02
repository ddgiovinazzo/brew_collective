class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.integer :beer_id, null: false
      t.integer :user_id, null: false
      t.index [ :beer_id ], unique: true
      t.index [ :user_id ], unique: true
      t.string :review
      t.timestamps
    end
  end
end
