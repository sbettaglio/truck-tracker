import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import UserHome from './pages/UserHome'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Picks from './pages/Picks'
import LateTrucks from './pages/LateTrucks'
import CarrierProfiles from './pages/CarrierProfiles'
import NewCarrier from './NewCarrier'
import NewLoad from './pages/NewLoad'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/userHome">User Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/userHome" component={UserHome}></Route>
        <Route exact path="/picks" component={Picks}></Route>
        <Route exact path="/late" component={LateTrucks}></Route>
        <Route exact path="/carriers" component={CarrierProfiles}></Route>
        <Route exact path="/newCarrier" component={NewCarrier}></Route>
        <Route exact path="/create" component={NewLoad}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
