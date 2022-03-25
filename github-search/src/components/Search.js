/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React, { useState } from 'react'
import PropTypes from 'prop-types';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const Search = ({ search, clear, showClear, setAlert, setType }) => {
    /* - - - - - < Initialize Component-Level State /> - - - - - */
    const [text, setText] = useState('');

    /* - - - - - < Handle User Input /> - - - - - */
    const onChange = (e) => {
        setText(e.target.value);
    }

    /* - - - - - < Handle Form Submissions /> - - - - - */
    const onSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            setAlert('You have to give us something to start with!');
            setType('danger');
        } else {
            search(text);
            setText('');
        }
    }

    /* - - - - - < Return JSX Markup /> - - - - - */
    return (
    <>
        <form className='form' onSubmit={(e) => {onSubmit(e)}}>
            <input type='text' name='text' placeholder='Search Users...' value={text} onChange={(e) => onChange(e)} />
            <input type='submit' value='Search' className='btn btn-dark' />
        </form>
        { showClear && <button className='btn btn-light' onClick={clear}>Clear</button> }
    </>
    )
}

/* ~ ~ ~ ~ ~ { Define Required Properties } ~ ~ ~ ~ ~ */
Search.propTypes = {
    search: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Search
