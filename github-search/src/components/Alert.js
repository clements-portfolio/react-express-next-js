/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from 'react'

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const Alert = ({ alert, type }) => {
    /* - - - - - < Return JSX Markup /> - - - - - */
    return (
        alert !== null && (
            <div className={`alert-${type}`}>
                <i className='fas fa-info-circle'></i> {alert}
            </div>
        )
    )
}

export default Alert
