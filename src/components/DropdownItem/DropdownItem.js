import React from "react";
import styles from './DropdownItem.module.scss'

const DropdownItem = props => {
    return ( 
        <a href={props.href}>{props.children}</a>
     );
}
 
export default DropdownItem;