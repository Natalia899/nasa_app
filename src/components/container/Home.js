import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'


export default function Home() {
    const [picture, setPicture] = useState({image: '', description: '', title: ''})

    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=BBKiI58ExjoWiNfiUzXUL2M6KFKbJ2uUhKz1ic0w').then((res) => {
        console.log(res);
         setPicture(res.data)
      })
    }, [])
  
  return (
      <div>
          <MediaCard picture = {picture} />
      </div>
  )
}