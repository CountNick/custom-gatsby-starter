import React from "react"
import { Link } from "@reach/router"

import productLinkStyles from "./product-link.module.css"

const ProductLink = props => {
  return (
    <li>
      <a href={props.url} className={productLinkStyles.container}>
        <strong>{props.name}</strong>
        <span>{props.amount} products</span>
      </a>
    </li>
  )
}

export default ProductLink
