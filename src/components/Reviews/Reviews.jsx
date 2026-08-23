import styles from './Reviews.module.css'
export default function Reviews() {
  return (
    <section className={`w-full flex flex-col items-center`}>

      <h2 className={`font-bold text-center`} >Reviews from Customers</h2>

      <div className="card w-full px-[5%] flex flex-row justify-around items-center  mt-[5%]">
        {/* before icon */}
        <img src="/public/images/favIcons/ChevronLeft2.svg" alt="" className={`${styles.review_card_icon__img} w-[5%] h-[8%] `} />
        {/* card body */}
        <div className={` flex flex-row items-center justify-center gap-10`}>
          
          <img src="/public/images/JPG/customer2.jpg" alt="customer1" className={`${styles.card__img}`} />
          {/* card body */}
          <div className="card_Texts max-w-[500px] ">
            <p>This place is great. They have so many baked goods it will blow your mind.
              They have everything from large cakes to cupcakes to donuts to pastries to breads to cookies.
              The price is also fair.</p>
            <p className={`mt-2.5`}><span className={`font-bold`}>jack reacher , </span>Student</p>
          </div>

        </div>
        {/* next icon */}
        <img src="/public/images/favIcons/ChevronRight2.svg" alt="" className={`${styles.review_card_icon__img} w-[5%] h-[8%]  `} />
      </div>
    </section>
  )
}
