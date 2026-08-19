import styles from './AboutSection.module.css'

export default function AboutSection() {
    return (
        <section className={` ${styles.about__section}  sm:bg-(--cream) flex flex-row max-h-[481px] mb-56`}>
            {/* left side = img */}
            <div className={`${styles.about_img__div} md:w-2/5`}>
                <img src="/public/images/JPG/aboutBakery.jpg" alt="BakeLabBakery" className={`${styles.about__img}`} />
            </div>
            {/* right side = texts  */}
            <div  className={`${styles.about_text__div} py-[10%] md:w-3/5 flex flex-col items-center justify-center gap-6`}>
                <h2 className={` ${styles.about__h2} font-bold text-center`}>About BakeLab&#x2019;s Bakery </h2>
                <p className={`px-[10%] text-wrap text-center`}>
                    Every single item we create is the result of hours of testing, precise measurements, and an absolute obsession with quality.
                    We’re here to prove that when premium ingredients meet the precision of a lab and the passion of an artist, pure magic happens.
                </p>
                <button className={`${styles.about__button}`}>Read More</button>
            </div>
        </section>
    )
}
