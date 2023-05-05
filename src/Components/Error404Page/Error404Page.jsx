import React from 'react'
import './Error404Page.css'
import { Link } from 'react-router-dom'
export const Error404Page = () => {
    return (
        <>
            <div className="error-container">
                <h1 className='textError'>
                    404 Page Not Found
                </h1>
                <Link to='/'><button class="button">Go to Home Page</button></Link>
            </div>
        </>
    )
}
