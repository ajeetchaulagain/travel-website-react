import React from 'react'
import metaHeaderStyles from './meta-header.module.scss'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaEnvelope,
  } from "react-icons/fa"

  import {
    MdDialerSip,
  } from "react-icons/md"

const MetaHeader = () =>{

    return (
        <div className= {metaHeaderStyles.metaHeader}>
        <div className={metaHeaderStyles.metaHeaderContent}>
            
            <p>Email: info@newarrivaltravel.com.np &nbsp; | &nbsp; &nbsp; </p>
            <p>Contact:0450775639 &nbsp; &nbsp; | </p>
            <ol>
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
                <li><FaLinkedinIn/></li>
                <li><FaGithub/></li>
                <li><FaInstagram/></li>
            </ol>
           </div>
        </div>
    )
}

export default MetaHeader