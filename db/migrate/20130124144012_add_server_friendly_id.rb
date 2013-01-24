class AddServerFriendlyId < ActiveRecord::Migration
  def change
    add_column :servers, :slug,:string
    add_index :servers, :slug, unique: true
  end
end
