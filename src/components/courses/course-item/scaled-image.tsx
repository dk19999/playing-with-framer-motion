import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import arrowIcon from "../../../assets/icons/arrow-icon.png";

function ScaleImageOnHover({
  onHover,
  onMouseLeave,
}: {
  onHover: () => void;
  onMouseLeave: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation(); // Control the animations manually

  const handleMouseEnter = () => {
    onHover();
    setIsHovered(true);
    controls.start({
      scale: 1500,
      transition: {
        duration: 2, // Slow scale-up
        ease: "easeInOut",
      },
    });
  };

  const handleMouseLeave = () => {
    onMouseLeave();
    controls
      .start({
        scale: 1, // Back to original size
        transition: {
          duration: 0.3, // Faster scale-down
          ease: "easeOut",
        },
      })
      .then(() => {
        setInterval(() => {
          setIsHovered(false);
        }, 1000);
      });
  };

  return (
    <motion.div
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        color: "white",
        borderRadius: "10px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={controls}
    >
        <motion.img
          src={arrowIcon}
          alt="Clone"
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 1.5, 0.5, 1],
            width:[20, 30, 40, 100],
            height:[20, 30, 40, 100, 40]

          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
    </motion.div>
  );
}

export default ScaleImageOnHover;
