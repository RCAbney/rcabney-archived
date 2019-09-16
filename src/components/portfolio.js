import React from "react"
import Card from "./card"

const Portfolio = () => {
  const workItems = [
    {
      title: "Peyton Manning Children's Hospital",
      excerpt:
        "I was really excited to work on this. Peyton Manning is the greatest of all time, and now I get to work on a website with his name! Holy shitballs pinch me! I must be dreaming because this is the greatest momemt of all time.",
      image: "https://unsplash.it/600/600",
      tags: ["Graphic Design", "Web Design", "Development"],
    },
    {
      title: "St. Vincent Sitecore Redesign",
      excerpt:
        "Taco Bell is an American chain of fast food restaurants based in Irvine, California and a subsidiary of Yum! Brands, Inc. The restaurants serve a variety of Mexican inspired foods that include tacos, burritos, quesadillas, nachos, novelty and specialty items, and a variety of 'value menu' items.",
      image: "https://unsplash.it/600/600",
      tags: ["Web Design", "Development"],
    },
    {
      title: "ePlanters.com Front Page",
      excerpt:
        "In the example below, the container is set to the height of the window, and the content area is told to expand as needed. (Note: in the vertical direction you need to specify a height for the container. This is different from the horizontal direction, which automatically expands to fit.)",
      image: "https://unsplash.it/600/600",
      tags: ["Web Design"],
    },
    {
      title: "Gannett Infographic",
      excerpt:
        "Christopher Keith Irvine, better known by his ring name Chris Jericho, is an American-born Canadian professional wrestler, musician, author, and actor, currently signed to All Elite Wrestling, where he is the inaugural and current AEW World Champion.",
      image: "https://unsplash.it/600/600",
      tags: ["Graphic Design", "Development"],
    },
  ]
  return (
    <div className="portfolio">
      {workItems.map(item => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  )
}

export default Portfolio
