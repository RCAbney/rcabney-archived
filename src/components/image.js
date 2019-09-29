import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rcabney-logo-hz.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, traceSVG: {color: "#6c8b6b"}) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="RCABney Logo" />
}

export default Image
