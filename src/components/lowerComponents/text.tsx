import { motion } from "framer-motion";

interface TextProps {
    text: string,
    delay: number,
    time: number
}

const Text: React.FC<TextProps> = ({ text, delay, time }) => {
    const arr = text.split("")
    return (
        <span >
            {arr.map((el, i) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.25,
                        delay: delay + time/arr.length * i
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