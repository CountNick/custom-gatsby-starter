import React, { useState } from "react"
import Link from "gatsby-link"
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
            <svg viewBox="0 0 739.1 97.6" className={navigationStyles.logo}>
              <path
                className="prefix__st0"
                d="M155.7 1.7H72.8v10.6h36v83.8h10.9V12.3h36V1.7zM203.2.2c-27.3 0-49.4 21.8-49.4 48.7s22.1 48.7 49.4 48.7c27.3 0 49.4-21.8 49.4-48.7S230.5.2 203.2.2m0 86.7c-21.3 0-38.6-17-38.6-38s17.3-38 38.6-38 38.6 17 38.6 38-17.3 38-38.6 38m43.7-85.2l42.5 41.9h7.6V36L262.2 1.7h-15.3zm111.2 0h-15.3L307.9 36v7.5h7.7l42.5-41.8zm-50.2 52.5v7.5l34.9 34.4h15.3l-42.5-41.9h-7.7zm-61 41.9h15.3l34.9-34.4v-7.5h-7.6l-42.6 41.9zM37.3 39.5c-9.1-1-24.4-4.1-24.4-14.4 0-7.8 10.5-14.3 22.9-14.3 8 0 15.2 2.6 19.5 7l8-7.5C56.9 3.9 46.6 0 35.7 0 16.7 0 1.8 11.1 1.8 25.2c0 8 4.5 22 34.3 25.1 23.6 2.5 26.6 11 26.6 18.2 0 9.8-12.4 18.1-27.1 18.1C24 86.6 13.5 81.4 9.8 74L0 78.7c5.5 11.2 19.8 18.8 35.7 18.8 21 0 38.1-13 38.1-29 0-16.7-12.3-26.5-36.5-29M386.2 64.5h18.5v-3.2h-14.8V50.6h13.6v-3.3h-13.6v-9.8h14.8v-3.3h-18.4v30.3zm48.1-5.9l-14.1-24.4h-3.9v30.3h3.6V40.1h.1l14.1 24.4h3.8V34.2h-3.6v24.4zm16.3 5.9h18.5v-3.2h-14.8V50.6h13.6v-3.3h-13.6v-9.8h14.8v-3.3h-18.5v30.3zm52.2-21.3c0-5.9-3.9-9-10.2-9h-11.8v30.3h3.6V52.1h7l6.7 12.4h4.1l-6.8-12.6c4.5-.8 7.4-3.8 7.4-8.7m-10.5 5.7h-7.9V37.5h7.8c4.6 0 6.9 1.9 6.9 5.7.1 4-2.7 5.7-6.8 5.7m32.7 4h7.7c.1 5.5-3 8.8-8.1 8.8-2.6 0-5.1-1.2-6.6-3.2-1.7-2.2-2.5-5.4-2.5-9.5 0-4 .9-7 2.6-9 1.6-2 4-3.1 6.6-3.1 4.2 0 6.8 2.4 7.8 7.2l3.6-.6c-.4-2.8-1.8-5.3-3.8-7.2-2.1-1.9-4.8-2.9-7.6-2.8-3.5 0-6.9 1.4-9.2 4.1-2.5 2.7-3.8 6.5-3.8 11.4 0 5.6 1.5 10 3.9 12.4 2.4 2.4 5.6 3.7 9 3.7 3.2.1 6.3-1.1 8.5-3.3 2.2-2.2 3.2-5.3 3.2-9.2v-3h-11.4l.1 3.3zm29.3-4.6l-7.9-14.1h-4l10.1 17.5v12.8h3.5V51.7l10.1-17.5h-4l-7.8 14.1zm45.4-1.3c-3.2-1-5.3-1.9-6.2-2.6-.9-.7-1.4-1.7-1.4-2.8 0-2.6 2.1-4.5 6-4.5 4.4 0 6.3 2 7 5.7l3.7-.8c-.8-5.5-4.9-8.4-10.7-8.4-2.6-.1-5.1.7-7.1 2.3-1.6 1.4-2.6 3.5-2.6 5.6 0 4.2 2.7 6.5 9.5 8.6 3.5 1.2 5.8 2.2 6.9 3 1 .8 1.6 2.1 1.6 3.4 0 3-2.4 5.2-6.9 5.2-2.8 0-4.9-.6-6.1-2s-2.1-3.5-2.5-6.5l-3.8.7c.9 7.4 5 11.1 12.3 11.1 3.3 0 6-.8 7.8-2.5 1.8-1.6 2.9-3.9 2.8-6.3.1-2-.7-4-2.1-5.5-1.3-1.1-4.1-2.4-8.2-3.7m31.9-13.5c-3.5 0-6.9 1.4-9.2 4.1-2.5 2.7-3.8 6.5-3.8 11.5 0 5.6 1.6 10 4 12.4 5 4.8 12.8 4.9 17.8.1 2.5-2.4 4-6.8 4-12.4 0-4.9-1.3-8.8-3.8-11.6-2.3-2.5-5.6-4.1-9-4.1m0 28.3c-5.4 0-9.2-4.4-9.2-12.7 0-4 .9-7 2.6-9 1.6-2 4-3.1 6.6-3.1 2.5 0 4.9 1.1 6.4 3.2 1.7 2.1 2.6 5.1 2.6 9.1 0 8.3-3.7 12.5-9 12.5m35.1 0c-5.4 0-9.2-4.4-9.2-12.7 0-4 .9-7 2.6-9 1.6-2 4-3.1 6.6-3.1 4.3 0 7 2.6 7.8 7.8l3.7-.6c-.3-2.9-1.6-5.6-3.7-7.7-2.1-2-4.9-3-7.8-2.9-3.5 0-6.9 1.4-9.2 4.1-2.5 2.7-3.8 6.5-3.8 11.5 0 5.6 1.6 10 4 12.4 2.4 2.4 5.6 3.7 9 3.6 6.8 0 11-4.3 11.6-11.4l-3.8-.5c-.6 5.6-3.3 8.5-7.8 8.5m42.6-27.6h-4.6L692.3 49h-.1V34.2h-3.6v30.3h3.6V54l3.4-3.9h.1l10.5 14.4h4.4l-12.5-17.1 11.2-13.2zm27.6 16.7c-1.4-1.4-4.1-2.6-8.2-3.9-3.2-1-5.3-1.9-6.2-2.6-.9-.7-1.4-1.7-1.4-2.8 0-2.6 2.1-4.5 6-4.5 4.4 0 6.3 2 7 5.7l3.7-.8c-.7-5.5-4.9-8.4-10.7-8.4-2.6-.1-5.1.7-7.1 2.3-1.7 1.4-2.6 3.5-2.6 5.6 0 4.2 2.7 6.5 9.5 8.6 3.5 1.2 5.8 2.2 6.9 3 1 .8 1.6 2.1 1.6 3.4 0 3-2.4 5.2-6.9 5.2-2.8 0-4.9-.6-6.1-2s-2.1-3.5-2.5-6.5l-3.8.7c.9 7.4 5 11.1 12.3 11.1 3.3 0 6-.8 7.8-2.5 1.8-1.6 2.9-3.9 2.8-6.3.2-1.8-.6-3.8-2.1-5.3"
              ></path>
            </svg>
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
