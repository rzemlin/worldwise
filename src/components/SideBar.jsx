import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of Cities</p>
      <footer className={styles.footer}>
        &copy; Copyght {new Date().getFullYear()} by RyZe Inc.
      </footer>
    </div>
  );
}

export default SideBar;
