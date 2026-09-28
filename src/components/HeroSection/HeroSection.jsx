import ImageSlider from '../ImageSlider/ImageSlider'
import { useState } from 'react'
import HeroSectionPictures from '/src/Data/HeroSectionsPictures'
import styles from './HeroSection.module.css'
import { Link } from 'react-router'
export default function HeroSection() {
  const [HeroPictures ]= useState(HeroSectionPictures)
  return (
    <section className={`min-h-screen flex flex-row mb-[5%] sm:mb-[1%]  md:px-[1%] items-center `}>
      <div className='w-full md:w-3/5 flex flex-col items-center justify-center'>
        <h1 className={`${styles.hero_title__h1}  text-center mx-[5%] mb-5`}>
          Master the Art, Taste the Craft
        </h1>
        <h3 className={`${styles.hero_title__h3} text-3xl text-center mx-[5%]`}>
          Discover artisan breads crafted with passion and master baking techniques through our expert-led courses
        </h3>
        {/* btns */}
        <div className={`flex flex-col sm:flex-row w-4/5 items-center justify-center gap-5`}>
          {/* See course btn */}
        <div className={`flex flex-col items-center justify-center`}>
          <Link to={"/Courses"}>
          <button  className={`${styles.hero__button} w-fit mt-5 sm:mt-10 px-6 py-2 cursor-pointer`}>
          <pre>See Courses</pre>
        </button>
          </Link>
         
        <p className={`${styles.hero__p} text-[14px] mt-4`}>* 10% off on first enrol</p>
      </div> 
       {/* See menu btn */}
        <div className={`flex flex-col items-center justify-center`}>       
       <button className={`${styles.hero__button} w-fit mt-5 sm:mt-10 px-6 py-2`}>
          <pre>See Menu</pre>
        </button>
        <p className={`${styles.hero__p} text-[14px] mt-4`}>* 10% off on first order</p>
        </div>
       
        </div>
       
        </div>
        
      {/* pictures */}
      <div className={`w-2/5  hidden md:flex items-center justify-center`} >
        <ImageSlider images={HeroPictures} />
      </div>
    </section>
  )
}
