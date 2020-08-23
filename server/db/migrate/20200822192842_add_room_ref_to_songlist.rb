class AddRoomRefToSonglist < ActiveRecord::Migration[6.0]
  def change
    add_reference :songlists, :room, null: false, foreign_key: true
  end
end
