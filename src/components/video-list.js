import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
      {/* referencia usada somente em componentes de função. em componentes de classe, usar this.props */}
    </ul>
  );
};

export default VideoList;