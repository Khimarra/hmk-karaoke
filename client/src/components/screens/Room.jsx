import React, { useState } from 'react'
import { getRoomsWithSongs } from '../../services/apiHelper'
import { useHistory } from 'react-router-dom'

const Room = (props) => {

  console.log(props)

  // const [room, setRoom] = useState([])

  // const fetchRoom = async () => {
  //   let res = await getRoomsWithSongs()
  //   setRoom(res)
  // }

  // console.log(room)

  // useHistory(() => {
  //   if (props.history) {
  //     fetchRoom()
  //   }
  // }, [])

  // console.log(room)

  return (
    <div className='room'>
      <div>Room page</div>
    </div>
  )
}

export default Room
