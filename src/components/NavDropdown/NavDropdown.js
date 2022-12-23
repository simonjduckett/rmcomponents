import React from "react";
import styles from './NavDropdown.module.scss'
import '../../global/styles/global.scss'

const NavDropdown = props => {

    const openDropdown = e => {
        let x = window.matchMedia("(max-width: 768px)")
        if(x.matches) {
            let drop = e.target.nextElementSibling
            drop.classList.toggle('showNav')
        }
    }
    return ( 
        <li className={styles.NavDropdown}>
            <a onClick={openDropdown} className={props.icon === 'down' ? styles.iconDown : styles.iconRight}>{props.title}</a>
            <div className={styles.dropdown}>{props.children}</div>
        </li>
     );
}
 
export default NavDropdown;