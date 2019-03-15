import React from "react"
import BlurComponent from '../components/blur'
import ServiceComponent from '../components/services'
import AboutComponent from '../components/about'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BlurComponent />
    <ServiceComponent />
    <AboutComponent />
  </Layout>
)

export default IndexPage
