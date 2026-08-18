import styles from './Offers.module.css'

export default function Offers() {
  const OffersList = [
    { id: 1, img: '/images/JPG/bread.jpg', title: 'Bread' },
    { id: 2, img: '/public/images/JPG/cookie.jpg', title: 'Cookies' },
    { id: 3, img: '/public/images/JPG/macron.jpg', title: 'Macron' },
    { id: 4, img: '/public/images/JPG/pretzel.jpg', title: 'Pretzel' },
    { id: 5, img: '/public/images/JPG/cupcake.jpg', title: 'CupCakes' },
    { id: 6, img: '/public/images/JPG/cake.jpg', title: 'Cakes' },
  ]
  return (
    <section className={`py-[10%] flex flex-col items-center `}>
      <h2 className={`${styles.offers_title__h2} font-bold`}>What we offer</h2>
      <p className={`${styles.offers_title__p} max-w-[537px] text-center mt-4`} >Introducing you a wide variety of bakery items with unique taste and the creamiest of cakes in the city.</p>
      <div className={` w-full mt-[3%] px-[5%] grid grid-cols-[repeat(auto-fit,minmax(134px,0.5fr))] justify-center  gap-2.5`}>
        {OffersList.map(item => {
          return <div key={item.id} className={`${styles.offers_list_item__dev} flex flex-col items-center justify-around`}>
            <img className={`${styles.offers_list_item__img}`} src={item.img} alt={item.title} />
            <p className={`${styles.offers_list_item__p} mt-[10%] font-medium`}>{item.title}</p>
          </div>
        })}
      </div>
    </section>
  )
}
