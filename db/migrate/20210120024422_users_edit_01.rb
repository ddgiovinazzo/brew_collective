class UsersEdit01 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :gender, :string
    add_column :users, :location, :string
    add_column :users, :country, :string, null: false
  end
end
