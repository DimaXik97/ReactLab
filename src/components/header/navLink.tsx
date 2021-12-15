import { FC } from "react";
import { NavLink as Link, useMatch, useResolvedPath } from "react-router-dom";

import styles from "./header.module.scss";

type NavLinkProps = {
  to: string;
};

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`${styles.menuItem} ${match ? styles.activeLink : ""}`}>
      <Link to={to}>{children}</Link>
    </li>
  );
};
export default NavLink;
