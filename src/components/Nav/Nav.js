import React from "react";
import styles from './Nav.module.scss'

const Nav = props => {
    return ( 
            <ul className={styles.nav}>{props.children}</ul>
     );
}
 
export default Nav;