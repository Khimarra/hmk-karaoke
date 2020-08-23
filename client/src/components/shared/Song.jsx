import React from "react"

const Song = (props) => {
  let song = props.song

  return (
    <div className='flex flex-row m-1 mx-2 bg-gray-600'>
      <div className='w-1/8 px-4'>{song.id}</div>
      <div className='w-1/4'>{song.name}</div>
      <a href={song.url} className='w-auto'>{song.song}</a>
    </div>
  )
}

export default Song
