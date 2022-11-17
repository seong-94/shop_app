import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

//scss
import styles from "./Header.module.scss";

//icons
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdLogout, MdLogin } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

import Search from "./Search";
import { toast, ToastContainer } from "react-toastify";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Lss<span>Mall</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 돼었습니다.");
        navigate("/");
      })
      .catch((error) => {
        toast.success(error.message);
        // An error happened.
      });
  };

  return (
    <header>
      <ToastContainer />
      <div className={styles.header}>
        {logo}

        <nav className={showMenu ? `${styles.show_nav}` : `${styles.hide_nav}`}>
          <div
            className={
              showMenu
                ? `${styles.nav_wrapper} , ${styles.show_nav_wrapper}`
                : `${styles.nav_wrapper}`
            }
            onClick={hideMenu}
          ></div>

          <ul onClick={hideMenu}>
            <li className={styles.logo_mobile}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <Search />
          </ul>
          <div className={styles.header_right} onClick={hideMenu}>
            <span className={styles.links}>
              <ul>
                <li>
                  <NavLink className={activeLink} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={logoutUser}>logout</NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to="/register">
                    <FiUserPlus />
                  </NavLink>
                </li>
                <li>
                  <NavLink className={activeLink} to="/order-history">
                    My Orders
                  </NavLink>
                </li>
              </ul>
            </span>
            {cart}
          </div>
        </nav>

        <div className={styles.menu_icon}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
}

export default Header;
