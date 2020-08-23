import React from "react"

const RoomInfo = (props) => {

  console.log(props)
  let room = props.room
  return (
    <div>
      <div className="flex flex-row justify-around items-center">
        <div className="w-16 text-2xl text-blue-400">{room.code}</div>
        <div className="text-4xl text-center text-blue-200">{room.title}</div>
        <div className="w-16"></div>
      </div>
      <a href={room.url} className="text-2xl flex justify-center text-blue-400">
        Join the call
      </a>
    </div>
  )
}

export default RoomInfo
