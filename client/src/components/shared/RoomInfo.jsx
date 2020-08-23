import React from "react"

const RoomInfo = (props) => {

  let room = props.room
  return (
    <div>
      <div>{room.title}</div>
      <div>{room.code}</div>
      <div className=''>{room.url}</div>
    </div>
  )
}

export default RoomInfo
