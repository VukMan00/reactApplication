import React from 'react';
import {IoLogoYoutube} from 'react-icons/io';
import {FaSpotify} from 'react-icons/fa';
import {SiWikipedia} from 'react-icons/si';
 
const BottomBar = () => {
  return (
    <div className='info'>
        <div className='sources-icons'>
            <IoLogoYoutube className='youtube'/>
            <FaSpotify className='spotify'/>
            <SiWikipedia className='wikipedia'/>
        </div>
        <div className='privacy-policy'>
            <p> Informations that was gathered are valid and from most popular and well known sites in world today. Every data was evaluated and we can guarantee that they represent true value of songs.
                Sites, from where we took data, are: <span id="sites">Spotify</span>, <span id="sites">Youtube</span>, and <span id="sites">Wikipedia</span>. <span id="sites">Spotify</span> provided us with data of most streams songs on their platform
                which we use to define positions of our songs. Music video,views,likes and dislikes we took from <span id="sites">Youtube</span> who is most up-to-date site. Finally from <span id="sites">Wikipedia</span> we learend a little more about song and 
                actor which is showcased. Thank you for using our website!
            </p>
        </div>
    </div>
  )
}

export default BottomBar
