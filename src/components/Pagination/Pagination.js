import React from "react"
import PropTypes from "prop-types"
import styles from "./Pagination.module.scss"

const Pagination = ({children}) => {
    return ( 
        <ul className={styles.pagination}>{children}</ul>
     );
}

const Page = ({children, link}) => (
    <li className={styles.page}>
        <a href={link}>{children}</a>
    </li>
)
Pagination.Page = Page

export default Pagination;