import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ImageItemProps {
  url: string;
  title: string;
  onImageClick: (url: string, index: number) => void;
  index: number;
  isVisible: boolean
}

const ImageItem: React.FC<ImageItemProps> = ({ url, title, onImageClick, index, isVisible }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, scale: 1, x: 300 });
    }
  }, [inView, controls]);

  useEffect(() => {
    controls.start(isVisible ? { opacity: 1 } : { opacity: 0 });
  }, [isVisible, controls]);

  return (
    <motion.img
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      src={url}
      alt={title}
      className='lg:w-full w-5/6  m-auto aspect-[4/3] rounded-lg'
      onClick={() => onImageClick(url, index)}
    />
  );
};

export default ImageItem;
