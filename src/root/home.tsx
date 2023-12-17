import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react';
import Text from './components/text';

const Home = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
  const rotate = useTransform(x, [-150, 150], [-90, 90]);
  console.log(x)
  return (
    <div className='h-screen  w-screen bg-black snap-center overflow-x-scroll flex-shrink-0  flex flex-col gap-12' >
      <motion.h1 className='lg:text-[220px] md:text-9xl text-8xl w-3/3 ml-12 text-white relative mt-8' ref={containerRef} >
        <Text text="HI I'M KAROL!!" delay={0} time={1.5}></Text>
        <motion.span
          style={{
            borderRadius: 30,
            display: "inline-block",
            x,
            scale,
            rotate,
            cursor: "grab"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1.5
          }}
          className='text-yellow'
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
        >!</motion.span>
      </motion.h1>
      <motion.p className='lg:text-6xl md:text-5xl mr-12 ml-12 text-3xl  text-white'>
        <Text text="I'm 17 years old student of Technikum Łączności nr 14 in Cracow" delay={1.5} time={1.75}></Text>

      </motion.p>
      <motion.p className='lg:text-6xl ml-12 mr-12 md:text-5xl text-3xl text-white'>
        <Text text="I've started programming three years ago. Actually I have the most experience with front-end." delay={3.25} time={2}></Text>

      </motion.p>
      <motion.p className='lg:text-6xl md:text-5xl mr-12 text-3xl ml-12 text-white'>
        <Text text="My favourite technologies are javascript, react and typescript which I'm actually learning." delay={5.25} time={2}></Text>

      </motion.p>

    </div>
  )
}

export default Home