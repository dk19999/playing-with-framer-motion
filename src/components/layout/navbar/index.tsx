import styles from './index.module.css';
import { FaAngleDown } from "react-icons/fa";
import { FaSearch, FaCaretUp, FaCaretDown, fa } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
    <div className={styles.navbar}>
      <div className={styles.group}>
      <div className={styles.navLinks}>
        <a href="#" className={`${styles.navItem} ${styles.navItemHome}`}>Home</a>
        <a href="#" className={`${styles.navItem} ${styles.navItemCourses}`}>Courses <FaAngleDown /></a>
        <a href="#" className={`${styles.navItem} ${styles.navItemAbout}`}>About <FaAngleDown /></a>
        <a href="#" className={`${styles.navItem} ${styles.navItemForInvestors}`}>For Investors</a>
      </div>

      <div className={styles.searchBar}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" className={styles.searchInput} placeholder="Search" />
      </div>
      </div>
      <div className={styles.group}>
      <div className={styles.stockInfo}>
        <span>2.94 <span>AED</span> / +0.00% <FaCaretUp color='#D2EA8E' /></span>
      </div>

      <button className={styles.registerButton}>Register or Log in</button>

      <div className={styles.languageToggle}>
        <span>En</span> <FaAngleDown />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
