import React from "react"
import PropTypes from "prop-types"
import styles from "./logo.module.scss"

import { ReactComponent as Horizontal } from "../../Images/RM-logo-vector.svg"
import { ReactComponent as Stacked } from "../../Images/RM_Logo_stack.svg"
import { ReactComponent as Footer } from "../../Images/RM-logo-footer.svg"
import twenty from "../../Images/logo-20yrs.png"

const Logo = props => {

    let logo = 'horizontal'
    let width = '300px'
    let type = 'horizontal'
    if (props.type === 'stacked') type = 'stacked'
    if (props.type === 'footer') type = 'footer'
    if (props.type === 'twenty') type = 'twenty'

    if (type === 'horizontal') {
        return <Horizontal className={`${props.customClass ? props.customClass : null}`} width={props.width ? props.width : width} fill='#000000' style={{fill: '#000'}}/>
    } 
    if(type === 'stacked') {
        return <Stacked className={`${props.customClass ? props.customClass : null}`} width={props.width ? props.width : width}  />
    }
    if(type === 'footer') {
        return <Footer className={`${props.customClass ? props.customClass : null}`} width={props.width ? props.width : width}  />
    }
    if(type === 'twenty') {
        logo = twenty
        return <img className={styles.logo} src={logo} alt='really moving logo' />
    } 
}

Logo.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string,
    customClass: PropTypes.string
}

export default Logo;