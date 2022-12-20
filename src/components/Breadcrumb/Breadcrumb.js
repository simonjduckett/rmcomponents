import React from "react"
import PropTypes from "prop-types"
import styles from "./Breadcrumb.module.scss"

const Breadcrumb = ({children}) => {
    return ( 
        <ol className={styles.breadcrumb}>{children}</ol>
     );
}

export default Breadcrumb;