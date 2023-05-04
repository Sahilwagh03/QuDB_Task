import React , {useState , useEffect} from 'react'
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({show}) => {

    const [isloading  , setIsLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])

  return (
    <>
    {
        isloading
        ?
        <div className="cards">
            <SkeletonTheme color='#202020' highlightColor='#444'>
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        
            <div className="cards"  style={{textDecoration:'none' ,color:'white'}}>
                <img className='cards__img' src={show ? show.show.image?.medium : " "} alt={show.show.name}/>
                <div className="cards__overlay">
                    <div className="card__title">{show ? show.show.name: ''}</div>
                    <div className="card__runtime">
                        Score: {show?show.score:''}
                        <span className='card__rating'>Rating: {show?show.show.rating?.average:''}<i className='fas fa-star'></i></span>
                    </div>
                    <div className="card__description"><button className='btn'><Link style={{textDecoration:'none' , color:'white' , padding:'4px'}} to={`/show/${show.show.id}`}>View Details</Link></button></div>
                </div>
            </div>
        
    }
    </>
  )
}

export default Card;