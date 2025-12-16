import { useState } from 'react';
export default function ImageCarousel({
  images
}) {
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
      <div
    className="carousel-track"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
      {images.map((img)=>(
        <img
        alt={img.alt}
        src={img.src}
        key={img.src}
        className="image"
      />
  ))}
  </div>
       <button
        className=" btn btn-prev"
        onClick = {handlePrev}
        >
        &#10094;</button>
        <div className = "pages">
        {images.map((_ , pageIndex)=>(
          <button 
          className={`pages-button ${
            pageIndex === index ? "active":''
          }`}
          onClick = {() =>{setIndex(pageIndex)}}>
          </button>
        ))}
        </div>
       <button 
       className="btn btn-next"
       onClick = {handleNext}
       >
       &#10095;</button>
    </div>
  );
}
