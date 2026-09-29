import CoursesListItem from './../CoursesListItem/CoursesListItem'
import courses from "./../../Data/Courses"
import { Link } from 'react-router';
export default function CoursesIntro() {
  const coursesList = courses
  const chosenCourses=coursesList.slice(1,5);
  return (
    <section className={`flex flex-col items-center mb-[1%]`}>
      <h2 className={`text-center`}>What are our newest courses</h2>
      <p className={`max-w-[60%] text-center`}>
        Discover a world of unique flavors and master the art of baking
        with our comprehensive courses. Learn to create exquisite bakery items and the creamiest cakes, perfect for every occasion.
        </p>
        {/* boxes */}
        <div className={ `w-full grid grid-cols-[repeat(auto-fit,minmax(327px,1fr))] justify-items-center `}>
          {
            chosenCourses.map(
              item=>{
                return<CoursesListItem key={item.id} linkSlug={item.slug} imgsrc={item.image} title={item.title} shortDescription={item.shortDescription} rating={item.rating} enrolled={item.enrolled} price={item.price.original} showDetails={false} />
              }
            )
            }
            
        </div>
        {/* btn */}
        <div className={`flex flex-col items-center justify-center my-5`}>
          <Link to={"/Courses"}>
          <button  className={` bg-(--deep-brown) text-white  px-6 py-2 cursor-pointer`}>
          See Courses
        </button>
          </Link>
      </div>
    </section>
  )
}
