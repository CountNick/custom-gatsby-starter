import React, { useState } from "react"

import burgerStyles from "./burger.module.css"

const Burger = ({ setOpen, setOpenState }) => {
  const [setIcon, setIconState] = useState("")

  function toggleMenu() {
    setOpenState(setOpen === "" ? "active" : "")
    setIconState(setIcon === "" ? "open" : "")
    // setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
  }

  return (
    <button
      className={`${burgerStyles.container} ${setIcon}`}
      onClick={toggleMenu}
    >
      <div className="color-bg"></div>
      <div className="color-bg"></div>
      <div className="color-bg"></div>
    </button>
  )
}

export default Burger
