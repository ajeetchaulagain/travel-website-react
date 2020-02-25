import React from "react"

import { Link } from "gatsby"

import footerStyles from "./footer.module.scss"

import memberImage from "../images/member.png"
import acceptImage from "../images/accept.png"

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneSquare,
  FaSearchLocation,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className={footerStyles.footerSection}>
        <div className={footerStyles.footerContent}>
          <div className={footerStyles.partnerSection}>
            <h3>Member of</h3>
            <ul>
              <li>
                <Link to="/">
                  <img src={memberImage} />
                </Link>
              </li>
            </ul>
          </div>

          <div className={footerStyles.paymentSection}>
            <h3>We Accept</h3>
            <ul>
              <li>
                <Link to="/">
                  <img src={acceptImage} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={footerStyles.footerSectionSecond}>
        <div className={footerStyles.footerContent}>
          <ul className={footerStyles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/package">Packages</Link>
            </li>
            <li>
              <Link to="/contact">Adventures</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <ul className={footerStyles.socialMediaList}>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.copyrightSection}>
        <p>©2020 New Arrival Travel and Tours. All Rights Reserved</p>
        <p>
          Developed by{" "}
          <a
            href="https://ajeetchaulagain.com/gatsby-portfolio/"
            target="_blank"
          >
            Ajeet Chaulagain
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
