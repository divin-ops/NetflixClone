import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import { Link } from 'react-router-dom'



const Titlecards = ({title,category}) => {

  const [apiData,setApiData]=useState([])
const cardsRef=useRef()

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjZmNGE3M2E4MWRlZDY0OGJlOGJlNjgxNmNhNzg5ZCIsIm5iZiI6MTc0OTkwODg4OS4wODA5OTk5LCJzdWIiOiI2ODRkN2Q5OTBlZTdlMGI2NjIzNDQxNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.h7XxaHbeV0y3a7CVXbkysHIZqiMKFiuCIGNHUXY05q0'
  }
};


const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft +=event.deltaY
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel)
},[])


  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/original/`+card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
