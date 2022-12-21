import React from "react"
import PropTypes from "prop-types"
import styles from "./cardImg.module.scss";

const CardImg = () => {
    return ( 
        <a className={styles.CardImg} href={props.link}>
            <img className={styles.imgResponsive} src={props.src} />
        </a>
     );
}
 
export default CardImg;