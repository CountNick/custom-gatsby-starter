import React from "react"

import cardStyles from "./card.module.css"

const Card = props => {
  return (
    <a href="/">
      <section className={cardStyles.container}>
        <div></div>
        <img src={props.imageLink}></img>

        <h3>{props.title}</h3>
      </section>
    </a>
  )
}

export default Card
