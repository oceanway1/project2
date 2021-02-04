import React from 'react';
import ReactPlayer from 'react-player'


const VideoComponent = props => {
  const {url} = props; 
  console.log(props.url);
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url= {url}
        width='100%'
        height='100%'
      />
    </div>
  )
}
export default VideoComponent;