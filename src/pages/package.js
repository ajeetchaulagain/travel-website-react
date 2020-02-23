import React from "react"
import MasterLayout from "../components/master-layout"
import Content from "../components/content"
import CommonHero from "../components/common-hero"

const PackagePage = () => {
  return (
    <MasterLayout>
      <CommonHero>
        <h1>About Us</h1>
      </CommonHero>
      <Content>
        <h1>This is Package Content</h1>
      </Content>
    </MasterLayout>
  )
}

export default PackagePage
