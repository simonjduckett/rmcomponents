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
        <ul className={`${styles.list} ${type ? type : null}`}>
            {props.children}
        </ul>
     );
}

const ListHeading = props => <h2>{props.children}</h2>
List.Heading = ListHeading

const ListBody = props => <p>{props.children}</p>
List.Body = ListBody

List.propTypes = {
    type: PropTypes.string
}
 
export default List;