"use client"
import AboutPage from './ourstory/page'
import { IoIosCut } from "react-icons/io";
import { TfiCut } from "react-icons/tfi";
import { NextPage } from "next";
import slide1 from "./images/FLASHMEUP-15.jpg"
import slide2 from "./images/FLASHMEUP-49.jpg"
import slide3 from "./images/FLASHMEUP-36.jpg"
import slide4 from "./images/FLASHMEUP-63.jpg"
import crousalPick1 from "./images/FLASHMEUP-29.jpg"
import crousalPick2 from "./images/FLASHMEUP-37.jpg"
import crousalPick3 from "./images/FLASHMEUP-51.jpg"
import crousalPick4 from "./images/FLASHMEUP-38.jpg"
import crousalPick5 from "./images/FLASHMEUP-39.jpg"
import crousalPick6 from "./images/FLASHMEUP-43.jpg"
import crousalPick7 from "./images/FLASHMEUP-45.jpg"
import crousalPick8 from "./images/FLASHMEUP-54.jpg"
import crousalPick9 from "./images/FLASHMEUP-83.jpg"
import crousalPick10 from "./images/FLASHMEUP-81.jpg"
import Image from "next/image";
import { useEffect, useState } from "react";
import "./css/style.css"


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = [
      {
          src: slide1,
      },
      {
          src: slide2,
      },
      {
          src: slide4,
      },
      
  ]

  useEffect(()=>{
    setTimeout(() => {
        prevSlide()
    }, 3000);
  })

  const prevSlide = () =>{
      let isFirstSlide = currentIndex === 0;
      let newIndex = isFirstSlide ? slide.length -1 : currentIndex - 1;
      setCurrentIndex(newIndex);
  }
  return (
    
    <div>
    <div id="animation-carousel" className="relative w-full" data-carousel="static" style={{height:"100%"}}>
{/* <!-- Carousel wrapper --> */}
<div className="relative h-100 rounded-lg md:h-100" style={{height:"55rem"}}>
 {/* <!-- Item 1 --> */}
<div className=" duration-200 ease-linear" data-carousel-item>
    {/* <img src={slide[0].src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." /> */}
    <Image style={{height:"100%"}} src={slide[currentIndex].src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        
</div>
</div>
{/* <!-- Slider controls --> */}
{/* <button type="button" className="absolute cursor-default top-0 left-0 z-30 flex items-center justify-center h-full px-4  group focus:outline-none" data-carousel-prev >
<span onClick={prevSlide} className="inline-flex  items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-4 h-4 cursor-pointer text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    </svg>
    <span className="sr-only">Previous</span>
</span>
</button>
<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
    <span className="sr-only">Next</span>
</span>
</button> */}
</div>
<div className="ourStory">
  <main className='flex  flex-col  p-24 '>
    <div className='flex storyContent'>
       <div className='basis-1/6'>
        <h1>our story</h1>
       </div>
    </div>
  </main>
</div>
<div className='ourServices flex justify-around p-24'>
    <div><div className='serviceSnap'><span><TfiCut  /></span></div></div>
    <div><div className='serviceSnap'><span><IoIosCut /></span></div></div>
    <div><div className='serviceSnap'><span><IoIosCut /></span></div></div>
    <div><div className='serviceSnap'><span><IoIosCut /></span></div></div>

</div>
<div>
<div className="container mx-auto pt-2">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick1}/>
      </div>
      <div className="w-1/2 p-1 md:p-2">
      <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick9}/>
      </div>
      <div className="w-full p-1 md:p-2">
      <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick10}/>
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
      <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick4}/>
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick3} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image
          alt="gallery"
          className="block PhotoGaleryBlock h-full w-full rounded-lg object-cover object-center"
          src={crousalPick8} />
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}
