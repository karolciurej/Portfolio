import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Modal from './modal'; // Import your Modal component
import { useInView } from 'react-intersection-observer';
import ImageItem from './components/imageItem';
import Dots from './components/dots';

interface WorksProps {
  containerRef: React.RefObject<HTMLElement>;
}


const Works: React.FC<WorksProps> = ({ containerRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1 
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const titles = [
    "Art Gallery",
    "Speedway",
    "3D engine prototype",
    "Motorola Science Cup",
    "Student Behaviour App",
    "I hope more"
  ];

  const technologies = [
    "React Native, Expo, TypeScript",
    "JavaScript",
    "TypeScript",
    "TypeScript",
    "NextJS, Prisma, Tailwind, TypeScript",
    "",
  ];

  const descriptions = [
    "App created for Software Mention competition. My first mobile app.",
    "Speedway Minecraft-style game created using pure JavaScript.",
    "My 3D Engine prototype for Motorola Science Cup. My first experience with 3D engines and the result of a week of work.",
    "I'm currently participating in this competition with my friends in a 5-person team. We chose a task where we have to develop a 3D engine that works with 80s games like Battlezone.",
    "For the past few months, I have been developing an app about student behavior with my friend. We are working on it as freelancers. It's a no-time-pressure job.",
    "I hope more"
  ];

  const imageUrls = [
    './artGallery.png',
    './speedway.png',
    './engine.png',
    './motorola.png',
    './student.png',
    'I hope more',
  ];

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setSelectedTechnology(technologies[index]);
    setSelectedDescription(descriptions[index]);
    setSelectedTitle(titles[index]);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.5 });
    }
  }, [inView, controls]);

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (imageUrls.length-1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (imageUrls.length-1)) % (imageUrls.length-1));
  };

  return (
    <div className='h-screen w-fit bg-yellow snap-center flex-shrink-0'>
       <div className='hidden lg:block'>
        <motion.div className='grid grid-cols-3 grid-rows-2 h-screen'>
          {imageUrls.map((url, index) =>
            index === imageUrls.length - 1 ? 
            (<div key={index} className='lg:w-5/6 w-80 text-5xl flex items-center justify-center gap-2'>
                Creating more <Dots></Dots>
              </div>) 
            : (
              <ImageItem
                key={index}
                url={url}
                index={index}
                onImageClick={handleImageClick} 
                title={titles[index]}
                isVisible={true}
              />
            )
          )}
        </motion.div>
      </div>


      <div className='lg:hidden flex flex-col items-center justify-center h-screen'>
        <div className='flex overflow-x-hidden h-screen items-center justify-evenly '>
        <button className=' left-6 top-1/2 z-10 w-8' onClick={prevSlide}>&#60;</button>

          <ImageItem
            key={currentSlide}
            url={imageUrls[currentSlide]}
            title={titles[currentSlide]}
            isVisible={true}
            onImageClick={handleImageClick}
            index={currentSlide}
          />      
        <button className=' mr-2 right-0 z-10 w-8 top-1/2' onClick={nextSlide}>&#62;</button>

        </div>

      </div>

      {
        isModalOpen && (
          <Modal
            image={selectedImage}
            technology={selectedTechnology}
            description={selectedDescription}
            title={selectedTitle}
            onClose={() => setIsModalOpen(false)}
          />
        )
      }
    </div >
  );

};

export default Works;
