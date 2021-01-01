
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Search from './Search'
import Home from './Home'
import Favorites from './Favorites'
import MediaCard from './MediaCard'

export default function Container() {
  return (
    <div>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/search" exact render={() => <Search />} />
      <Route path="/favorites" exact render={() => <Favorites />} />
      <Route exact path='/favorites/:id' render={({ match }) => <MediaCard match={match} />} />
    </div>
  )
}