import React from "react";
import styles from './NavDropdown.module.scss'

const NavDropdown = props => {
    return ( 
        <li className={styles.NavDropdown}>
            <a>{props.title}</a>
            <div className={styles.dropdown}>{props.children}</div>
        </li>
     );
}
 
export default NavDropdown;