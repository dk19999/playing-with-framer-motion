import { useRef } from "react";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import styles from "./index.module.css";

function AnimationBox({ imageSrc = "", text = "" }) {
  const controls: AnimationControls & { isHovering?: boolean } = useAnimation();
  const boxRef = useRef<HTMLDivElement | null>(null);

  const startAnimation = async () => {
    if (!boxRef.current) {
      return;
    }
    const boxWidth = boxRef?.current.getBoundingClientRect().width || 0;

    await controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0, delay: 0.1 },
    });

    await controls.start({
      x: boxWidth / 1.5,
      opacity: 1,
      transition: { duration: 1, delay: 0.1 },
      transform: "",
    });

    controls.set({
      x: -boxWidth,
      opacity: 0,
      transition: {
        delay: 0,
        duration: 0,
      },
    });

    await controls.start({
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    });

    if (controls.isHovering) {
      startAnimation();
    }
  };

  const handleMouseEnter = () => {
    controls.isHovering = true;
    startAnimation();
  };

  const handleMouseLeave = () => {
    controls.stop();

    controls.set({
      opacity: 1,
      transform: "none",
    });

    controls.isHovering = false;
  };

  return (
    <div
      className={styles.gridItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={boxRef}
    >
      <motion.img
        src={imageSrc}
        alt="Animated Icon"
        className={styles.vehicleIcon}
        animate={controls}
        initial={{ x: 0, opacity: 1 }}
      />

      <div className={styles.courseName}>{text}</div>
    </div>
  );
}

export default AnimationBox;
