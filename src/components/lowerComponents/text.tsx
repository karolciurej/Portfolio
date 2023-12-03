import { motion } from "framer-motion";

interface TextProps {
    text: string
}

const Text: React.FC<TextProps> = ({ text }) => {
    const arr = text.split("")
    return (
        <span >
            {arr.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: i / 10
                    }}
                    key={i}
                >
                    {el}{""}
                </motion.span>
            ))}
        </span>
    );
}

export default Text;