import ImageItem from "./components/imageItem"
const About = () => {
  return (
    <div className='h-screen w-screen bg-black snap-center flex-shrink-0 min-w-[1600px]'>
            <h1 className='text-[220px] text-white'>THIS IS ME!</h1>
            <img src="./profil.jpeg" alt="me" className="h-1/2 " />
    </div>
  )
}

export default About