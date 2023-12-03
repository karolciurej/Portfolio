import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  image: string;
  title: string;
  technology: string;
  description: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, title, technology, description, onClose }) => {
  const scaleInVariants = {
    hidden: { scale: 0.0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <motion.div

      className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
      onClick={onClose}
    >
      <motion.div className='bg-white p-4 rounded-lg shadow-lg max-w-[42vw] '       initial="hidden"
      animate="visible"
      variants={scaleInVariants}
      transition={{ duration: 0.5 }} >
        <h2 className='text-2xl font-bold mb-2 text-black'>{title}</h2>
        <img src={image} alt={title} className='mb-4 max-w-[40vw] object-contain rounded-md' />
        <p className='mb-2 text-black'><strong>Technology:</strong> {technology}</p>
        <p className='mb-4 text-black'><strong>Description:</strong> {description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
