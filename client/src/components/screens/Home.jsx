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
        return <div>Invalid Room Code</div>
      }
    }
  }

  return (
    <div className="home">
      <h1>HMK Karaoke</h1>
      <h2>Join a room:</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Join a room:
          <input
            name="code"
            type="text"
            placeholder="4 digit code"
            onChange={(e) => setInput(e.target.value)}
          />
        </label>

        <input type="submit" value="Join" />
      </form>
    </div>
  )
}

export default Home
