import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from './MediaCard'

export default function Favorites() {
  const [pictures, setPictures] = useState([])
  useEffect(() => {
    let getImages = async () => {
      let images = await axios.get("http://localhost:4200/images")
      setPictures(images.data)
    }
    getImages()
  }, [])

  const disLike = async (id) => {
    let updatedList = await axios.delete(`http://localhost:4200/unlike/${id}`)
    setPictures(updatedList.data)
  }

  return (
    <div>
      {pictures.map(p => <MediaCard picture={p} disLike={disLike} />)}
      {/* {pictures.length > 0 ? pictures.map(p => <MediaCard picture={p} />) : null}  */}
    </div>
  )
}