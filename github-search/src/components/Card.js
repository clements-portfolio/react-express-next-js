/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from 'react';
import { Link } from 'react-router-dom';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const Card = ({ user }) => {
    /* - - - - - < Destructue from the User Object /> - - - - - */
    const { avatar_url, login } = user;

    /* - - - - - < Return JSX Markup /> - - - - - */
    return (
    <div className='card text-center'>
        <img src={avatar_url} alt='Avatar' className='rounded' style={{ width: '60px' }} />
        <h3>{login}</h3>
        <div>
            <Link to={`/${login}`} className='btn btn-dark'>View Profile</Link>
        </div>
    </div>
    )
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Card;
