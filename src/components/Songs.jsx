import React from 'react'
import Song from './Song'

const Songs = ({songs,addToPlayList}) => {
  return (
    <div className='songs'>
     {
        songs.map((song)=>(
            <Song key={song.id} song={song} addToPlayList={addToPlayList} />
        ))
     }
    </div>
  )
}

export default Songs
