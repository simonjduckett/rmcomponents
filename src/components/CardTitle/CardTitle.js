import React from 'react'
import styles from './cardTitle.module.scss'

const CardTitle = props => {
    return ( 
        <h3 className={styles.rmCardTitle}>{props.children}</h3>
     );
}
 
export default CardTitle;