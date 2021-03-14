import React from "react"
import navigationStyles from "./navigation.module.css"
import Burger from "../Burger/burger"

const Navigation = ({ setOpen, setOpenState }) => {
  return (
    <nav className={navigationStyles.container}>
      <ul>
        <span>
          <li>
            <Burger setOpen={setOpen} setOpenState={setOpenState} />
          </li>

          <li className={navigationStyles.logoContainer}>
            logo
          </li>
        </span>

        <span>
          <li>
            <button>
              <svg
                viewBox="0 0 512 512"
                className={navigationStyles.searchIcon}
              >
                <path d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"></path>
              </svg>
            </button>
          </li>

          <li>
            <button>
              <svg viewBox="0 0 32 42" className={navigationStyles.cartIcon}>
                <path
                  d="m718 10a8 8 0 0 0 -16 0h-8l.027 34h31.973v-34zm-7.987-5.37a5.115 5.115 0 0 1 4.987 5.37h-10a5.136 5.136 0 0 1 5.013-5.37zm13.987 36.37h-27v-28h5v2h3v-2h10v2h3v-2h5v29z"
                  fillRule="evenodd"
                  transform="translate(-694 -2)"
                ></path>
              </svg>
            </button>
          </li>
        </span>
      </ul>
    </nav>
  )
}

export default Navigation
