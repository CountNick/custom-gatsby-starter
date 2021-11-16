import React from "react"

import menuStyles from "./menu.module.css"

import AccordionListContainer from "../Accordion-list-container/accordion-list-container"
// import CardList from "../Card-list/card-list"

const Menu = ({ setOpen }) => {
  return (
    <nav className={`${menuStyles.container} ${setOpen}`}>
      {/* <CardList /> */}

      <AccordionListContainer />
    </nav>
  )
}

export default Menu
