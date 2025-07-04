// HomePage.jsx
import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkHover = (link) => setHoveredLink(link);
  const handleLinkLeave = () => setHoveredLink(null);

  return (
    <div className="container">
      <header className="header" style={{ top: showHeader ? 0 : "-100px" }}>
        <h2 className="logo">Idukki Heritage Farmstay</h2>
        <nav>
          <ul className="navList">
            {['home', 'about', 'contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={`navLink${hoveredLink === link ? ' navLinkHover' : ''}`}
                  onMouseEnter={() => handleLinkHover(link)}
                  onMouseLeave={handleLinkLeave}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="overlay">
          <h1 className="title">Idukki Heritage Farmstay</h1>
          <p className="subtitle">Escape to Kerala's soulful highlands</p>
          <a
            href="https://wa.me/919847012345?text=Hello%20Idukki%20Heritage%20Farmstay,%20I%20would%20like%20to%20book%20a%20stay"
            className="whatsappBtn"
          >
            <span className="btnContent">
              <svg>...</svg>
              Book Now on WhatsApp
            </span>
            <span className="leafDecoration">☘</span>
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <h4 className="malayalamWelcome">
          <span>
            നമസ്കാരം!
            <div className="underline"></div>
          </span>
          <span className="leafLeft">☘</span>
          <span className="leafRight">☘</span>
        </h4>
        <p className="text">
          Welcome to our traditional Kerala farmhouse nestled in the misty hills of Idukki...
        </p>
      </section>

      <section className="imageTextSection">
        <img src="image1.jpg" alt="Farm Stay" className="imageLeft hover-shake" />
        <div className="textBlock">
          <h2>About Our Farmstay</h2>
          <p>Built over 100 years ago...</p>
        </div>
      </section>

      <section className="imageTextSectionAlt">
        <div className="textBlock">
          <h2>Authentic Kerala Cuisine</h2>
          <p>Enjoy home-cooked meals...</p>
        </div>
        <img src="image2.jpg" alt="Kerala Food" className="imageRight hover-shake" />
      </section>

      <section className="gallerySection">
        <h2 className="heading">Visual Tour</h2>
        <div className="gallery">
          {["img1.jpg", "img2.jpg"].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="galleryImg hover-shake"
              onError={(e) => e.target.src = "placeholder.jpg"}
            />
          ))}
        </div>
      </section>

      <section className="sectionAlt">
        <h2 className="heading">Experience Idukki</h2>
        <ul className="list">
          <li>🌿 Spice plantation walks</li>
          <li>🧘 Morning yoga in the hills</li>
          <li>🎭 Cultural evenings</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="heading">📍 Our Location</h2>
        <div className="mapContainer">
          <iframe
            src="https://maps.app.goo.gl/vgfgT57hFht4tmsE7"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer className="footer" id="contact">
        <h2>📞 Contact Us</h2>
        <p>Phone: +91 98470 12345</p>
        <p>Email: idukkifarmstay@gmail.com</p>
        <p>Instagram: @idukkifarmstay</p>
        <p>&copy; 2025 Idukki Heritage Farmstay</p>
      </footer>
    </div>
  );
};

export default HomePage;
