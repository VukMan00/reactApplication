import React from 'react'

const Video = ({video}) => {
    console.log(video);
  return (
    <iframe
    id="video"
    width="560"
    height="315"
    src={video}
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen>
    </iframe>
  )
}

export default Video
