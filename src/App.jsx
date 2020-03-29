import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import UserHome from './pages/UserHome'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

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
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
