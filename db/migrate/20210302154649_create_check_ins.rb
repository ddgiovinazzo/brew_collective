class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.integer :beer_id, null: false
      t.integer :user_id, null: false
      t.index [ :beer_id ]
      t.index [ :user_id ]
      t.string :review
      t.integer :rating, default: 0

      t.timestamps
    end
  end
end
