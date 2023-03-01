import Header from "./components/Header";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Portfolio from "./components/Portfolio";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  )
}
