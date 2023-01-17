import React from 'react'
import SongPlayList from './SongPlayList'

const PlayList = ({songsInPlayList}) => {
  return (
    <div className='playList'>
        <div className="description">
            <h1 className='desc'>Your playlist</h1>
        </div>
        <div className='songs'>
            {songsInPlayList.map((song)=>(
                <SongPlayList key={song.id} song={song} />
            ))}
        </div>
    </div>
  )
}

export default PlayList
