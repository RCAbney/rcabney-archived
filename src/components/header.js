import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="logo">
        <Link to="/">RCABNEY</Link>
      </div>
      <div className="nav-links">
        <Link to="/">WORK</Link>
        <Link to="/">ME</Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
