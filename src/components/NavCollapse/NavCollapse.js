import React from "react";
import styles from './NavCollapse.module.scss'

const NavCollapse = props => {
    return ( 
        <div className={styles.NavCollapse}>{props.children}</div>
     );
}
 
export default NavCollapse;