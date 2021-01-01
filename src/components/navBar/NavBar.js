import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Paper, Tabs, Tab } from "@material-ui/core"
import useStyles from './Style';

export default function NavBar() {
    const classes = useStyles();
    return (
            <Paper square>
                <Tabs className={classes.navbar}>
                    <Link to="/"><Tab className={classes.navLink} label="Home" /></Link>
                    <Link to="/search"><Tab className={classes.navLink} label="Search" /> </Link>
                    <Link to="/favorites"><Tab className={classes.navLink} label="Favorites" /> </Link>
                </Tabs>
            </Paper>
         
    )
}


