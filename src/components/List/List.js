import React from "react"
import PropTypes from "prop-types"
import styles from "./list.module.scss"

const List = props => {
    let type = null
    if(props.pink) type = styles.pink
    if(props.green) type = styles.green
    if(props.pinkbullet) type = styles.pinkBullet
    if(props.pinkchevron) type = styles.pinkChevron

    return ( 
        <ul className={`${styles.list} ${type ? type : null}`}>
            {props.children}
        </ul>
     );
}

const ListItem = props => <li>{props.children}</li>
List.Item = ListItem;

const ListHeading = props => <h2>{props.children}</h2>
List.Heading = ListHeading

const ListBody = props => <p>{props.children}</p>
List.Body = ListBody

List.propTypes = {
    usp: PropTypes.string
}
 
export default List;