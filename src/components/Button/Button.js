import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"

const Button = props => {
    let btnType = {}
    let btnSize = {}
    if (props.type === 'primary') btnType = styles.primary
    if (props.type === 'secondary') btnType = styles.secondary
    if (props.type === 'trans') btnType = styles.trans
    if (props.type === 'account') btnType = styles.account

    if(props.lg) btnSize = styles.lg
    if(props.sm) btnSize = styles.sm
    if(props.xs) btnSize = styles.xs

    return ( 
        <button onClick={props.onClick} className={styles.btn}>
            <a href={props.link}>
                <span className={`${btnType} ${btnSize}`}>{props.label}</span>
            </a>
        </button>
     );
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
 
export default Button;