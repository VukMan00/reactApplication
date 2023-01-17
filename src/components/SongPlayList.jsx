import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

const SongPlayList = ({song}) => {
  return (
    <div className='song'>
      <img src={song.picture} alt="Slike" className="imgCover" />
      <h2 className="title">{song.id}.{song.title}</h2>
      <p className="artist">Artist: {song.artist}</p>
    </div>
  )
}

export default SongPlayList
