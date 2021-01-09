import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'


export default function Home() {
  const [picture, setPicture] = useState({ image: '', description: '', title: '' })
  useEffect(async () => {
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=BBKiI58ExjoWiNfiUzXUL2M6KFKbJ2uUhKz1ic0w')
    // .then((res) => {
    //   console.log(res.data);
let res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=BBKiI58ExjoWiNfiUzXUL2M6KFKbJ2uUhKz1ic0w')
console.log(res.data.url)
      let data = {...picture}
      picture.image = res.data.url
      picture.description = res.data.explanation
      picture.title = res.data.title
      console.log(data)
      setPicture(res)
    // })
  }, [])
console.log(picture);
  return (
    <div className='home'>
      {picture.image !== '' ? <div><p className='homeTitle'>{picture.data.title}</p>
      <img className='homeImage' src={picture.data.url} alt=''/>
      <div className='homeDescription'>{picture.data.explanation}</div></div>: null}
    </div>
      
    
  )
}