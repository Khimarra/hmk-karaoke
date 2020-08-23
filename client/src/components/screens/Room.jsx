import React, { useState, useEffect } from "react"
import { getRoomsWithSongs } from "../../services/apiHelper"
import { useHistory } from "react-router-dom"

import Song from '../shared/Song'

const Room = (props) => {
  let room = props.location.rooms
  let id = room.id
  console.log(id)

  const [songs, setSongs] = useState([])

  const fetchSongs = async (id) => {
    let res = await getRoomsWithSongs(id)
    setSongs(res)
  }

  console.log(songs.songlists)

  let songInfo = songs.songlists

  useEffect(() => {
    fetchSongs(id)
  }, [])

  return (
    <div className="room">
      <div>{room.title}</div>
      <div>{room.code}</div>
      <div>{room.url}</div>

      <div>
        {songInfo && songInfo.map((song, index) => (
          <Song key={index} song={song} />
        ))}
      </div>
    </div>
  )
}

export default Room
