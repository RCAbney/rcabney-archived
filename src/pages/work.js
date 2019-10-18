import React from "react"
import usePosts from "../hooks/usePosts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const WorkPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Home" />
      <section className="homepage-intro">
        <p>
          Yo this is my work page. We'll replace the home page with more of a
          landing page feel.
        </p>
      </section>
      <Portfolio posts={posts} />
    </Layout>
  )
}

export default WorkPage
