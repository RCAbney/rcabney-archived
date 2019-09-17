import React from "react"
import Card from "./card"

const Portfolio = ({ posts }) => {
  return (
    <div className="portfolio">
      {posts.map(post => (
        <Card
          key={post.slug}
          title={post.title}
          image={post.image}
          tags={post.tags}
          excerpt={post.excerpt}
          slug={post.slug}
        />
      ))}
    </div>
  )
}

export default Portfolio
