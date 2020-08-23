import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getRooms } from "../../services/apiHelper"

const Home = (props) => {
  const [rooms, setRooms] = useState([])

  const fetchRoomInfo = async () => {
    let res = await getRooms()
    setRooms(res)
  }

  useEffect(() => {
    fetchRoomInfo()
  }, [])

  console.log(rooms)

  return (
    <div className="home">
      {
        rooms.map((room, index) => {
          if (Object.keys(rooms).length === 0) {
            return <div>Loading...</div>
          }
          return (
            <Link key={index} to={{
              pathname: `/room/${room.code}`,
              roomProps: {room}
            }}>
              <div>{room.title}</div>
            </Link>
          )
        })}
    </div>
  )
}

export default Home
