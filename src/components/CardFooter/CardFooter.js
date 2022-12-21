import React from 'react'
import styles from './cardFooter.module.scss'

const CardFooter = props => {
    return ( 
        <div className={styles.rmCardFooter}>{props.children}</div>
     );
}
 
export default CardFooter;