import React, { useState, useRef } from "react"
import Chevron from "../chevron"

import accordionStyle from "./accordion.module.css"

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("")

    const content = useRef(null)

    function toggleAccordion(){
        setActiveState(setActive === "" ? "active" : "")
        setRotateState(setRotate === "" ? "rotate" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    return (
        <section className={accordionStyle.container}>
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`icon ${setRotate}`} width={10} fill={"rgb(162, 162, 162)"} />
            </button>
            
            <div
                ref={content}
                style={{maxHeight: `${setHeight}`}}
                className="content"
            >
            <ul className={accordionStyle.productList}>
            {props.content}
            </ul>

            </div>
        </section>
    )
}

export default Accordion;