import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getRooms } from '../../services/apiHelper'

const Home = (props) => {

  const [rooms, setRooms] = useState([])

    const fetchRoomInfo = async () => {
      const res = await getRooms()
      console.log("sup")
      setRooms(res)
    }

  useEffect(() => {
    fetchRoomInfo()
    console.log('useeffect')
  }, [])

  console.log(rooms)

  return (
    <div className='home'>
      <Link to={`/room/4D2T`} >
        <div>
          Link
        </div>
      </Link>
    </div>
  )
}

export default Home
