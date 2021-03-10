class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :requestor_id, null: false
      t.integer :receiver_id, null: false
      t.string :status, null: false

      t.index [ :requestor_id ]
      t.index [ :receiver_id ]

      t.timestamps
    end
  end
end
