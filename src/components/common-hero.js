import React from "react"
import heroStyles from "./common-hero.module.scss"

const CommonHero = props => {
  return (
    <div className={heroStyles.commonHeroSection}>
      <div className={heroStyles.heroContent}>
        <h1>{props.children}</h1>
      </div>
    </div>
  )
}

export default CommonHero
