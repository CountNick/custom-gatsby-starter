import React from "react"

import menuStyles from "./menu.module.css"

import AccordionList from "../Accordion-list/accordion-list"
import CardList from "../Card-list/card-list"

const Menu = ({ setOpen }) => {
  return (
    <section className={`${menuStyles.container} ${setOpen}`}>
      <CardList />

      <AccordionList />
    </section>
  )
}

export default Menu
