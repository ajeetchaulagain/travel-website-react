import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import img from "../images/logo.png"

const Header = () => {
  return (
    <div className={headerStyles.headerSection}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.logoSection}>
          <div className={headerStyles.logoWrapper}>
            <img src={img} />
          </div>
          <h1>New Arrival Travel and Tours</h1>
        </div>

        <ul className={headerStyles.navList}>
          <li>
            <Link to="/" activeClassName={headerStyles.activeList}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/package" activeClassName={headerStyles.activeList}>
              Packages
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={headerStyles.activeList}>
              Adventures
            </Link>
          </li>
          <li>
            <Link to="/services" activeClassName={headerStyles.activeList}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName={headerStyles.activeList}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={headerStyles.activeList}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
