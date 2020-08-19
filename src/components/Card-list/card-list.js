import React from "react"
import Card from "../Card/card"

import cardListStyle from "./card-list.module.css"

const CardList = () => {
  return (
    <div className={cardListStyle.wrapper}>
      <ul className={cardListStyle.container}>
        <li>
          <Card
            imageLink="http://images.ctfassets.net/kpep6ikljkgq/5aoFkTLhEj9VltOdWgvbJn/3665752dc24a52cdc4d0f65770c2e4e5/Daily_Merino_Socks_Women_Silver_Grey_-_White__1_.jpg"
            title="Trekking"
          />
        </li>
        <li>
          <Card
            imageLink="http://images.ctfassets.net/kpep6ikljkgq/7M3CEKsAN1RczcRTb3e729/3faaa8311a1de0b63a20606a52fe3016/Travel_Socks_Mannen_DONKERBLAUW__1_.jpg?"
            title="Travel"
          />
        </li>
        <li>
          <Card
            imageLink="http://images.ctfassets.net/kpep6ikljkgq/5IJo80xYDMYxCttvmboQF6/e2ce236e8ccb491656f4d0700648d284/Sports_Socks_Mannen_DONKERBLAUW___GEEL.jpg?"
            title="Sports"
          />
        </li>
        <li>
          <Card
            imageLink="http://images.ctfassets.net/kpep6ikljkgq/4DyG8h0DACR88nVOQfLJmZ/01b73fda65953d37bb30220c316992b3/8.jpg?"
            title="Medical"
          />
        </li>
      </ul>
    </div>
  )
}

export default CardList
