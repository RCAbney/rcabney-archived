import { Link } from "gatsby"
import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="logo">
        <Link to="/">
          <Image />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/work">WORK</Link>
        <Link to="/me">ME</Link>
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
