import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"

const MasterLayout = props => {
  return (
    <div className="main">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default MasterLayout
