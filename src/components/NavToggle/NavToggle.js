import React from 'react'
import styles from './NavToggle.module.scss'

const NavToggle = props => {
    const showNav = function() {
        document.getElementById(props.navid).classList.toggle('slideNav')
    }
    return ( 
        <button className={styles.NavToggle} onClick={showNav}>
            <div>
                <span class={styles.iconBar}></span>
                <span class={styles.iconBar}></span>
                <span class={styles.iconBar}></span>
            </div>
        </button>
     );
}
 
export default NavToggle;