import React from 'react';

export default function VideoFireIcons() {
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
      <source src='https://res.cloudinary.com/dtjasyr7k/video/upload/v1737661028/fire-icons_lfq3bn.mp4' />
      Your browser does not support the video tag.
    </video>
  );
}
