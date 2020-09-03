import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"

import { getRooms, postRoom } from "../../services/apiHelper"

const Home = (props) => {
  const [allRooms, setAllRooms] = useState([])
  const [input, setInput] = useState([])
  let history = useHistory()

  useEffect(() => {
    fetchRooms()
  }, [])

  const fetchRooms = async () => {
    const rooms = await getRooms()
    setAllRooms(rooms)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].code === input) {
        history.push(`/room/${rooms[i].id}/${rooms[i].code}`)
      } else {
        let invalid = "Invalid Room Code"
        return invalid
      }
    }
  }

  const createRoom = async (roomData) => {
    const newRoom = await postRoom(roomData)
    setAllRooms(prevState => ([
      ...prevState,
      newRoom
    ]))
    // history.push('/rooms')
  }

  // attempting to make new room
  // home page has button to go to new room page
  // new room page has form to fill out
  // form on new room page has submit to create new room

  return (
    <div>
      <div className="text-6xl text-center text-blue-400 pt-64">
        Karaoke Night
      </div>

      <form
        className="mt-24 flex flex-row justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="p-6 w-40 rounded-md m-2 border-gray-500 border-t-4 border-r border-b border-l-4"
          name="code"
          type="text"
          placeholder="4 digit code"
          onChange={(e) => setInput(e.target.value)}
        />

        <input
          className="p-6 rounded-md bg-blue-700 text-blue-200 m-2 border-gray-800 border-t border-r-4 border-b-4 border-l"
          type="submit"
          value="Join a room"
        />
      </form>

      <div className="flex mt-24">
        <Link
          className="p-6 rounded-md bg-blue-700 text-blue-200 border-gray-800 border-t border-r-4 border-b-4 border-l mx-auto"
          to="/newroom"
        >
          <div>Make a New Room</div>
        </Link>
      </div>
    </div>
  )
}

export default Home
