import React from 'react';
import {MdPlaylistAdd} from "react-icons/md";
import {AiFillYoutube} from "react-icons/ai";

const Song = ({ song, addToPlayList}) => {
  return (
    <div className='song'>
      <img src={song.picture} alt="Slike" className="imgCover" />
      <h2 className="title">{song.id}.{song.title}</h2>
      <p className="artist">Artist: {song.artist}</p>
      <div className="options">
        <button className='video'><AiFillYoutube /></button>
        <button className='addToPlayList' onClick={()=>addToPlayList(song.id)}><MdPlaylistAdd /></button>
      </div>
    </div>
  )
}

export default Song
