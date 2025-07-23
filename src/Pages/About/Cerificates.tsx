

const certificates = [
  {
    title: "Meta React (Specialization Certificate)",
    provider: "Meta, Coursera",
    date: "June 2025"
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    provider: "IBM, Coursera",
    date: "June 2025"
  },
  {
    title: "Ultimate TypeScript Course 2024",
    provider: "Packt, Coursera",
    date: "June 2025"
  },
  {
    title: "Version Control",
    provider: "Meta, Coursera",
    date: "June 2025"
  },
  {
    title: "Foundations of UX Design",
    provider: "Google, Coursera",
    date: "June 2025"
  },
  {
    title: "Build Websites with HTML, JavaScript, AngularJS & React",
    provider: "Board Infinity, Coursera",
    date: "June 2025"
  },
  {
    title: "Learn Next.js",
    provider: "SCRIMBA, Coursera",
    date: "June 2025"
  },
  {
    title: "IT Essentials Course",
    provider: "NTC",
    date: "February 2024"
  }
];


const Cerificates = () => {
  return (
  <div className="w-full h-auto  bg-gradient-to-r from-[#FF6C63] to-[#FFB147] rounded-4xl flex flex-col justify-center items-center gap-2 md:gap-10 p-5">
    <h2 className='text-[#344054] font-medium text-2xl md:text-4xl lg:text-6xl font-[lufga]'>TRAININGS & CERTIFICATIONS</h2>
<div className='w-[98%] grid grid-cols-1 md:grid-cols-2 justify-center items-center '>
 {certificates.map((certificate)=>(
    <div className='w-[100%] md:w-[90%]  h-35 p-5 flex flex-col justify-center items-center gap-5 border-b-2 border-gray-200'>
        <div className='w-full flex justify-between items-center '><p className='text-sm md:text-lg text-white'>{certificate.date}</p><p className='text-xs md:text-base text-white'>{certificate.provider}</p></div>
        <h2 className='w-full text-lg md:text-xl lg:text-3xl font-bold text-white '>{certificate.title}</h2>
    </div>
 ))}
</div>
</div>
  )
}

export default Cerificates
