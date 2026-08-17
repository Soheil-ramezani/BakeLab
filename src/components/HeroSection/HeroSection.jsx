import styles from './HeroSection.module.css'
import ImageSlider from '../ImageSlider/ImageSlider'
export default function HeroSection() {
  const SweetsImages = [
    { id: 1, src: "images/JPG/greenSweet.jpg", alt: "greenSweet" },
    { id: 2, src: "images/JPG/PinkSweet.jpg", alt: "PinkSweet" },
    { id: 3, src: "images/JPG/yellowSweets.jpg", alt: "yellowSweets" },

  ]
  return (
    <section className={`flex flex-row mt-28 items-center `}>
      <div className='w-1/2 flex flex-col items-center justify-center'>
        <h1 className={`${styles.hero_title__h1} text-7xl text-center mx-[5%]`}>
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
      <div className={`w-1/2  flex items-center justify-center`} >
        <ImageSlider images={SweetsImages} />
      </div>
    </section>
  )
}
