class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :title
      t.string :code
      t.string :url

      t.timestamps
    end
  end
end
