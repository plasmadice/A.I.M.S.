/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Menu } from "semantic-ui-react"
import { Helmet } from "react-helmet"
import { ApolloClient } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

import "./layout.css"

const Header = ({ siteTitle, setType }) => {
  // set current active type, defaults to card
  const [activeType, setActiveType] = useState("card")

  const switchType = type => {
    setActiveType(type)
    setType(type)
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Menu floated={"right"}>
          <Menu.Item
            icon={"block layout"}
            active={activeType === "card"}
            name="Cards"
            position="right"
            onClick={e => switchType("card")}
          />
          <Menu.Item
            icon={"list layout"}
            active={activeType === "item"}
            name="Items"
            onClick={e => switchType("item")}
          />
        </Menu>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "https://graphql.anilist.co",
  }),
})

const Layout = props => {
  const [type, setType] = useState("card")

  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      type,
    })
  })
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ApolloProvider client={client}>
      <Helmet>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} setType={setType} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ApolloProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
