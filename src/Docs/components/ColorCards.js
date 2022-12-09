import React from "react"

const ColorCards = (props) => {
    return (
        <div style={{display: 'flex', fontFamily: 'arial', flexWrap: 'wrap'}}>
            {props.colors.map(color => {
                return (
                    <ColorCard color={color} />
                )
            })}
        </div>
     );
}
 

const ColorCard = ({color}) => {
    let styles = {
        display: 'flex', 
        flexDirection: 'column', 
        margin: '10px', 
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        width: '20%'
    }
    return (
        <div style={styles}>
            <div style={{height: '200px', backgroundColor: color.HTML}}></div>
            <div style={{padding: '10px 20px'}}>
                <p><strong>Name </strong>{color.name}</p>
                <p><strong>HTML </strong>{color.HTML}</p>
                <p><strong>RGB </strong>{color.RGB}</p>
                {color.pan ?
                <p><strong>Pan </strong>{color.pan}</p>
                : null
                }
            </div>
        </div>
    )
    
}


export default ColorCards;