import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: {
          fields: [frontmatter___post_index]
          order: ASC
        }
      ) {
        nodes {
          frontmatter {
            title
            post_index
            author
            slug
            tags
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 800, maxHeight: 800, traceSVG: {color: "#6c8b6b"}) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
    tags: post.frontmatter.tags,
  }))
}

export default usePosts
