import React from 'react'
import { Link } from 'react-router-dom'
const Picks = () => {
  return (
    <>
      <div>
        <h1>Today's Picks</h1>
      </div>
      <main>
        <section>
          <h4>Load ID</h4>
          <ul className="load-list">
            <li>
              <Link to="/loadtracker">
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Load Id </span>
                <span>P/U Date </span>
                <span>P/U City </span>
                <span>D/O Date </span>
                <span>D/O City </span>
                <span>Carrier</span>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Picks
