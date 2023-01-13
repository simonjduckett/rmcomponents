import React from "react";
import styles from './NavCollapse.module.scss'
import '../../global/styles/global.scss'
import PropTypes from "prop-types"

const NavCollapse = props => {
    let bp = styles.md
    if(props.bp === 'sm') bp = styles.sm
    if(props.bp === 'md') bp = styles.md
    if(props.bp === 'lg') bp = styles.lg
    if(props.bp === 'xl') bp = styles.xl
    if(props.bp === 'xxl') bp = styles.xxl
    return ( 
        <div 
        id={props.id ? props.id : 'navCollapse'} 
        className={`${styles.NavCollapse} ${bp} ${props.customClass ? props.customClass : ''}`}
        style={{background: `#${props.bg ? props.bg : null}`}}
        >
        {props.children}
        </div>
     );
}

NavCollapse.propTypes = {
    id: PropTypes.string,
    customClass: PropTypes.string,
    bg: PropTypes.string,
}
 
export default NavCollapse;