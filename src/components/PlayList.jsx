import React from 'react'
import SongPlayList from './SongPlayList'

const PlayList = ({songsInPlayList,removeFromPlayList,searchText}) => {
  return (
    <div className='playList'>
        <div className="description">
            <h1 className='desc'>Your playlist</h1>
        </div>
        <div className='songs'>
            {searchText === "" ? (
            songsInPlayList.map((song) => (
              <div key={song.id}>
                <SongPlayList key={song.id} song={song} removeFromPlayList={removeFromPlayList}/>
              </div>
            ))
          ) : (
            <>
              {songsInPlayList.filter((song) =>
                  song.title.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((song) => (
                  <div key={song.id}>
                    <SongPlayList key={song.id} song={song} removeFromPlayList={removeFromPlayList}/>
                  </div>
                ))}
            </>
          )}
        </div>
    </div>
  )
}

export default PlayList
