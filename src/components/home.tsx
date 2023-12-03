import { motion, useMotionValue, useTransform} from 'framer-motion'
import { useRef } from 'react';
import Text from './lowerComponents/text';

const Home = () => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 150], [1.5, 0.5]);
  const rotate = useTransform(x, [-150, 150], [-90, 90]);
  console.log(x)
  return (
    <div className='h-screen  w-screen bg-black snap-center overflow-x-scroll flex-shrink-0 min-w-[1600px]' >
      <motion.h1  className='text-[180px] w-3/3 ml-12 text-white relative'ref={containerRef} >
        <Text text="HI I'M KAROL!!"></Text>
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
                delay: 2
            }}
            className='text-yellow'
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileTap={{ cursor: "grabbing" }}
        >!</motion.span>
      </motion.h1>
    </div>
    )
}

export default Home