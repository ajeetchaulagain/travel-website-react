import React from "react"
import contentLayoutStyles from "./content.module.scss"

const Content = props => {
  return (
    <div className={contentLayoutStyles.contentSection}>
      <div className={contentLayoutStyles.content}>{props.children}</div>
    </div>
  )
}

export default Content
