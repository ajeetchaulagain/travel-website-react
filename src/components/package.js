import React from "react"
import packageImage from "../images/singapore.jpg"

import packageStyles from "./package.module.scss"
import { Link } from "gatsby"

const Package = () => {
  return (
    <div className={packageStyles.packageWrapper}>
      <Link to="/">
        <img src={packageImage} />
        <div className={packageStyles.frontMatter}>
          <h2>Srilanka</h2>
          <p>4 Night/ 5 Days</p>
          <p>Nrs. 8000 . US$ 200</p>
        </div>
      </Link>
    </div>
  )
}

export default Package
