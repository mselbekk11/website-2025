import React from 'react';

export default function VideoAlkimi() {
  return (
    <video
      // width='100%'
      // height='100%'
      muted
      autoPlay
      loop
      playsInline
      className=''
    >
      <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1706134105/Morgans_video_2_v2pshf.mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
