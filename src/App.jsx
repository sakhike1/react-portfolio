import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  // Array of background images
  const backgroundImages = [
    "url('/src/assets/herobg1.png')",
    "url('/src/assets/herobg.png')",

  ];

  const [currentBgImage, setCurrentBgImage] = useState(backgroundImages[0]);

  useEffect(() => {
    // Function to change background image every 5 minutes (300,000ms)
    const interval = setInterval(() => {
      setCurrentBgImage((prevImage) => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % backgroundImages.length; // Loop back to first image
        return backgroundImages[nextIndex];
      });
    }, 10000); // 5 minutes

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div
          className='bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: currentBgImage }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
