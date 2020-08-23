import React from 'react'

const Song = (props) => {
  console.log(props.song)

  let song = props.song

  return (
    <div>
      <div>{song.name}</div>
      <div>{song.song}</div>
      <div>{song.url}</div>
    </div>
  )
}

export default Song