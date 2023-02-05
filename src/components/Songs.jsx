import React from 'react'
import Song from './Song'

const Songs = ({songs,addToPlayList,searchText}) => {
  return (
    <div className='songs'>
    {searchText === "" ? (
        songs.map((song) => (
          <div key={song.id}>
            <Song key={song.id} song={song} addToPlayList={addToPlayList} />
          </div>
        ))
      ) : (
        <>
          {songs.filter((song) =>
              song.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((song) => (
              <div key={song.id}>
                <Song key={song.id} song={song} addToPlayList={addToPlayList} />
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default Songs
