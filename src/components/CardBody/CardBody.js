import React from 'react'
import styles from './cardBody.module.scss'

const CardBody = props => {
    return ( 
        <div className={styles.rmCardBody}>{props.children}</div>
     );
}
 
export default CardBody;