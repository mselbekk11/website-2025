import React from 'react';

export default function VideoAOL() {
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
      <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1709772788/Morgans_video_3_eubgor.mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
