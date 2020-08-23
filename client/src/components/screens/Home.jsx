import React, { useState, useEffect } from "react"
import { Link, Redirect } from "react-router-dom"

import { getRooms } from "../../services/apiHelper"

const Home = (props) => {
  const [rooms, setRooms] = useState([])
  const [input, setInput] = useState([])

  const fetchRoomInfo = async () => {
    const res = await getRooms()
    setRooms(res)
  }

  useEffect(() => {
    fetchRoomInfo()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(e.target.value)

    if (rooms.code === input) {
      return <div>{/* link to room */}</div>
    } else {
      return <div>Invalid Room Code</div>
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
            value={input}
            onChange={(e) => console.log(e.target.value)}
          />
        </label>

        <input type="submit" value="Join" />
      </form>

      {/* {rooms.map((room, index) => {
        if (Object.keys(rooms).length === 0) {
          return <div>Loading...</div>
        }
        return (
          <Link
            key={index}
            to={{
              pathname: `/room/${room.code}`,
              rooms: {
                title: room.title,
                code: room.code,
                id: room.id,
                url: room.url,
              },
            }}
          >
            <div>{room.title}</div>
          </Link>
        )
      })} */}
    </div>
  )
}

export default Home
