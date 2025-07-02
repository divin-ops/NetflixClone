import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const {id}=useParams()
  const navigate=useNavigate()

 const [apiData,setApiData]=useState({
  name:"",
  key:"",
  published_at:"",
  type:""
 }) 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjZmNGE3M2E4MWRlZDY0OGJlOGJlNjgxNmNhNzg5ZCIsIm5iZiI6MTc0OTkwODg4OS4wODA5OTk5LCJzdWIiOiI2ODRkN2Q5OTBlZTdlMGI2NjIzNDQxNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.h7XxaHbeV0y3a7CVXbkysHIZqiMKFiuCIGNHUXY05q0'
  }
};



useEffect(()=>{
   
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res =>setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])



  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>navigate(-2)}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}



export default Player 
