/* ~ ~ ~ ~ ~ { Import Dependencies } ~ ~ ~ ~ ~ */
import React, { useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';

/* ~ ~ ~ ~ ~ { Import Components } ~ ~ ~ ~ ~ */
import Repos from './Repos';
import Spinner from './Spinner';

/* ~ ~ ~ ~ ~ { Create the Component } ~ ~ ~ ~ ~ */
const User = ({ retrieve, setAlert, SetType, loading, user, repositories, repos }) => {
    /* - - - - - < Use Browser URL to Load Resource - - - - - */
    const { params } = useMatch('/:login');
    const { login } = params;

    /* - - - - - < Handle GitHub User Retrieval /> - - - - - */
    useEffect(() => {
        retrieve(login)
        repositories(login)
    }, []);

    /* - - - - - < Destructure from the User Object /> - - - - - */
    const { 
        name,
        avatar_url,
        location,
        bio,
        blog,
        company,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
     } = user;

     /* - - - - - < Destructure from the Repos Object /> - - - - - */

    /* - - - - - < Display Spinner if Loading /> - - - - - */
    if (loading) {
        /* - - - - - < Return Spinner /> - - - - - */
        return <Spinner />
    } else {
        /* - - - - - < Return JSX Markup /> - - - - - */
        return (
            <>
                <Link to='/' className='btn btn-light'>Return to Search</Link>
                <div className='card'>
                    <h1>GitHub Profile</h1>
                    Hireable: { ' ' }
                    {hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times text-error'></i>}
                    <div className='grid-2'>
                        <div className='grid-section'>
                            <img src={avatar_url} className='rounded' alt='Avater' style={{ width: '150px' }} />
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div className='grid-section'>
                            {bio && (
                                <>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </>
                            )}
                            <a href={html_url} className='btn btn-dark'>Visit GitHub Profile</a>
                            <ul>
                                <li>
                                    {login && <>
                                        <strong>Username: </strong>{login}
                                    </>}
                                </li>
                                <li>
                                    {company && <>
                                        <strong>Company: </strong>{company}
                                    </>}
                                </li>
                                <li>
                                    {blog && <>
                                        <strong>Website: </strong>{}
                                    </>}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card text-center flex'>
                            <div className='badge badge-primary'>Followers: {followers}</div>
                            <div className='badge badge-success'>Following: {following}</div>
                            <div className='badge badge-error'>Public Repos: {public_repos}</div>
                            <div className='badge badge-secondary'>Public Gists: {public_gists}</div>
                        </div>
                </div>
                <Repos repos={repos} />
            </>
        )
    }
}

/* ~ ~ ~ ~ ~ { Export the Component } ~ ~ ~ ~ ~ */
export default User;