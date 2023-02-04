import React from 'react'
import { useLocation } from 'react-router-dom'
import Video from './Video';

const SongStat = () => {

  const location = useLocation();
  const songDesc = location.state?.songDesc;

  return (
    <div className="songStat">
      <div className="video">      
        <Video video={songDesc.video}/>
      </div>
      <div className="title">
        <h1>{songDesc ? songDesc.title : "Niste odabrali pesmu"}</h1>
      </div>
      <div className="paragraph">
        <p>{songDesc.descritpion}</p>
      </div>
    </div>
  )
}

export default SongStat
