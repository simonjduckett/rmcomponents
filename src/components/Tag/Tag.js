import React from "react"
import PropTypes from "prop-types"
import styles from "./tag.module.scss";

const Tag = props => {
    return ( 
        <div className={styles.tag}>
            <p>{props.tag}</p>
        </div>
     );
}
 
export default Tag;