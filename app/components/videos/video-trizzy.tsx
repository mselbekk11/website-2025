import React from 'react';

export default function VideoFour() {
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
      <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1745953297/Trizzy-v3_noogom.mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
