import React from "react"
import PropTypes from "prop-types"
import styles from "./card.module.scss";

const Card = props => {
    return ( 
        <div className={styles.card}>
            {props.children}
        </div>
     );
}

const CardBody = props => <div>{props.children}</div>
Card.Body = CardBody
 
export default Card;


//card header, card body, card footer

