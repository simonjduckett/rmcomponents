import React from "react"
import PropTypes from "prop-types"
import styles from "./card.module.scss";

const Card = props => {
    return ( 
        <div 
        className={`${styles.card} 
            ${props.theme === 'purple' ? styles.purple : null}`}
        style={props.align === 'center' ? {textAlign: 'center'} : null}
        >
            {props.children}
        </div>
     );
}

Card.propTypes = {
    align: PropTypes.string,
    theme: PropTypes.string
}

export default Card;