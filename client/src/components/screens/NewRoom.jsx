import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { createRoom } from '../../services/apiHelper'

const NewRoom = (props) => {
  const [newRoom, setNewRoom] = useState({
    title: '',
    url: '',
    code: ''
  })

  const createNewRoom = async () => {
    const res = await createRoom()
    setNewRoom(res)
  }

  useEffect(() => {
    createNewRoom()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const room = newRoom
  }

// const handleSubmit = (e) => {
//   e.preventDefault()

//   for (let i = 0; i < rooms.length; i++) {
//     if (rooms[i].code === input) {
//       history.push(`/room/${rooms[i].id}/${rooms[i].code}`)
//     } else {
//       let invalid = "Invalid Room Code"
//       return invalid
//     }
//   }
// }

  return (
    <div className="pt-32">
      <h1 className="text-6xl text-center text-blue-400">Make a New Room</h1>
      <p className="text-2xl text-center text-blue-500 pt-12 w-3/4 mx-auto">
        Provide a title and a zoom link for your room. You will be given a 4
        digit code to share with your friends!
      </p>
      <form className="flex flex-col pt-20" onSubmit={handleSubmit}>
        <input
          className="p-3 w-64 rounded-md mx-auto my-4 border-gray-500 border-t-4 border-r border-b border-l-4"
          type="text"
          placeholder="Room Title"
          onChange={(e) => setNewRoom(e.target.value)}
        />
        <input
          className="p-3 w-64 rounded-md mx-auto my-4 border-gray-500 border-t-4 border-r border-b border-l-4"
          type="text"
          placeholder="Zoom Link"
        />
        <input
          className="p-6 rounded-md bg-blue-700 text-blue-200 border-gray-800 border-t border-r-4 border-b-4 border-l mx-auto mt-10"
          type="submit"
          value="Create Room"
        />
      </form>
    </div>
  )
}

export default NewRoom
