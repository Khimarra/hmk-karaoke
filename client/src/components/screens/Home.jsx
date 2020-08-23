import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

import { getRooms } from "../../services/apiHelper"

const Home = (props) => {
  const [rooms, setRooms] = useState([])
  const [input, setInput] = useState([])

  const fetchRoomInfo = async () => {
    const res = await getRooms()
    setRooms(res)
  }

  let history = useHistory()

  useEffect(() => {
    fetchRoomInfo()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].code === input) {
        console.log(e.target.value)
        history.push(`/room/${rooms[i].id}/${rooms[i].code}`)
      } else {
        let invalid = "Invalid Room Code"
        return invalid
      }
    }
  }

  return (
    <div className="home">
      <div className="text-6xl text-center text-blue-400 pt-64">
        Karaoke Night
      </div>

      <form className="flex flex-row justify-center" onSubmit={handleSubmit}>
        {/* <div className="text-blue-400 text-xl">Join a room:</div> */}
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
    </div>
  )
}

export default Home
