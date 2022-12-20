import React from 'react';
import styles from './crumb.module.scss'

const Crumb = props => {
    return ( 
        <li className={styles.crumb}><a href={props.link}>{props.children}</a></li>
     );
}
 
export default Crumb;