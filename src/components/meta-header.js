import React from "react"
import metaHeaderStyles from "./meta-header.module.scss"
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

const MetaHeader = () => {
  return (
    <div className={metaHeaderStyles.metaHeader}>
      <div className={metaHeaderStyles.metaHeaderContent}>
        <FaEnvelope />
        <p> &nbsp; info@newarrivaltravel.com.np &nbsp; | &nbsp; &nbsp; </p>
        <FaPhoneSquare />
        <p>&nbsp; 0450775639 &nbsp; &nbsp; | &nbsp; &nbsp; </p>
        <FaSearchLocation />
        <p>&nbsp; Thamel, Kathmandu</p>
        <ol>
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
        </ol>
      </div>
    </div>
  )
}

export default MetaHeader
