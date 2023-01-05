import React from 'react'
import styles from './NavToggle.module.scss'

const NavToggle = props => {
    const showNav = function(e) {
        document.getElementById(props.navid).classList.toggle('slideNav')
        e.target.classList.toggle(styles.active)
    }
    return ( 
        <button className={`${props.customClass ? props.customClass : ''} ${styles.NavToggle}`} onClick={showNav}>
            <div>
                <span className={styles.iconBar}></span>
                <span className={styles.iconBar}></span>
                <span className={styles.iconBar}></span>
            </div>
        </button>
     );
}
 
export default NavToggle;