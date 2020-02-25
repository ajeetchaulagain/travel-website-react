import React from "react"
import MasterLayout from "../components/master-layout"
import IndexHero from "../components/index-hero"
import Content from "../components/content"
import Package from "../components/package"

const IndexPage = () => {
  return (
    <MasterLayout>
      <IndexHero />
      <Content>
        <h1>Our Popular Packages</h1>
        <p>Choose one of our popular packages.</p>
        <div className="flex-wrapper">
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
          <Package />
        </div>
      </Content>
    </MasterLayout>
  )
}

export default IndexPage
