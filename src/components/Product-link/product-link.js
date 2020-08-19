import React from "react"

import productLinkStyles from "./product-link.module.css"

const ProductLink = props => {
  return (
    <li>
      <a href="/" className={productLinkStyles.container}>
        <strong>{props.name}</strong>
        <span>{props.amount} products</span>
      </a>
    </li>
  )
}

export default ProductLink
