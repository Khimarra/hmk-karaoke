import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./components/screens/Home"
import RoomContainer from "./components/screens/RoomContainer"
// import NewRoom from "./components/screens/NewRoom"

const App = (props) => {
  return (
    <div className='bg-gray-700 h-screen'>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} />}
        />

        {/* <Route
          exact
          path="/newroom"
          render={(props) => <NewRoom {...props} />}
        /> */}

        <Route
          exact
          path="/room/:id/:code"
          render={(props) => <RoomContainer {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
