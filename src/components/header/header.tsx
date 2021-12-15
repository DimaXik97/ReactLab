import { FC } from "react";
import NavLink from "./navLink";

import appRoutes from "../../appRoutes";

import styles from "./header.module.scss";

type navItem = {
  link: string;
  label: string;
};

const navItem: navItem[] = [
  {
    label: "Home",
    link: appRoutes.Home,
  },
  {
    label: "About",
    link: appRoutes.About,
  },
  {
    label: "Products",
    link: appRoutes.Products,
  },
];

const Header: FC = () => (
  <header className={styles.headerWrapper}>
    <div className={styles.logo}>Best Games Market</div>
    <nav>
      <ul className={styles.menu}>
        {navItem.map((item) => (
          <NavLink key={item.link} to={item.link}>
            {item.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  </header>
);
export default Header;
