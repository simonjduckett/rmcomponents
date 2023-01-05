import React from "react"
import PropTypes from "prop-types"
import styles from "./list.module.scss"

const List = props => {
    let type = null
    if(props.type === 'pink') {type = styles.pink}
    if(props.type === 'green') { type = styles.green }
    if(props.type === 'pinkbullet') {type = styles.pinkBullet}
    if(props.type === 'pinkchevron') {type = styles.pinkChevron }

    return ( 
        <ul 
            className={`${styles.list} ${type ? type : null} ${props.customClass ? props.customClass : null}`}
            id={props.id ? props.id : null}
        >
            {props.children}
        </ul>
     );
}

List.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    customClass: PropTypes.string
}
 
export default List;