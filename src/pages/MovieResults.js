import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"

const MovieResults = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default MovieResults
