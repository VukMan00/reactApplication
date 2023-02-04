import React from 'react';
import {MdPlaylistAdd} from "react-icons/md";
import {AiFillYoutube} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Song = ({ song, addToPlayList}) => {
  const [songDesc] = useState({
    id:song.id,
    title:song.title,
    artist:song.artist,
    video:song.video,
    descritpion:song.descritpion,
  });

  return (
    <div className='song'>
      <img src={song.picture} alt="Slike" className="imgCover" />
      <h2 className="title">{song.id}.{song.title}</h2>
      <p className="artist">Artist: {song.artist}</p>
      <div className="options">
        <Link to="/songDesc" className='statistic' state={{songDesc:songDesc}}><AiFillYoutube /></Link>
        <button className='addToPlayList' onClick={()=>addToPlayList(song.id)}><MdPlaylistAdd /></button>
      </div>
    </div>
  )
}

export default Song
