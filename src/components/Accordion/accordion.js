import React, { useState, useRef } from "react"
import Chevron from "../chevron"

import accordionStyle from "./accordion.module.css"

const Accordion = props => {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setRotateState(setRotate === "" ? "rotate" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
  }

  

  return (
    <section className={accordionStyle.container}>

    {props.content ? (
      <React.Fragment>
            <button className={`${accordionStyle.mobile__accordion} accordion ${setActive}`} onClick={toggleAccordion}>
            <p>{props.title}</p>
            <Chevron
              className={`icon ${setRotate}`}
              width={10}
              fill={"rgb(162, 162, 162)"}
            />
          </button>
    
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="content"
          >
            <ul className={accordionStyle.productList}>{props.content}</ul>
          </div>

          <button className={accordionStyle.desktop__accordion}><p>{props.title}</p></button>
          <section className={accordionStyle.desktop__accordion_content}>
            <ul>{props.content}</ul>
          </section>

      </React.Fragment>
    ) : (

      <button className={'accordion'}> 
        <a href={props.title}>{props.title}</a>
      </button>



    )}      

    </section>
  )
}

export default Accordion
