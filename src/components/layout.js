/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import Navigation from "./Navigation/navigation"
import Menu from "./Menu/menu"

import "./layout.css"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const [setOpen, setOpenState] = useState("");

  return (
    <>
      <SEO title={data.site.siteMetadata.title} />
      <Navigation setOpen={setOpen} setOpenState={setOpenState}/>
      <Menu setOpen={setOpen} setOpenState={setOpenState}/>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `5rem 0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>

      

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
