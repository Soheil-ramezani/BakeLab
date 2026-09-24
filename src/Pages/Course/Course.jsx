import { useParams } from 'react-router'
import styles from './course.module.css'
import coursesData from '../../Data/Courses' 
export default function Course() {
    const urlCourse = useParams()
    const courseList=coursesData
    const course = courseList.find(item =>item.slug == urlCourse.courseSlug )
    return (
        <main>
            <section className="w-full px-[5%]">
                {/* image & title */}
                <div className="w-full flex flex-col lg:flex-row items-center my-5 gap-5 " >
                    {/* image */}
                    <div className={`w-4/5 lg:w-2/5 h-max`}>
                        <img src={course.image} alt={course.title} className={`rounded-[10px] h-max`} />
                    </div>
                    {/* title Texts */}
                    <div className={`w-4/5 lg:w-3/5 flex flex-col items-center justify-center`}>
                        <h1 className={`font-[BeauRivage] text-center`} >{course.title}</h1>
                        <p className={`font-[BeauRivage] text-3xl`}> {course.slug} </p>
                        {/* sign box */}
                        <div className={`${styles.signBox__div} w-full mt-[2%]  bg-(--cream)  flex-row items-center justify-around py-2.5 rounded-[10px]`}>
                            {/* creator */}
                            <div className={`flex flex-col items-center gap-1.5`}>
                                <img src="/public/images/favIcons/icons8-chef-70.png" alt="external-Cook-professional-avatars-smashingstocks-detailed-outline-smashing-stocks"></img>
                                <p>{course.instructor.name}</p>

                            </div>
                            {/* student */}
                            <div className={`flex flex-col items-center gap-1.5`}>
                                <img src="/public/images/favIcons/icons8-student-male-70.png" alt="student-male"></img>
                                <p>{course.enrolled}</p>

                            </div>
                            {/* student */}
                            <div className={`flex flex-col items-center gap-1.5`}>
                                <img src="/public/images/favIcons/icons8-time-70.png" alt="student-male"></img>
                                <p>{course.duration.total}-{course.format}</p>

                            </div>

                            {/*  */}
                        </div>
                        {/* course description  */}
                        <p className={`mt-5 italic`}>{course.shortDescription}</p>
                        <hr className={`my-[1.5%] w-full`} />
                        {/* price & enrol button */}
                        <div className={`w-full flex flex-row items-center justify-between mt-[1%]`}>
                            <div className={`h-full  flex flex-row text-nowrap gap-2.5 items-center justify-center `}>
                                <p className="italic">Course Price: </p>
                                <p> {`\n` + `$` + course.price.original}</p>
                            </div>
                            <button className={`bg-(--cream) px-10 py-2.5 rounded-xl cursor-pointer self-end mr-[5%] `}> enrol</button>
                        </div>

                    </div>
                </div>
                {/* second Boxes */}
                <div className={`flex flex-col items-center md:flex-row md:items-start gap-[3vw]`}>
                    {/* left col */}
                    <div className={`flex flex-col w-full md:w-2/5 gap-[3vw]`}>
                        {/* instructor */}
                        <div className={`flex flex-col w-full px-[5%] py-[5%]  text-left rounded-2xl bg-(--cream)`}>
                            <h3 className="italic">instructor</h3>
                            <hr />
                            <p> <span className=' mr-2.5'>name:</span>{course.instructor.name}</p>

                            <p> <span className=' mr-2.5'>expertise:</span>{course.instructor.expertise}</p>
                                
                            <p><span className=' mr-2.5'> rating:</span>{course.instructor.rating}</p>
                                
                                
                        </div>
                        {/* time&level */}
                        <div className={`flex flex-col w-full px-[5%] py-[5%]  text-left rounded-2xl bg-(--cream)`}>
                            <h3 className="italic">Date & Level</h3>
                            <hr />
                            <p>Start date: {course.startDate}</p>
                            <p>course level: {course.level}</p>
                        </div>

                    </div>
                    {/* right box */}
                    <div className={`flex flex-col w-fit px-[2.5%] py-[1.5%]  text-left rounded-2xl bg-(--cream)`}>
                        {/* description */}
                        <h3 className="italic text-xl underline">About Course</h3>
                        <p>{course.description}</p>
                        <hr className={`my-[1.5%]`} />
                        {/* lessons */}
                        <h3 className="italic text-xl underline">What you learn in this course?</h3>
                        {course.lessons.map(item => {
                            return (<p key={item.id}>{item.id}. {item.title}</p>)
                        })}

                        <hr className={`my-[1.5%]`} />
                        {/* includes */}
                        <h3 className="italic text-xl underline">What does this course include?</h3>
                        {course.includes.map(
                            item => {
                                return <p key={course.includes.indexOf(item)}>{course.includes.indexOf(item) + 1}. {item}</p>
                            }
                        )}
                        <hr className={`my-[1.5%]`} />
                        {/* prerequisites & outcomes */}
                        <div className="flex flex-col sm:flex-row items-start justify-around">
                            {/* prerequisites */}
                            <div>
                                <h3 className="italic text-xl underline">prerequisites</h3>
                                <p>{course.prerequisites}</p>
                            </div>
                            {/* outcomes */}
                            <div>
                                <h3 className="italic text-xl underline">outcomes</h3>
                                {course.outcomes.map(text => {
                                    return (<p key={text.length}>{text}</p>)
                                })}
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </main>
    )
}
