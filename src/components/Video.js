import React from 'react'

const Video = ({ gridItems }) => (
    {gridItems.map(item => (
  <div className="video">
    <iframe
      src={item.videoSrcURL}
      title={item.videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
   ))}
)

export default Video


)
