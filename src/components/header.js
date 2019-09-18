import { Link } from "gatsby"
import Image from "../components/image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="logo">
        <Link to="/">
          <Image alt="tacobell" />
          {/* <img src="https://placehold.it/651x120" alt="taco" /> */}
        </Link>
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
