import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p>&copy; Copyght {new Date().getFullYear()} by RyZe Inc.</p>
      </footer>
    </div>
  );
}

export default SideBar;
