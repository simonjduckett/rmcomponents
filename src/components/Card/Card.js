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

const CardTitle = props => <h3 className={styles.rmCardTitle}>{props.children}</h3>
Card.Title = CardTitle

const CardImg = props => (
    <a className={styles.CardImg} href={props.link}>
    <img className={styles.imgResponsive} src={props.src} />
</a>
 )
Card.Img = CardImg;

const CardBody = props => <div className={styles.rmCardBody}>{props.children}</div>
Card.Body = CardBody

const CardFooter = props => <div className={styles.rmCardFooter}>{props.children}</div>
Card.Footer = CardFooter
 
export default Card;


//card header, card body, card footer