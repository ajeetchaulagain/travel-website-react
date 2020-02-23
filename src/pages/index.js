import React from "react"
import MasterLayout from "../components/master-layout"
import IndexHero from "../components/index-hero"
import Content from "../components/content.js"

const IndexPage = () => {
  return (
    <MasterLayout>
      <IndexHero />
      <Content>
        <h1>This is a dummy content section. enjoy reading it This is a dummy content section. enjoy reading it This is a dummy content section. enjoy reading it This is a dummy content section. enjoy reading it
        This is a dummy content section. enjoy reading it
        This is a dummy content section. enjoy reading it
        This is a dummy content section. enjoy reading it
        This is a dummy content section. enjoy reading it</h1>
      </Content>
    </MasterLayout>
  )
}

export default IndexPage
