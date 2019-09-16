import React from "react"
import WorkTags from "./worktags"

const Card = ({ image, title, excerpt, tags }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="folio-image" />
      <div class="folio-details">
        <h1>{title}</h1>
        <p>{excerpt}</p>
      </div>
      <WorkTags tags={[...tags]} />
    </div>
  )
}

export default Card
