import React from 'react'
import './Home.css'
import Navbar from '../../compnents/Navbar/Navbar'
import hero from '../../assets/hero8.webp'
import play from '../../assets/play-button.png'
import info from '../../assets/info.png'
import Titlecards from '../../compnents/TitleCards/Titlecards'
import Footer from '../../compnents/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='banner-img'/>
        <div className="hero-caption">
            <div className="title">
                <h1 >How to Train Your Dragon</h1>
            </div>
            
            <p>On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.</p>
            <div className="hero-btns">
                <button  className='btn'><img src={play} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
            </div>
            <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"} category={"popular"}/>
        <Titlecards title={"Only on Netflix"} category={"top_rated"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top Pics for You"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
