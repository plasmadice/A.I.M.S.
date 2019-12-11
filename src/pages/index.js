import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Search from "../components/search"
import Results from "../components/Results"
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

  const [results, setResults] = useState([])

  return (
    <Layout>
      <h1>Beginning Layout</h1>
      <SEO title="Home" />
      <Search setResults={setResults} />
      <p>{data.site.siteMetadata.description}</p>
      <Results results={results} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
