class CreateSonglists < ActiveRecord::Migration[6.0]
  def change
    create_table :songlists do |t|
      t.string :name
      t.string :song
      t.string :url

      t.timestamps
    end
  end
end
