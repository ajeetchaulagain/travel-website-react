import React from "react"
import { Link } from "gatsby"

import welcomeStyles from "./welcome.module.scss"

const Welcome = () => {
  return (
    <div className={welcomeStyles.welcomeSection}>
      <div className={welcomeStyles.welcomeContent}>
        <h1> Welcome to New Arrival <br/>
        Travel and Tours</h1>
        <p>Your ultimate destination for your travel</p>
        <Link to="/package" className={welcomeStyles.welcomeButton}>Featured Package</Link>
        <Link to="/package" className={welcomeStyles.welcomeButton}>Book a Package</Link>
        
      </div>
    </div>
  )
}

export default Welcome
