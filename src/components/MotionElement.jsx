/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function MotionElement({
  children,
  axis = "y",
  delay,
  position = 30,
  once = true,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        [axis]: position,
      }}
      whileInView={{
        opacity: 1,
        [axis]: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionElement;
