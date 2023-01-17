import React from 'react'
import Song from './Song'

const Songs = ({songs}) => {
  return (
    <div className='songs'>
     {
        songs.map((song)=>(
            <Song song={song} />
        ))
     }
    </div>
  )
}

export default Songs
