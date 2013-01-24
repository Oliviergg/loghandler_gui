class AddServerName < ActiveRecord::Migration
  def change
    add_column :servers, :name, :string
  end

end
