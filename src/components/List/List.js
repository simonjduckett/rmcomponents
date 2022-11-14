import React from "react"
import PropTypes from "prop-types"
import styles from "./list.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons'

let icon = null

const List = props => {
    let type = null
    if(props.pink) {icon = faCheck; type = styles.pink}
    if(props.green) { icon = faCheck; type = styles.green }
    if(props.pinkbullet) {icon = faCircle, type = styles.pinkBullet}
    if(props.pinkchevron) { icon = faChevronRight; type = styles.pinkChevron }

    return ( 
        <ul className={`${styles.list} ${type ? type : null}`}>
            {props.children}
        </ul>
     );
}

const ListItem = props => {
    return (
        <li>
            <div><FontAwesomeIcon icon={icon} /></div>
            <div>{props.children}</div>
        </li>
    )
}
List.Item = ListItem;

const ListHeading = props => <h2>{props.children}</h2>
List.Heading = ListHeading

const ListBody = props => <p>{props.children}</p>
List.Body = ListBody

List.propTypes = {
    usp: PropTypes.string
}
 
export default List;