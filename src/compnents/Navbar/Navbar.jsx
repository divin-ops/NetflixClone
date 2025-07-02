import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import bellicon from '../../assets/bell.png'
import dropdown from '../../assets/drop.png'
import searchicon from '../../assets/search.png'
import usericon from '../../assets/user.png'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef=useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="" />
        <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchicon} alt="" className='icon' width={'20px'} height={'20px'}/>
        <p>Children</p>
        <img src={bellicon} alt="" className='icon' width={'20px'} height={'20px'} />
        <div className="navbar-profile">
            <img src={usericon} alt="" className='profile' width={'15px'} height={'20px'} />
            <img src={dropdown} alt="" width={'20px'} height={'20px'}  />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
