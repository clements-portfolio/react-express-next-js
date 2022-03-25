/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from "react";
import spinner from '../spinner.gif';

/* ~ ~ ~ ~ ~ { Main (React) Process } ~ ~ ~ ~ ~ */
function Spinner() {
    /* - - - - - < Return JSX Markup /> - - - - - */
    return (
        <>
            <img src={spinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
        </>
    );
}
  
/* ~ ~ ~ ~ ~ { Export the Application } ~ ~ ~ ~ ~ */
export default Spinner;