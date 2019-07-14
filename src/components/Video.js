import React from 'react'

const Video = ({ gridItems }) => (
    <div className="columns is-multiline">
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
     </div>
)

export default Video


)
