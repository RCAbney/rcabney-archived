import React from "react"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Home" />
      <section className="homepage-intro">
        <p>Yo my name is Ryan and I like chicken wings.</p>
      </section>
      <Portfolio posts={posts} />
    </Layout>
  )
}

export default IndexPage
