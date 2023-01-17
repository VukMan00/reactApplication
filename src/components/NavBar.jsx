import React from 'react'
import {RiPlayListFill} from "react-icons/ri";
import { Link } from 'react-router-dom';

const NavBar = ({numberPlayList}) => {
  return (
    <div className='navigationBar'>
        <Link to="/" className="btnHome">Home</Link>
        <Link to="/playlist" className="btnPlaylist">My PlayList</Link>
        <div className='cartPlayList'>
            <h1 className="iconPlayList"><RiPlayListFill/></h1>
            <h1 className='numberPlayList'>{numberPlayList}</h1>
        </div>
    </div>
  )
}

export default NavBar
