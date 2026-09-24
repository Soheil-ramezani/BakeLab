import { useState } from 'react'
import CoursesListItem from '../../components/CoursesListItem/CoursesListItem'
import coursesData from '../../Data/Courses'
export default function  CoursesListPage() {
  const [Courses]=useState(coursesData)
  return (
    <main>
      <section className={`flex flex-col items-center`}>
         {/* cards-boxes */}
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))]  px-[1%] justify-items-center">
         {
          Courses.map((item)=>{
            return<CoursesListItem key={item.id} linkSlug={item.slug} imgsrc={item.image} title={item.title} shortDescription={item.shortDescription} rating={item.rating} enrolled={item.enrolled} price={item.price.original}/>
           
          })
         }
         </div> 
        
        
      </section>
      
    </main>
  )
}
