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

    const save = async ()=> {
        props.save(props.picture)
    }

    const disLike = async () => {
        props.disLike(props.picture._id)

    }

    const showExplanation = () => {
        alert(props.picture.description)
        return(
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
            N
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
                ? <FavoriteIcon  onClick={save}></FavoriteIcon>
                : props.picture.likeButton === 'disLike'
                    ? <FavoriteIcon style={{fill: 'red'}}onClick={disLike}></FavoriteIcon>
                    : null}
        </IconButton>
       
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
        onClick ={showExplanation}
        //   onClick={handleExpandClick}
        //   aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
    //    in={expanded} 
       timeout="auto" unmountOnExit>
        {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent> */}
      </Collapse>
    </Card>





            {/* <p>{props.picture.title}</p>
            {props.picture.media_type === 'video' ? <iframe src={props.picture.image} /> : <img src={props.picture.image} alt='' />}
            {/* <img src={props.picture.image} alt='' /> */}
            {/* <div>{props.picture.explanation}</div> */}
            {/* <FavoriteIcon style={{fill: props.picture.like ? 'green' : 'red'}} onClick={save}></FavoriteIcon> */}
            {/* {props.picture.likeButton === 'liked'
                ? <FavoriteIcon style={{fill: props.picture.like ? 'grey' : 'grey'}} onClick={save}></FavoriteIcon>
                : props.picture.likeButton === 'disLike'
                    ? <FavoriteIcon style={{fill: 'red'}}onClick={disLike}></FavoriteIcon>
                    : null} */} */}
        </div>
    )
}

