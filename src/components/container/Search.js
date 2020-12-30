import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MediaCard from './MediaCard'

export default function Search() {
    const [searchedImage, setSearchedImage] = useState('')
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=${searchedImage}`).then((res) => {
            const data = res.data.collection.items.filter(r => r.links).map(r => ({
                image: r.links[0].href,
                title: r.data[0].title,
                description: r.data[0].description,
                like: false,
                likeButton: 'liked'
            })).slice(0, 15)
            console.log(data);
            setPictures(data)
        })
    }, [searchedImage])

    return (
        <div>
            <input name='picture' onChange={({ target }) => setSearchedImage(target.value)} value={searchedImage} />
            { searchedImage !== "" ? pictures.map(p => <MediaCard picture={p} />) : null}
        </div>
    )
}