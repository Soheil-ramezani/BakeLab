import styles from './HeroSection.module.css'
import ImageSlider from '../ImageSlider/ImageSlider'
import { useState } from 'react'
import HeroSectionPictures from '/src/Data/HeroSectionsPictures'
export default function HeroSection() {
  const [SweetsImages ]= useState(HeroSectionPictures)
  return (
    <section className={`h-screen flex flex-row  md:px-[1%] items-center `}>
      <div className='w-full md:w-3/5 flex flex-col items-center justify-center'>
        <h1 className={`${styles.hero_title__h1}  text-center mx-[5%] mb-5`}>
          Master the Art, Taste the Craft
        </h1>
        <h3 className={`${styles.hero_title__h3} text-3xl text-center mx-[5%]`}>
          Discover artisan breads crafted with passion and master baking techniques through our expert-led courses
        </h3>
        <button className={`${styles.hero__button} w-fit mt-10 px-6 py-2`}>
          <pre>See Menu</pre>
        </button>
        <p className={`${styles.hero__p} text-[14px] mt-4`}>* 10% off on first order</p>

      </div>


      {/* pictures */}
      <div className={`w-2/5  hidden md:flex items-center justify-center`} >
        <ImageSlider images={SweetsImages} />
      </div>
    </section>
  )
}
