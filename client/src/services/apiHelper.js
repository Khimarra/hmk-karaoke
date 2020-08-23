import axios from 'axios'
import apiUrl from './apiConfig'

const api = axios.create({
  baseURL: apiUrl
})


// ========================================================
// =================== ROOMS ==============================
// ========================================================

export const getRooms = async () => {
  try {
    const res = await axios.get(`${apiUrl}/rooms`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getRoomsWithSongs = async (room_id) => {
  console.log("first string")
  try {
    const res = await axios.get(`${apiUrl}/rooms/${room_id}`)
    console.log("string")
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getRoomById = async (room_id) => {
  const res = await axios.get(`${apiUrl}/rooms/${room_id}`)
  return res
}

export const createRoom = async (roomData) => {
  const res = await api.post('/rooms/', roomData)
  localStorage.setItem('roomToken', res.data.token)
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
  return res.data.room
}

export const editRoom = async (room_id, formData) => {
  console.log(formData)
  try {
    const res = await api.put(`/rooms/${room_id}`, formData)
    return res
  } catch (e) {
    console.log(e.message)
  }
}

export const deleteRoom = async (room_id) => {
  const res = await api.delete(`/rooms/${room_id}`)
  return res.data
}


// ========================================================
// =================== SONGS ==============================
// ========================================================

export const getSongs = async () => {
  const res = await axios.get(`${apiUrl}/songlists`)
  return res
}

export const getSongById = async (song_id) => {
  const res = await axios.get(`${apiUrl}/songlists/${song_id}`)
  return res
}

export const createSong = async (songData) => {
  const token = localStorage.getItem('roomToken')
  const res = await axios({
    url: `${apiUrl}/songlists`,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    method: 'POST',
    data: (songData)
  })
  return res
}

export const editSong = async (song_id, formData) => {
  console.log(formData)
  try {
    const res = await api.put(`/songlists/${song_id}`, formData)
    return res
  } catch (e) {
    console.log(e.message)
  }
}

export const deleteSong = async (song_id) => {
  const res = await api.delete(`/songlists/${song_id}`)
  return res.data
}
