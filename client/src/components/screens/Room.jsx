import React, { useState, useEffect } from "react"
import { getRoomsWithSongs } from "../../services/apiHelper"
import { useHistory } from "react-router-dom"

import Song from "../shared/Song"
import RoomInfo from "../shared/RoomInfo"

const Room = (props) => {
  console.log(props)
  let room = props.match.params
  console.log(room)
  // let code = room.code
  let id = room.id

  const [songs, setSongs] = useState([])

  const fetchSongs = async (id) => {
    let res = await getRoomsWithSongs(id)
    setSongs(res)
  }

  let songInfo = songs.songlists
  console.log(songInfo)

  useEffect(() => {
    fetchSongs(id)
  }, [])

  return (
    <div className="room">
      <RoomInfo room={room} />

      <div>
        {songInfo &&
          songInfo.map((song, index) => <Song key={index} song={song} />)}
      </div>
    </div>
  )
}

export default Room
