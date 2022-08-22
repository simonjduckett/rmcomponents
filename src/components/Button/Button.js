import PropTypes from "prop-types"
import styles from "./button.module.scss"

const Button = ({label = 'btn', type = '', onClick}) => {
    let btnType = {}
    if (type === 'primary') btnType = styles.primary
    if (type === 'secondary') btnType = styles.secondary

    return ( 
        <button onClick={onClick} className={styles.btn}>
            <span className={btnType}>{label}</span>
        </button>
     );
}

Button.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
 
export default Button;