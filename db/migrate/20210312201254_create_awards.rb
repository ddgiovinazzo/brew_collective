class CreateAwards < ActiveRecord::Migration[5.2]
  def change
    create_table :awards do |t|
      t.integer :badge_id, null: false
      t.integer :user_id, null: false
      t.index [ :badge_id ]
      t.index [ :user_id ]
      t.timestamps
    end
  end
end
