// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, Login, Register } from "./pages";
import { Header, Footer, DropMenu } from "./components";
import styles from "./App.module.scss";
import Reset from "./pages/auth/Reset";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        {/* <DropMenu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
