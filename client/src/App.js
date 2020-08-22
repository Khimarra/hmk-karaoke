import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from './components/screens/Home'
import Room from './components/screens/Room'
import NewRoom from './components/screens/NewRoom'

const App = (props) => {
  
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Home {...props}  />}
        />

        <Route
          exact
          path='/newroom'
          render={(props) => <NewRoom />}
        />

        <Route
          exact
          path='/room/:id'
          render={(props) => <Room {...props} />}
        />

      </Switch>
      
    </div>
  )
}

export default App
