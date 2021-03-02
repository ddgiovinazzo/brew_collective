class CheckInsEdit01 < ActiveRecord::Migration[5.2]
  def change
    remove_index :check_ins, :beer_id
    remove_index :check_ins, :user_id
    add_index :check_ins, :beer_id
    add_index :check_ins, :user_id
  end
end
