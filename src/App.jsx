import { useState } from 'react';

import ImageCarousel from './ImageCarousel';
const buttons = [];
const images = [
  {
    idx : 0 ,
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    idx : 1 ,
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    idx : 2 ,
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    idx : 3 ,
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    idx : 4 ,
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    idx : 5 ,
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];

export default function App() {
  const [message, setMessage] = useState('Image Carousel');

  return (
    <div className="main">
      <div className="wrapper">
        <h1>{message}</h1>
      <ImageCarousel images={images}/>
      </div>
    </div>
  );
}
