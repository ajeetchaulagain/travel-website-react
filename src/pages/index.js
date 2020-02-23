import React from "react"
import MasterLayout from "../components/master-layout"
import IndexHero from "../components/index-hero"
import Content from "../components/content.js"

const IndexPage = () => {
  return (
    <MasterLayout>
      <IndexHero />
      <Content>
        <h1>Some of our Popular Packages</h1>
        <p>Here are some of our popular packages</p>
      </Content>
    </MasterLayout>
  )
}

export default IndexPage
