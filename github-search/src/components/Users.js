/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React from 'react';
import PropTypes from 'prop-types';

/* ~ ~ ~ ~ ~ { Import Components } ~ ~ ~ ~ ~ */
import Card from './Card';
import Spinner from './Spinner';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const Users = ({ loading, users }) => {
    /* - - - - - < Display Spinner if Loading /> - - - - - */
    if (loading) {
        /* - - - - - < Return Spinner /> - - - - - */
        return <Spinner />
    } else {
        /* - - - - - < Return JSX Markup /> - - - - - */
        return (
            <div className='user-grid'>
                {users.map(user => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

/* ~ ~ ~ ~ ~ { Define Required Properties } ~ ~ ~ ~ ~ */
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default Users;