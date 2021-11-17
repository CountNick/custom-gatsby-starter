import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Howdy folks, welcome to {data.site.siteMetadata.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
  </Layout>
)

export default IndexPage
