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

const CardImg = props => (
    <a className={styles.CardImg} href={props.link}>
    <img className={styles.imgResponsive} src={props.src} />
</a>
 )
Card.Img = CardImg;

const CardBody = props => <div className={styles.rmCardBody}>{props.children}</div>
Card.Body = CardBody
 
export default Card;


//card header, card body, card footer