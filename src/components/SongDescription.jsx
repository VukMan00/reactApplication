import React from 'react'
import { useLocation } from 'react-router-dom'
import Video from './Video';
import CountUp from 'react-countup';
import {AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';
import {BsPersonCheck} from 'react-icons/bs';

const SongDescription = () => {

  const location = useLocation();
  const songDesc = location.state?.songDesc;

  return (
    <div className="songStat">
      <div className="video">      
        <Video video={songDesc.video}/>
      </div>
      <div className='data'>
        <h1 id="views"><BsPersonCheck /> <CountUp start={0} end={songDesc.views} duration={4}/></h1>
        <h1 id="likes"><AiOutlineLike /> <CountUp start={0} end={songDesc.likes} duration={4}/></h1>
        <h1 id="dislikes"><AiOutlineDislike /> <CountUp start={0} end={songDesc.dislikes} duration={4}/></h1>
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

export default SongDescription
