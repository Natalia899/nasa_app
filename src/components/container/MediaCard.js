import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function MediaCard(props) {


    const save = async() => {
        let newLike = props.picture
        newLike.likeButton = 'disLike'
        await axios.post("http://localhost:4200/save", newLike)
    }

   const disLike = async() => {
       console.log(props.picture._id);
       console.log(props);
       props.disLike(props.picture._id)
   }
    return (
        <div>
            <p>{props.picture.title}</p>
            <img src={props.picture.image} alt='' />
            <div>{props.picture.explanation}</div>
            {props.picture.likeButton === 'liked' ? <span onClick={save}>like</span> : 
            props.picture.likeButton === 'disLike' ? <span onClick ={disLike}>unlike</span> : null}
        </div>
    )
}