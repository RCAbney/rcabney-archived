import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="intro">
      <p>Yo my name is Ryan and I like chicken wings.</p>
    </section>
    <Portfolio />
  </Layout>
)

export default IndexPage
