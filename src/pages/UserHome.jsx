import React from 'react'
import { Link } from 'react-router-dom'

const UserHome = () => {
  return (
    <>
      <div>
        <h1>User Home Page</h1>
      </div>
      <main>
        <ul>
          <li>
            <Link to="/picks">Today's Picks</Link>
          </li>
          <li>
            <Link>Today's Drops</Link>
          </li>
          <li>
            <Link>Late Trucks</Link>
          </li>
          <li>
            <Link>Carrier Profiles</Link>
          </li>
        </ul>
        <button>Sign Out</button>
      </main>
    </>
  )
}

export default UserHome
