import React from "react"
import AccordionList from "../Accordion-list/accordion-list"

import accordionListContainerStyles from "./accordion-list-container.module.css"

const AccordionListContainer = () => {

    return (
      <ul className={accordionListContainerStyles.container}>
          <AccordionList></AccordionList>
      </ul>
    )
  }
  
  export default AccordionListContainer