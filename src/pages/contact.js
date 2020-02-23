import React from "react"
import MasterLayout from "../components/master-layout"
import Content from "../components/content"
import CommonHero from "../components/common-hero"

const ContactPage = () => {
  return (
    <MasterLayout>
      <CommonHero>
        <h1>Contact Us</h1>
      </CommonHero>
      <Content>
        <h1>This is Contact Page</h1>
      </Content>
    </MasterLayout>
  )
}

export default ContactPage
