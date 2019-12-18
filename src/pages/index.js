import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Search from "../components/search"
import Results from "../components/Results"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query SiteDescriptionQuery {
  //     site {
  //       siteMetadata {
  //         description
  //       }
  //     }
  //   }
  // `)

  const [results, setResults] = useState(null)

  return (
    <Layout>
      <h1>Enter Information</h1>
      <SEO title="Home" />
      <Search setResults={setResults} />
      <Results results={results} />
      <p>Anime IMDB Media Suggestions</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
