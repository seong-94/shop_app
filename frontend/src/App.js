// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Contact } from "./pages";
import { Header, Footer } from "./components";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
