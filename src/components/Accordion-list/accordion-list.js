import React from "react"
import Accordion from "../Accordion/accordion"
import ProductLink from "../Product-link/product-link"

import accordionListStyles from "./accordion-list.module.css"

const categories = [
    {   id: 0,
        title: "Daily",
        products: [
            {
                name: "Tired or painful legs",
                amount: 25
            },
            {
                name: "Sitting profession",
                amount: 25
            },
            {
                name: "Standing profession",
                amount: 25
            },
            {
                name: "Recovery",
                amount: 25
            },
        ]
    },
    {
        id: 1,
        title: "Sports",
        products: [
            {
                name: "Running",
                amount: 25
            },
            {
                name: "Cycling",
                amount: 25
            },
            {
                name: "Hiking",
                amount: 25
            },
            {
                name: "Sports",
                amount: 25
            },
            {
                name: "Tennis",
                amount: 25
            },
            {
                name: "Fitness",
                amount: 25
            },
            {
                name: "Recovery socks",
                amount: 25
            },
            {
                name: "Skiing",
                amount: 25
            },
            {
                name: "Golf",
                amount: 25
            },
        ]
    },
    {   
        id: 2,
        title: "Travel",
        products: [
            {
                name: "Travel socks",
                amount: 1
            }
        ]
    },
    {
        id: 3,
        title: "Medical",
        products: [
            {
                name: "Thrombosis",
                amount: 25
            },
            {
                name: "Edema",
                amount: 25
            },
            {
                name: "Varicose veins",
                amount: 25
            },
            {
                name: "Swollen feet & ankles",
                amount: 25
            },
            {
                name: "Restless legs",
                amount: 25
            },
        ]
    },

]

const AccordionList = () => {
    return (
        <ul className={accordionListStyles.container}>
        {categories.map(category => (
            <li key={category.id}>
                <Accordion
                    title={category.title}
                    content={category.products.map(product => (
                        
                        <ProductLink
                            key={product.name + 1} 
                            name={product.name}
                            amount={product.amount}
                        />
                        
                    ))}
                />
            </li>
        ))}


    </ul>
    )
}

export default AccordionList;