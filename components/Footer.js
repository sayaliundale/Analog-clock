import styles from '../styles/Footer.module.css';
import {FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img src="acmLogo.png" alt="logo" className={styles.logo} />
          <p>1234 Main St.</p>
          <p>Anytown, USA</p>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">ACM-India</a></li>
            <li><a href="#">Our Clubs</a></li>
            <li><a href="#">join ACM</a></li>
          </ul>
        </div>
        <div className={styles.column1}>
          <h3>Social Links</h3>
          <ul className={styles.socialLinks}>
          <li><a href="#"><FaYoutube/></a></li>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul>
        </div>
        <div className={styles.column3}>
          <h3>Contact Us</h3>
          <p>Call: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

