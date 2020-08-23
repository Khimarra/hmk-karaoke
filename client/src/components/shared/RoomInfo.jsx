import React from "react"

const RoomInfo = (props) => {
  console.log(props.room)

  let room = props.room
  return (
    <div>
      <div>{room.title}</div>
      <div>{room.code}</div>
      <div>{room.url}</div>
    </div>
  )
}

export default RoomInfo
