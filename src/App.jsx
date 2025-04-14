import "./App.css";
import Advertisement from "./components/advertisement/Advertisement";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <main>
      <Hero />
      <Advertisement />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
