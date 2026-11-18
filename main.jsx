import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import Home from "./src/page/Home";
import Footer from "./src/components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     <Footer />
    </BrowserRouter>
  );
}

createRoot(document.querySelector("#root")).render(<App />);