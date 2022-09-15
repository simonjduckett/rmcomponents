import React from "react"
import PropTypes from "prop-types"
import styles from "./list.module.scss"

const List = props => {
    return ( 
        <ul className={styles.list}>
            {props.children}
        </ul>
     );
}
 
export default List;