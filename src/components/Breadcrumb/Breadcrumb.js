import React from "react"
import PropTypes from "prop-types"
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = ({children}) => {
    return ( 
        <ol className={styles.breadcrumb}>{children}</ol>
     );
}

const crumb = props => (
    <li className={styles.crumb}><a href={props.link}>{props.children}</a></li>
)
Breadcrumb.Crumb = crumb

export default Breadcrumb;