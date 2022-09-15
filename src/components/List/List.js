import React from "react"
import PropTypes from "prop-types"
import styles from "./list.module.scss"

const List = props => {
    let type = null
    if(props.pink) type = styles.pink
    if(props.green) type = styles.green

    return ( 
        <ul className={`${styles.list} ${type ? type : null}`}>
            {props.children}
        </ul>
     );
}

const ListItem = (props) => {
    return (
        <li>{props.children}</li>
    )
} 
List.Item = ListItem;

List.propTypes = {
    usp: PropTypes.string
}
 
export default List;