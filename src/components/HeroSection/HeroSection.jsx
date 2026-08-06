import styles from './HeroSection.module.css'
export default function HeroSection() {
  return (
    <section className={` flex flex-col mt-28 items-center `}>
        <h1 className={`${styles.hero_title__h1} text-7xl text-center mx-[5%]`}>Master the Art, Taste the Craft</h1>
        <h3 className={`${styles.hero_title__h3} text-3xl text-center mx-[5%]`}>Discover artisan breads crafted with passion and master baking techniques through our expert-led courses</h3>
        <button className={`${styles.hero__button} w-fit mt-10 px-6 py-2`}><pre>See Menu</pre></button>
        <p className={`${styles.hero__p} text-[14px] mt-4`}>* 10% off on first order</p>
        {/* pictures */}
        <div className={`w-full grid grid-cols-[repeat(auto-fit,minmax(370px,1fr))] items-center justify-items-center gap-3  `}>
          <img className={`${styles.hero_Pics__img}`} src="/images/JPG/greenSweet.jpg" alt="greenSweet"/>
          <img className={`${styles.hero_Pics__img} xl:mt-[30%]`} src="/images/JPG/PinkSweet.jpg" alt="greenSweet"/>
          <img className={`${styles.hero_Pics__img}`} src="/images/JPG/yellowSweets.jpg" alt="greenSweet"/>
        </div>
    </section>
  )
}
