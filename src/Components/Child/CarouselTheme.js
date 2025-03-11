import React, { useState } from "react";
import construction1 from '../../Assets/carousel_theme_1.1.png';
import construction2 from '../../Assets/carousel_theme_1.2.png';
import construction3 from '../../Assets/carousel_theme_1.3.png';
import architecture1 from '../../Assets/carousel_theme_2.1.png';
import architecture2 from '../../Assets/carousel_theme_2.2.png';
import architecture3 from '../../Assets/carousel_theme_2.3.png';
import interior1 from '../../Assets/carousel_theme_3.1.png';
import interior2 from '../../Assets/carousel_theme_3.2.png';
import interior3 from '../../Assets/carousel_theme_3.3.png';

const themeImages = {
  construction: [
    { image: construction1, title: "Building Progress", description: "Ongoing site construction." },
    { image: construction2, title: "Safety First", description: "Workers with protective gear." },
    { image: construction3, title: "Heavy Machinery", description: "Cranes lifting materials." },
  ],
  architecture: [
    { image: architecture1, title: "Modern Design", description: "A sleek architectural structure." },
    { image: architecture2, title: "Historical Charm", description: "Blending old and new styles." },
    { image: architecture3, title: "Urban Skyline", description: "Cityscape with creative buildings." },
  ],
  interior: [
    { image: interior1, title: "Cozy Living Room", description: "Minimalist interior decor." },
    { image: interior2, title: "Luxury Bedroom", description: "Elegant bedroom with soft lighting." },
    { image: interior3, title: "Kitchen Aesthetics", description: "Modern kitchen with stylish decor." },
  ],
};

const CarouselComp = () => {
  const [selectedTheme, setSelectedTheme] = useState("construction");
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = themeImages[selectedTheme];   //retrieves the array of images for the selected theme.



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <section className="carousel-section">
    <div className="carousel-container">

    <div className="carouseltheme-dropdown">
      <label>Select Theme: </label>
      <select
        onChange={(e) => {
          setSelectedTheme(e.target.value);
          setCurrentIndex(0); // Reset to first image on theme change
        }}
        value={selectedTheme}
      >
        {Object.keys(themeImages).map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
      </div>



      <div className="carousel">
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-content">
          {data.map((item, index) => (
            <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
              <img src={item.image} className="carousel-img" alt={item.title} />
              <div className="titles content-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
    </section>
  );
};

export default CarouselComp;
