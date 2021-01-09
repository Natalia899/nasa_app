import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './MediaCardStyle';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default function MediaCard(props) {
  const classes = useStyles();

  const save = async () => {
    props.save(props.picture)
  }

  const disLike = async () => {
    props.disLike(props.picture._id)
  }

  const showExplanation = () => {
    alert(props.picture.description)
    return (
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.picture.description}
        </Typography>
      </CardContent>
    )
  }
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="image" className={classes.avatar}>
              NASA
          </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.picture.title}
        />
        <CardMedia
          className={classes.media}
          image={props.picture.image}
          title={props.picture.title}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {props.picture.likeButton === 'liked'
              ? <FavoriteIcon onClick={save}></FavoriteIcon>
              : props.picture.likeButton === 'disLike'
                ? <FavoriteIcon style={{ fill: 'red' }} onClick={disLike}></FavoriteIcon>
                : null}
          </IconButton>
          <IconButton
            onClick={showExplanation}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          timeout="auto" unmountOnExit>
        </Collapse>
      </Card>
    </div>
  )
}

