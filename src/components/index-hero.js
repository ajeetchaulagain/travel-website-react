import React from "react"
import { Link } from "gatsby"

import welcomeStyles from "./index-hero.module.scss"

const IndexHero = () => {
  return (
    <div className={welcomeStyles.welcomeSection}>
      <div className={welcomeStyles.welcomeContent}>
        <h1>
          Welcome to New Arrival <br />
          Travel and Tours
        </h1>
        <p>Make a memories with us</p>
        <Link to="/package" className={welcomeStyles.welcomeButton}>
          Featured Package
        </Link>
        <Link to="/package" className={welcomeStyles.welcomeButton}>
          Book a Package
        </Link>
      </div>
    </div>
  )
}

export default IndexHero
