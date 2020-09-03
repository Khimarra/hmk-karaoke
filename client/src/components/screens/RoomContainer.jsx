import React, { useState, useEffect } from "react"
import {
  getRoomsWithSongs,
  getRooms,
  postRoom,
  putRoom,
  deleteRoom,
} from "../../services/apiHelper"

import Song from "../shared/Song"
import RoomInfo from "../shared/RoomInfo"
import { useHistory, Route, Switch } from "react-router-dom"
import NewRoom from "./NewRoom"
import EditRoom from "../shared/EditRoom"
import DeleteRoom from "../shared/DeleteRoom"
import Rooms from "../shared/Rooms"

const Room = (props) => {
  let room = props.match.params
  let id = room.id

  const [allRooms, setAllRooms] = useState([])
  const [songs, setSongs] = useState([])
  const history = useHistory([])

  useEffect(() => {
    fetchRooms(), fetchSongs(id)
  }, [])

  const fetchRooms = async () => {
    const rooms = await getRooms()
    setAllRooms(rooms)
  }

  const createRoom = async (roomData) => {
    const newRoom = await postRoom(roomData)
    setAllRooms((prevState) => [...prevState, newRoom])
    history.push("/rooms")
  }

  const updateRoom = async (id, roomData) => {
    const updatedRoom = await putRoom(id, roomData)
    setAllRooms((prevState) =>
      prevState.map((room) => {
        return room.id === Number(id) ? updatedRoom : room
      })
    )
    history.push("/rooms")
  }

  const removeRoom = async (id) => {
    await deleteRoom(id)
    setAllRooms((prevState) => prevState.filter((room) => room.id !== id))
    history.push("/rooms")
  }

  // const fetchSongs = async (id) => {
  //   let res = await getRoomsWithSongs(id)
  //   setSongs(res)
  // }

  // let songInfo = songs.songlists

  return (
    <>
      <Switch>
        <Route path="/rooms/new">
          <NewRoom createRoom={createRoom} />
        </Route>

        <Route path="/rooms/:id/edit">
          <EditRoom updateRoom={updateRoom} allRooms={allRooms} />
        </Route>

        <Route path="/rooms/:id">
          <DeleteRoom allRooms={allRooms} removeRoom={removeRoom} />
        </Route>

        <Route path="/rooms">
          <Rooms allRooms={allRooms} />
        </Route>
        {/* <RoomInfo room={songs} />

      <div>
        {songInfo &&
          songInfo.map((song, index) => <Song key={index} song={song} />)}
      </div> */}
      </Switch>
    </>
  )
}

export default RoomContainer
