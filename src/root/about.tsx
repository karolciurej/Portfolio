import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const constraintsRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5  // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div ref={constraintsRef} className='h-screen w-screen bg-black snap-center flex-shrink-0 relative'>
      <h1 className='text-[220px] text-white ml-12'>THIS IS ME!</h1>

      <motion.p
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        animate={controls}
        transition={{ type: "spring", stiffness: 260, damping: 10 }}
        className='text-white text-4xl left-1/2 ml-12 mt-4 lg:text-5xl absolute lg:w-[600px] w-96'>
        Hi! I'm Karol Ciurej from Łętownia in Poland. I focus on creating websites, but occasionally, I also enjoy Arduino programming and am gaining experience with mobile app languages. I'm also a huge football fan, especially in the Premier League. In addition to technology and sports, I find relaxation and joy in fishing.
      </motion.p>

      <div className='absolute left-0 bottom-0 h-1/2'>
        <motion.img drag dragConstraints={constraintsRef} src='./profil.jpeg' alt='me' className='h-full' />
        <div className='text-yellow text-xl absolute top-[-24px] right-[-45px]  px-2 py-1 rotate-45'>Drag Me</div>
      </div>
    </motion.div>
  );
};

export default About;
