import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [email, setEmail] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_content}>
        <div className={styles.login_reset}>
          <img
            src="https://storage.jukeboxprint.com/s/images/public/email/forgot-password.png"
            alt="Reset Password"
            width="400"
          />
        </div>

        <div className={styles.login_forms}>
          <form onSubmit={resetPassword} className={styles.login_create}>
            <h1 className={styles.login_title}>패스워드 초기화</h1>
            <div div className={styles.login_box}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                className={styles.login_input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.login_button}>
              Reset Password
            </button>
            <div className={`${styles.login_signup} ${styles.login_signup__reset}`}>
              <Link to="/login">로그인</Link>
              <Link to="/register">회원가입</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
