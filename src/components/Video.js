import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <iframe
    className="iframe"
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    width="98.8%"
    height="78.5%"
    border_radius="8px"
  />
)
export default Video
