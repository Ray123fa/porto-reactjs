import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = ({ children }) => <div className="container mt-16 min-w-full left-0 right-0 text-black">{children}</div>;
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
