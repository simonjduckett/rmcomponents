import React from "react";
import styles from './Navbar.module.scss'

const Navbar = props => {
    return ( 
        <nav className={styles.navbar}>{props.children}</nav>
     );
}
 
export default Navbar;