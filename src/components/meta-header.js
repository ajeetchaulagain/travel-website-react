import React from 'react'
import metaHeaderStyles from './meta-header.module.scss'

const MetaHeader = () =>{

    return (
        <div className= {metaHeaderStyles.metaHeader}>
        <div className={metaHeaderStyles.metaHeaderContent}>
            <ol>
                <li>Contact: 0450775639 </li>
                <li>Email: chaulagainajeet@gmail.com</li>
                <li>Follow us on</li>
            </ol>
           </div>
        </div>
    )
}

export default MetaHeader