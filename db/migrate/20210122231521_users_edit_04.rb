class UsersEdit04 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :birthday, :datetime, null: false
  end
end
