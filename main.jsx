import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import Home from "./src/page/Home";
import Footer from "./src/components/Footer.jsx";
import Service from "./src/page/Service.jsx";
import Works from "./src/page/Works.jsx";
import About from "./src/page/About.jsx";
import Contact from "./src/page/Contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
     <Footer />
    </BrowserRouter>
  );
}

createRoot(document.querySelector("#root")).render(<App />);