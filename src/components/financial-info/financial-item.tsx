import { useState } from "react";
import styles from "./financial-item.module.css";
import { motion } from "framer-motion";

const FinancialItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.caretBox}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "#28a745" : "#f9f9f9",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        className={styles.caret}
        animate={{
          scaleY: isHovered ? 20 : 1,
          scaleX: isHovered ? 4 : 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <path
          d="M2.5000036,72.0594177c-0.0011363-0.8999557,0.3568032-1.7635193,0.9942605-2.3987045l44.1192322-44.1192322h-0.0011368  
          c0.636322-0.636322,1.4998817-0.9942608,2.3998413-0.9942608c0.8999557,0,1.7635193,0.3579388,2.3987045,0.9942608  
          l44.1192245,44.1192322c1.3022079,1.3283234,1.2919617,3.4589691-0.0238647,4.7746658  
          c-1.3158112,1.3146744-3.4452896,1.3260498-4.7746582,0.0238571L50.0122185,32.7398491L8.2928247,74.4592361  
          c-0.9703808,0.9703827-2.4305282,1.2601395-3.6974978,0.7351761c-1.268106-0.524971-2.0953057-1.7623825-2.0953057-3.1349258  
          L2.5000036,72.0594177z"
          fill="#28a745"
        />
      </motion.svg>

      <div className={styles.content}>
        <p>Net Profit</p>
        <p>267M AED</p>
        <p>5%</p>
      </div>
    </motion.div>
  );
};

export default FinancialItem;
