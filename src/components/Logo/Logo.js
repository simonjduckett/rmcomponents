import React from "react"
import PropTypes from "prop-types"
import styles from "./logo.module.scss"

import { ReactComponent as Horizontal } from "../../Images/RM-logo-vector.svg"
import { ReactComponent as Stacked } from "../../Images/RM_Logo_stack.svg"
import { ReactComponent as Footer } from "../../Images/RM-logo-footer.svg"
import twenty from "../../Images/logo-20yrs.png"

const Logo = ({type = 'horizontal', width = '300px'}) => {

    let logo = null

    if (type === 'horizontal') {
        return <Horizontal width={width} />
    } 
    if(type === 'stacked') {
        return <Stacked width={width}  />
    }
    if(type === 'footer') {
        return <Footer width={width}  />
    }
    if(type === 'twenty') {
        logo = twenty
        return <img className={styles.logo} src={logo} alt='really moving logo' />
    } 
}

Logo.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string
}

export default Logo;