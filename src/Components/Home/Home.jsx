import React, { useState } from 'react'
import './Home.css'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { MainScreen } from '../MainScreen/MainScreen';


export const Home = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then(res => res.json())
            .then(data => setShows(data))
    }, [])

    return (
        <>
            <nav className="navbar">
                <div className="logo">QuaDB Task</div>
            </nav>
            <div className="poster">
                <Carousel
                    showThumbs={true}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        shows.map(show => (
                            <Link key='1' style={{ textDecoration: 'none', color: 'white' }} to={`/show/${show.show.id}`}>
                                <div className="posterImage">
                                    <img src={show ? show.show.image?.original : " "} alt="" />
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MainScreen shows={shows} />
            </div>
        </>
    )
}
