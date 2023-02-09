import React from 'react'
import {RiPlayListFill} from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({numberPlayList,search}) => {
  const location = useLocation();
  var pathname = location.pathname;
  if(pathname==="/" || pathname==='/playlist'){
    return (
      <div>
        <div className='navigationBar'>
            <Link to="/" className="btnHome">Home</Link>
            <Link to="/playlist" className="btnPlaylist">My PlayList</Link>
            <div className='cartPlayList'>
                <h1 className="iconPlayList"><RiPlayListFill/></h1>
                <h1 className='numberPlayList'>{numberPlayList}</h1>
            </div>
        </div>
        <div className="search-field">
            <label id="lblSearch" htmlFor="search">Search</label>
            <input id="search" className="search" type="text" placeholder="Search songs" onChange={()=>search(document.getElementById("search").value)}/>
        </div>
      </div>
    )
  }
  else if(pathname==='/songDesc'){
    return (
      <div>
        <div className='navigationBar'>
            <Link to="/" className="btnHome">Home</Link>
            <Link to="/playlist" className="btnPlaylist">My PlayList</Link>
            <div className='cartPlayList'>
                <h1 className="iconPlayList"><RiPlayListFill/></h1>
                <h1 className='numberPlayList'>{numberPlayList}</h1>
            </div>
        </div>
      </div>
    )
  }
}

export default NavBar
