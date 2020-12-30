import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
export default function MediaCard(props) {

    const save = async() => {
        let newLike = props.picture
        newLike.likeButton = 'disLike'
        await axios.post("http://localhost:4200/save", newLike)
    }

   const disLike = async() => {
       props.disLike(props.picture._id)
   }
    return (
        <div>
            <p>{props.picture.title}</p>
            {props.picture.media_type === 'video' ? <iframe src={props.picture.image} /> :  <img src={props.picture.image} alt='' />}
            {/* <img src={props.picture.image} alt='' /> */}
            <div>{props.picture.explanation}</div>
            {props.picture.likeButton === 'liked' ? <span onClick={save}>like</span> : 
            props.picture.likeButton === 'disLike' ? <span onClick ={disLike}>unlike</span> : null}
        </div>
    )
}

