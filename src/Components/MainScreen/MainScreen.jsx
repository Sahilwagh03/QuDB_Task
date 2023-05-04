import React from 'react'
import './MainScreen.css'
import Card from '../Card/Card'
export const MainScreen = ({shows}) => {
  return (
    <>
     <div className="movie__list">
        <h2 className="list__title">ALL</h2>
        <div className="list__cards">
            {
                shows.map(show=>(
                    <Card show={show} key={show.show.id} />
                ))
            }
        </div>
    </div>
    </>
  )
}
