import React, { useState } from "react";
import styles from "./login.module.scss";

//icons
import { BiUser } from "react-icons/bi";
import { AiOutlineLock, AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

// alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// firebase register
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config.js";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const navigate = useNavigate();
  // firebase regiser
  function handleSubmit(event) {
    event.preventDefault();
    if (password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("회원가입에 성공 하였습니다.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  return (
    <>
      <ToastContainer />
      <div className={styles.login}>
        <div className={styles.login_content}>
          <div className={styles.login_img}>
            <img
              src="https://dcassetcdn.com/design_img/2062619/495414/495414_10969703_2062619_4fb97060_image.png"
              alt="user login"
            />
          </div>
          <div className={styles.login_forms}>
            <form className={`${styles.login_create} `} onSubmit={handleSubmit}>
              <h1 className={styles.login_title}>회원 가입</h1>

              <div className={styles.login_box}>
                <MdAlternateEmail />
                <input
                  autoComplete="off"
                  type="email"
                  placeholder="Email"
                  value={email}
                  className={styles.login_input}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <div className={styles.login_box}>
                <AiOutlineLock />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                  value={password}
                  className={styles.login_input}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.login_box}>
                <AiOutlineLock />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Confirm Password"
                  value={cpassword}
                  className={styles.login_input}
                  onChange={(e) => setCpassword(e.target.value)}
                />
              </div>
              <p className={styles.login_forgot}>Forgot Password?</p>
              <button type="submit" className={styles.login_button}>
                회원가입
              </button>

              <div>
                <p className={`${styles.login_account} ${styles.login_account__account}`}>
                  Already have an Account?
                </p>
                <Link
                  className={`${styles.login_signup} ${styles.login_signup__signup}`}
                  to="/login"
                >
                  로그인
                </Link>
              </div>

              <div className={styles.login_social}>
                <span className={`${styles.login_social} ${styles.login__icon}`}>
                  <AiFillGithub />
                </span>
                <span className={`${styles.login_social} ${styles.login__icon}`}>
                  <AiFillGoogleCircle />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
