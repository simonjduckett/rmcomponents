import React from "react";
import styles from './header.module.scss'
import logo from '../../Images/logo.png'
import Button from '../Button/Button'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img src={logo} />
                <Button label='Retrieve quotes' type='trans' />
            </div>
        </header>
     );
}
 
export default Header;