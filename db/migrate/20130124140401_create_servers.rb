class CreateServers < ActiveRecord::Migration
  def change
    create_table :servers do |t|
      t.string :desc
      t.string :url
      t.integer :port

      t.timestamps
    end
  end
end
