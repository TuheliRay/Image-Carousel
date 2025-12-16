import { useState } from 'react';
export default function ImageCarousel({images}) {
  const [index , setIndex] = useState(0);
  const image=images[index];
  function handlePrev(){
    const nextIndex = (index - 1 + images.length)%images.length;
    setIndex(nextIndex);
  }
  function handleNext(){
    const nextIndex = (index + 1) % images.length;
    setIndex(nextIndex);
  }
  return (
    <div className="image-carousel">
      <img
      key = {image.idx}
      src = {image.src}
      alt = {image.alt}
       width = "100%"
       />
       <button
        className=" btn btn-prev"
        onClick = {handlePrev}
        >
        &#10094;</button>
        // <button className="btn-pages"></button>
       <button 
       className="btn btn-next"
       onClick = {handleNext}
       >
       &#10095;</button>
    </div>
  );
}
