import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//scss file
import styles from "./login.module.scss";
// firebase getAuth
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config.js";

// icons
import { BiUser } from "react-icons/bi";
import { AiOutlineLock, AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

// alerts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  // switch loging to register form
  const [switchForm, setSwitchForm] = useState(false);

  // register data
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  // login data
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
        setSwitchForm(!switchForm);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  //firebase login
  function handleLoginSubmit(event) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("로그인 성공");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  //google login
  const provider = new GoogleAuthProvider();
  const signingWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("구글 로그인 성공");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.messages);
      });
  };

  // switchForm function
  const handleFormClick = () => {
    setSwitchForm(!switchForm);
  };
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
            {/* Login form*/}
            <form
              className={switchForm ? `${styles.none}` : `${styles.login_register}`}
              onSubmit={handleLoginSubmit}
            >
              <h1 className={styles.login_title}>로그인</h1>
              <div className={styles.login_box}>
                <BiUser />
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Email"
                  value={loginEmail}
                  className={styles.login_input}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className={styles.login_box}>
                <AiOutlineLock />
                <input
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  className={styles.login_input}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <Link className={styles.login_forgot} to="/reset">
                Forgot Password?
              </Link>

              <button type="submit" className={styles.login_button}>
                로그인
              </button>
              <div>
                <span className={`${styles.login_account} ${styles.login_account__account}`}>
                  Don't Have an Account?
                </span>
                <p
                  className={`${styles.login_signin} ${styles.login_signin__signup}`}
                  onClick={handleFormClick}
                >
                  Sign Up
                </p>
              </div>
              <div className={styles.login_social}>
                <span
                  className={`${styles.login_social} ${styles.login__icon}`}
                  onClick={signingWithGoogle}
                >
                  <AiFillGithub />
                </span>
                <span
                  className={`${styles.login_social} ${styles.login__icon}`}
                  onClick={signingWithGoogle}
                >
                  <AiFillGoogleCircle />
                </span>
              </div>
            </form>

            {/* Register form */}

            <form
              className={switchForm ? `${styles.login_create}` : `${styles.none}`}
              onSubmit={handleSubmit}
            >
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
              <div>
                <p>안녕하세여</p>
              </div>
              <p className={styles.login_forgot}>Forgot Password?</p>
              <button type="submit" className={styles.login_button}>
                회원가입
              </button>

              <div>
                <span className={`${styles.login_account} ${styles.login_account__account}`}>
                  Already have an Account?
                </span>
                <p
                  className={`${styles.login_signup} ${styles.login_signup__signup}`}
                  onClick={handleFormClick}
                >
                  로그인
                </p>
              </div>

              <div className={styles.login_social}>
                <span
                  className={`${styles.login_social} ${styles.login__icon}`}
                  onClick={signingWithGoogle}
                >
                  <AiFillGithub />
                </span>
                <span
                  className={`${styles.login_social} ${styles.login__icon}`}
                  onClick={signingWithGoogle}
                >
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

export default Login;
