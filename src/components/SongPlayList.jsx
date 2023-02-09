import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {TbPlaylistOff} from 'react-icons/tb';
import {AiFillYoutube} from "react-icons/ai";
import asItWas from '../audio/asItWas.mp3';
import coldHeart from '../audio/coldHeart.mp3';
import enemy from '../audio/enemy.mp3';
import heatWaves from '../audio/heatWaves.mp3';
import mePortoBonito from '../audio/mePortoBonito.mp3';
import ojitos from '../audio/ojitos.mp3';
import quevedoBzrp from '../audio/quevedoBzrp.mp3';
import runningUpThatHill from '../audio/runningUpThatHill.mp3';
import stay from '../audio/stay.mp3';
import titiMePregunto from '../audio/titiMePregunto.mp3';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SongPlayList = ({song,removeFromPlayList}) => {
  var audio;
  if(song.title === "As it Was"){
    audio = asItWas;
  }
  if(song.title === "Heat Waves"){
    audio = heatWaves;
  }
  if(song.title === "STAY(With Justin Bieber)"){
    audio = stay;
  }
  if(song.title === "Me Porto Bonito"){
    audio = mePortoBonito;
  }
  if(song.title === "Titi Me Pregunto"){
    audio = titiMePregunto
  }
  if(song.title === "Cold Heart-PNAU Remix"){
    audio = coldHeart;
  }
  if(song.title === "Enemy"){
    audio = enemy
  }
  if(song.title==="Quevedo:Bzrp"){
    audio = quevedoBzrp;
  }
  if(song.title==="Ojitos Lindos"){
    audio = ojitos;
  }
  if(song.title==="Running Up That Hill"){
    audio = runningUpThatHill;
  }

  const [songDesc] = useState({
    id:song.id,
    title:song.title,
    artist:song.artist,
    video:song.video,
    descritpion:song.descritpion,
    views:song.views,
    likes:song.likes,
    dislikes:song.dislikes
  });

  return (
    <div className='song'>
      <img src={song.picture} alt="Slike" className="imgCover" />
      <h2 className="title">{song.id}.{song.title}</h2>
      <p className="artist">Artist: {song.artist}</p>
      <ReactAudioPlayer
        src={audio}
        controls
      />
      <br></br>
      <div className="options">
        <Link to="/songDesc" className='statistic' state={{songDesc:songDesc}}><AiFillYoutube /></Link>
        <button className='addToPlayList' onClick={()=>removeFromPlayList(song.id)}><TbPlaylistOff /></button>
      </div>
    </div>
  )
}

export default SongPlayList
