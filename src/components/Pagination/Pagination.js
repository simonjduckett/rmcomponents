import React from "react"
import PropTypes from "prop-types"
import styles from "./Pagination.module.scss"

const Pagination = ({children}) => {
    return ( 
        <ul className={styles.pagination}>{children}</ul>
     );
}

export default Pagination;