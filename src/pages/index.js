import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Search from "../components/search"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  const [description, setDescription] = useState(
    data.site.siteMetadata.description
  )
  return (
    <Layout>
      <Search />
      <SEO title="Home" />
      <h1>Beginning Layout</h1>
      <p>{description}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
