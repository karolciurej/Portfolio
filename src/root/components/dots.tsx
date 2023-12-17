import { motion } from "framer-motion";

const Dots = () => {
  return (
    <span>
      {[".", ".", "."].map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.5 
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </span>
  );
};

export default Dots;
