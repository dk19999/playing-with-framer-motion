import { useState } from "react";
import styles from "./index.module.css";

const FinancialSection = () => {
  const [isShrinking, setIsShrinking] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [shrinkIndex, setShrinkIndex] = useState(-1);

  const handleMouseLeave = (index: number) => {
    setTimeout(() => {
    setIsShrinking(true);
    setShrinkIndex(index);
    }, 500);
  };

  const handleShrinkEnd = () => {
    setIsShrinking(false);
    setShrinkIndex(-1);
  };

  const financialData = [
    {
      title: "Revenue",
      value: "356M",
      currency: "AED",
      percentage: "5%",
      arrowUp: true,
    },
    {
      title: "Net Profit",
      value: "267M",
      currency: "AED",
      percentage: "5%",
      arrowUp: true,
    },
    {
      title: "Total assets",
      value: "1.3B",
      currency: "AED",
      percentage: "15%",
      arrowUp: true,
    },
    {
      title: "Total Equity",
      value: "1.1B",
      currency: "AED",
      percentage: "18%",
      arrowUp: true,
    },
    {
      title: "Market CAP",
      value: "3.6B",
      currency: "AED",
      percentage: "50%",
      arrowUp: true,
    }, {
      title: "Market CAP",
      value: "3.6B",
      currency: "AED",
      percentage: "50%",
      arrowUp: true,
    }
  ];

  const isHovered = (value: number) => {
    return hoveredIndex === value;
  };

  return (
    <div className={styles.financialGrid}>
      {financialData.map((item, index) => (
        <div
          key={index}
          className={styles.box}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.valueWrapper}>
              <div>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.currency}>{item.currency}</span>
              </div>
              <div>
                <span className={styles.percentage}>{item.percentage}</span>
              </div>
            </div>
          </div>
          <span
            className={`${styles.arrow} ${
              shrinkIndex === index
                ? styles.shrinkExpand
                : isHovered(index)
                ? styles.hovered
                : ""
            }`}
            onAnimationEnd={handleShrinkEnd}
          />
          <span
            style={isShrinking ? { display: "none" } : {}}
            className={`${styles.arrowShadow} `}
          />
        </div>
      ))}
    </div>
  );
};

export default FinancialSection;
