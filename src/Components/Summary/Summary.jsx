import React from 'react'
import './Summary.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Summary = () => {

    const { id } = useParams();
    const [show, setShow] = useState([]);
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(data => setShow(data))
    }, [id])

    return (
        <>
            <div className="details-container">
                <h1>{show.name}</h1>
                {show.image && <img className='img-main1' src={show.image.medium} alt={show.name} />}
                <h2>Summary</h2>
                <div className='summary' dangerouslySetInnerHTML={{ __html: show.summary }}></div>
                {/* <p>{show.summary}</p> */}
                <h2 className='h2'>Book Tickets Here</h2>
                <Link to={`bookingTicket`} className="btn2">Book Ticket</Link>
            </div>
        </>
    )
}