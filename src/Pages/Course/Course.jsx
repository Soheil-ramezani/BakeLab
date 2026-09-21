export default function Course() {
    const course = {
        id: 1,
        title: "Sourdough Masterclass: From Starter to Loaf",
        slug: "sourdough-masterclass",
        category: "bread",
        subcategory: "artisan",
        description:
            "Master the ancient art of sourdough baking from scratch. Learn how to create and maintain a wild yeast starter, understand fermentation science, and bake stunning rustic European-style loaves with open crumb and crispy crust.",
        shortDescription:
            "The ultimate sourdough journey — from building your first starter to baking bakery-quality loaves at home.",
        instructor: {
            name: "Daniel Hartwell",
            expertise: "Artisan Breads & Natural Fermentation",
            rating: 4.9,
        },
        level: "intermediate",
        duration: {
            total: "20 hours",
            sessions: 10,
            sessionLength: "2 hours",
        },
        price: {
            original: 89,
            discounted: 69,
            currency: "USD",
            hasDiscount: true,
        },
        format: "online",
        capacity: null,
        enrolled: 1245,
        rating: 4.8,
        reviews: 389,
        lessons: [
            {
                id: 1,
                title: "Introduction to Wild Yeast & Sourdough History",
                duration: "45 min",
                isFree: true,
                videoUrl: "/videos/sourdough/lesson-01.mp4",
            },
            {
                id: 2,
                title: "Building Your Starter: Day 1–7",
                duration: "1 hr 15 min",
                isFree: true,
                videoUrl: "/videos/sourdough/lesson-02.mp4",
            },
            {
                id: 3,
                title: "Understanding Hydration & Flour Types",
                duration: "1 hr",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-03.mp4",
            },
            {
                id: 4,
                title: "Mixing, Autolyse & Bulk Fermentation",
                duration: "2 hr",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-04.mp4",
            },
            {
                id: 5,
                title: "Shaping Techniques: Boule & Batard",
                duration: "1 hr 30 min",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-05.mp4",
            },
            {
                id: 6,
                title: "Scoring Patterns & Oven Spring",
                duration: "1 hr",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-06.mp4",
            },
            {
                id: 7,
                title: "Baking with Dutch Oven vs. Steam Injection",
                duration: "1 hr 30 min",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-07.mp4",
            },
            {
                id: 8,
                title: "Country Loaf with Whole Wheat & Rye",
                duration: "2 hr",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-08.mp4",
            },
            {
                id: 9,
                title: "Troubleshooting: Dense Crumb, Flat Loaves & More",
                duration: "1 hr",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-09.mp4",
            },
            {
                id: 10,
                title: "Maintaining Your Starter for Life",
                duration: "45 min",
                isFree: false,
                videoUrl: "/videos/sourdough/lesson-10.mp4",
            },
        ],
        tags: ["sourdough", "artisan bread", "fermentation", "rustic"],
        image: "/images/Courses/1.png",
        isFeatured: true,
        status: "active",
        startDate: "2026-09-15",
        prerequisites: ["Basic familiarity with baking"],
        includes: [
            "10 HD video lessons",
            "Printable recipe PDFs",
            "Baker's percentage calculator",
            "3 months of community support",
            "Digital BakeLab certificate",
        ],
        outcomes: [
            "Create and maintain a healthy sourdough starter",
            "Bake 5 different sourdough bread varieties",
            "Understand fermentation science and dough behavior",
            "Achieve consistent open crumb and oven spring",
        ],
        ingredientKit: {
            available: true,
            price: 35,
            description:
                "Includes organic bread flour, whole wheat flour, rye flour, banneton basket, lame scorer, and a dehydrated starter culture.",
        },
    }
    return (
        <main>
            <section className="w-full px-[5%]">
                {/* image & title */}
                <div className="w-full flex flex-row items-center my-5 gap-5 " >
                    {/* image */}
                    <div className={`w-2/5 h-max`}>
                        <img src={course.image} alt={course.title} className={`rounded-[10px] h-max`} />
                    </div>
                    {/* title Texts */}
                    <div className={`w-3/5 flex flex-col items-center justify-center`}>
                        <h1 className={`font-[BeauRivage] text-5xl`} >{course.title}</h1>
                        <p className={`font-[BeauRivage] text-3xl`}> {course.slug} </p>
                        {/* sign box */}
                        <div className={` w-full mt-[2%]  bg-(--cream) flex flex-row items-center justify-around py-2.5 rounded-[10px]`}>
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
                    </div>
                </div>
                {/* second infos */}
                <div className={`flex flex-row items-start gap-[5%]`}>
                    {/* instructor */}
                    <div className={`flex flex-col w-fit px-[2.5%] py-[1.5%]  text-left rounded-2xl bg-(--cream)`}>
                        <h3 className="italic">instructor</h3>
                        <hr />
                        <p>{course.instructor.name}</p>
                        <p>{course.instructor.expertise}</p>
                        <p>rating:{course.instructor.rating}</p>
                    </div>
                    {/* details */}
                    <div className={`flex flex-col w-fit px-[2.5%] py-[1.5%]  text-left rounded-2xl bg-(--cream)`}>
                        {/* description */}
                        <h3 className="italic text-xl underline">About Course</h3>
                        <p>{course.description}</p>
                        <hr className={`my-[1.5%]`} />
                        {/* lessons */}
                        <h3 className="italic text-xl underline">What you learn in this course?</h3>
                        <table>
                            {course.lessons.map(item => {
                                return (<tr key={item.id}><td>{item.id}.{item.title}</td> </tr>)
                            })}
                        </table>
                        <hr className={`my-[1.5%]`} />
                        {/* prerequisites & outcomes */}
                        <div className="flex flex-row items-start justify-around">
                            {/* prerequisites */}
                            <div>
                                <h3 className="italic text-xl underline">prerequisites</h3>
                                <p>{course.prerequisites}</p>
                                </div>
                                {/* outcomes */}
                                <div>
                                  <h3 className="italic text-xl underline">outcomes</h3>
                                {course.outcomes.map(text=>{
                                   return(<p key={text.length}>{text}</p>) 
                                })}
                                </div>

                        </div>

                    </div>
                </div>

            </section>
        </main>
    )
}
