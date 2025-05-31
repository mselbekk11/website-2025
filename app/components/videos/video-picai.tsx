import React from 'react';

export default function VideoPicAI() {
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
      <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1731900559/picAI-v2_rpmngh.mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
