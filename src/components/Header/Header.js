import React from "react";
import styles from './header.module.scss'
import logo from '../../Images/logo.png'
import Button from '../Button/Button'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <img src={logo} />
            <Button label='Retrieve quotes' type='trans' />
        </header>
     );
}
 
export default Header;