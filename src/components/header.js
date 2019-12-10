import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Menu } from "semantic-ui-react"

const Header = ({ siteTitle }) => (
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
          name="Anime"
          position="right"
          onClick={() => console.log("clicked")}
        />
        <Menu.Item name="Not Anime" onClick={() => console.log("clicked")} />
      </Menu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
