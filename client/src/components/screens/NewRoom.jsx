import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { createRoom } from "../../services/apiHelper"

const NewRoom = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    code: "",
  })
  const { title, url, code } = e.target
  const { createRoom } = props

  // const randomCode = () => {
  //   Math.floor(Math.random() * 16777215).toString(16)
  //   // does not account for room numbers already existing...
  //   // should fix edge cases later
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="pt-32">
      <h1 className="text-6xl text-center text-blue-400">Make a New Room</h1>
      <p className="text-2xl text-center text-blue-500 pt-12 w-3/4 mx-auto">
        Provide a title and a zoom link for your room. You will be given a code
        to share with your friends!
      </p>
      <form
        className="flex flex-col pt-20"
        onSubmit={(e) => {
          e.preventDefault()
          createRoom(formData)
        }}
      >
        <label>Room Title:</label>
        <input
          className="p-3 w-64 rounded-md mx-auto my-4 border-gray-500 border-t-4 border-r border-b border-l-4"
          type="text"
          name="title"
          value={title}
          placeholder="Room Title"
          onChange={handleChange}
        />

        <label>Zoom Link:</label>
        <input
          className="p-3 w-64 rounded-md mx-auto my-4 border-gray-500 border-t-4 border-r border-b border-l-4"
          type="text"
          name="url"
          value={url}
          placeholder="Zoom Link"
          onChange={handleChange}
        />
        <button className="p-6 rounded-md bg-blue-700 text-blue-200 border-gray-800 border-t border-r-4 border-b-4 border-l mx-auto mt-10">
          Create Room
        </button>
      </form>
    </div>
  )
}

export default NewRoom
