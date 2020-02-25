import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"
import MetaHeader from "./meta-header"

const MasterLayout = props => {
  return (
    <div className="main">
      <MetaHeader />
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default MasterLayout
