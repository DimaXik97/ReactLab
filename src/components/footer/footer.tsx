import { FC } from "react";

import psIcon from "../../assets/images/playstationIcon.png";
import steamIcon from "../../assets/images/steamIcon.png";

import styles from "./footer.module.scss";

const Footer: FC = () => (
  <footer className={styles.footerWrapper}>
    <div>©Yurashevich 2021</div>
    <ul>
      <li>
        <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer">
          <img src={psIcon} alt="steam" />
          Steam
        </a>
      </li>
      <li>
        <a href="https://store.playstation.com/" target="_blank" rel="noreferrer">
          <img src={steamIcon} alt="ps" />
          PS Store
        </a>
      </li>
    </ul>
  </footer>
);
export default Footer;
