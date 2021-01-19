class CreateCheckIns < ActiveRecord::Migration[5.2]
  def change
    create_table :check_ins do |t|
      t.integer  :user_id, null: false
      t.integer  :beer_id, null: false
      t.string   :review

      t.index [ :user_id ], unique: true
      t.index [ :beer_id ], unique: true

      t.timestamps
    end
  end
end