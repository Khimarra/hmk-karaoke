import React, { useState, useEffect } from "react"
import { getRoomsWithSongs } from "../../services/apiHelper"

import Song from "../shared/Song"
import RoomInfo from "../shared/RoomInfo"

const Room = (props) => {
  let room = props.match.params
  let id = room.id

  const [songs, setSongs] = useState([])

  const fetchSongs = async (id) => {
    let res = await getRoomsWithSongs(id)
    setSongs(res)
  }

  let songInfo = songs.songlists

  useEffect(() => {
    fetchSongs(id)
  }, [])

  return (
    <div className="room">
      <RoomInfo room={songs} />

      <div>
        {songInfo &&
          songInfo.map((song, index) => <Song key={index} song={song} />)}
      </div>
    </div>
  )
}

export default Room
