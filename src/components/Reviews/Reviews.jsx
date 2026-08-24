import { useState } from 'react'
import styles from './Reviews.module.css'
import UsersView from '/src/Data/UsersView'
export default function Reviews() {
  const [usersViews] = useState(UsersView)
  const [currentViewIndex, setCurrentViewIndex] = useState(0)

  const nextUser = function () {
    var nextViewIndex = currentViewIndex + 1
    console.log(nextViewIndex)
    if (nextViewIndex > (usersViews.length - 1)) {
      nextViewIndex = 1
    }
    console.log(nextViewIndex)
    setCurrentViewIndex(nextViewIndex)
  }
  const previousUser = function () {
    var previousViewIndex = currentViewIndex - 1
    if (previousViewIndex < 0) {
      previousViewIndex = usersViews.length - 1
    }
    setCurrentViewIndex(previousViewIndex)
  }

  return (
    <section className={`w-full flex flex-col items-center`}>

      <h2 className={`font-bold text-center`} >Reviews from Customers</h2>

      <div className="card w-full lg:px-[2.5%] px-[1%] flex md:flex-row flex-col justify-around items-center  mt-[5%]">
        {/* before icon */}
        <img src="/images/favIcons/ChevronLeft2.svg" alt="" className={`${styles.review_card_icon__img} md:inline hidden w-[5%] h-[8%] `} onClick={previousUser} />
        {/* card body */}
        <div className={` flex sm:flex-row flex-col items-center justify-center  gap-8`}>

          <img src={usersViews[currentViewIndex].img} alt="customer1" className={`${styles.card__img}`} />
          {/* card body */}
          <div className="card_Texts max-w-[500px] ">
            <p className={`${styles.review_card__p}`}>{usersViews[currentViewIndex].view}</p>
            <p className={`${styles.review_card__p} mt-2.5 text-nowrap`}><span className={`font-bold`}>{usersViews[currentViewIndex].name}, </span>{usersViews[currentViewIndex].role}</p>
          </div>

        </div>
        {/* next icon */}
        <img src="/images/favIcons/ChevronRight2.svg" alt="" className={`${styles.review_card_icon__img} md:inline hidden w-[5%] h-[8%] `} onClick={nextUser} />
        {/* next & before for screen< */}
        <div className={` md:hidden  w-full flex flex-row justify-center items-center gap-10 `}>
          <img src="/images/favIcons/ChevronLeft2.svg" alt="" className={`${styles.review_card_icon2__img} w-[5%] h-[8%] `} onClick={previousUser} />
          <img src="/images/favIcons/ChevronRight2.svg" alt="" className={`${styles.review_card_icon2__img} w-[5%] h-[8%] `} onClick={nextUser} />

        </div>
      </div>

    </section>
  )
}
