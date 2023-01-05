import React from "react"
import PropTypes from "prop-types"
import styles from "./button.module.scss"

const Button = props => {
    let btnType = styles.primary
    let btnSize = styles.sm
    if (props.type === 'primary') btnType = styles.primary
    if (props.type === 'secondary') btnType = styles.secondary
    if (props.type === 'trans') btnType = styles.trans
    if (props.type === 'account') btnType = styles.account

    if(props.size === 'lg') btnSize = styles.lg
    if(props.size === 'sm') btnSize = styles.sm
    if(props.size === 'xs') btnSize = styles.xs

    return ( 
        <button 
        onClick={props.onClick} 
        className={`${props.customClass ? props.customClass : ''} ${styles.btn}`}
        id={props.id ? props.id : null}
        name={props.name ? props.name : null}
        >
                <span className={`${btnType} ${btnSize}`}>
                    {props.label}
                    {props.children}
                </span>
        </button>
     );
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    customClass: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string
}
 
export default Button;