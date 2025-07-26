import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Instagram, Star, Leaf, Mountain, Users, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import './App.css';
import heroImage from '../images/1.jpg';


const ModernFarmstay = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);

  // WhatsApp chat link
  const whatsappLink = "https://wa.me/919847012345?text=Hello%20Idukki%20Heritage%20Farmstay,%20I%20would%20like%20to%20book%20a%20stay";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experiences', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional Kerala Architecture",
      category: "Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tea Plantation Views",
      category: "Landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Spice Garden",
      category: "Nature"
    },
    {
      src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional Kerala Cuisine",
      category: "Cuisine"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Waterfall Trek",
      category: "Adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cultural Performance",
      category: "Culture"
    }
  ];

  const experiences = [
    {
      icon: <Leaf className="experience-icon" />,
      title: "Spice Plantation Tours",
      description: "Walk through aromatic cardamom, pepper, and cinnamon plantations with expert guides."
    },
    {
      icon: <Mountain className="experience-icon" />,
      title: "Mountain Trekking",
      description: "Explore misty trails leading to breathtaking viewpoints and hidden waterfalls."
    },
    {
      icon: <Users className="experience-icon" />,
      title: "Cultural Immersion",
      description: "Experience authentic Kerala traditions, Kathakali performances, and local crafts."
    },
    {
      icon: <Calendar className="experience-icon" />,
      title: "Seasonal Activities",
      description: "Monsoon photography, harvest festivals, and stargazing sessions."
    }
  ];

  return (
    <div className="farmstay-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-content">
          <div className={`logo ${isScrolled ? 'logo-scrolled' : ''}`}>
            Idukki Heritage
          </div>
          
          <div className="nav-links">
            {['home', 'about', 'experiences', 'gallery', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'nav-link-active' : ''} ${isScrolled ? 'nav-link-scrolled' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>

          <button onClick={openWhatsApp} className="whatsapp-btn-nav">
            <MessageCircle className="whatsapp-icon" />
            WhatsApp Chat
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <img 
  src={heroImage}
  alt="Idukki Heritage Farmstay"
  className="hero-image"
/>

        <div className="hero-overlay" />
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Idukki Heritage
            </h1>
            <p className="hero-subtitle">
              A Sanctuary in Kerala's Mystical Highlands
            </p>
            <div className="hero-divider"></div>
          </div>
          
          <p className="hero-description">
            Discover tranquility in our century-old farmhouse, where traditional Kerala architecture meets modern comfort amidst spice-scented hills.
          </p>
          
          <div className="hero-buttons">
            <button onClick={openWhatsApp} className="whatsapp-btn-primary">
              <MessageCircle className="btn-icon" />
              Chat on WhatsApp
              <ArrowRight className="arrow-icon" />
            </button>
            
            <button onClick={() => scrollToSection('about')} className="btn-secondary">
              Explore More
            </button>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown className="bounce-icon" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">നമസ്കാരം</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Welcome to our heritage sanctuary, where over a century of stories whisper through ancient walls built with clay, wood, and Kerala's timeless craftsmanship.
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <div className="about-story">
                <h3 className="about-heading">Our Heritage Story</h3>
                <p className="about-paragraph">
                  Built over 100 years ago using traditional materials like clay, wood, and coconut thatch, our farmstay represents authentic Kerala architecture. Every corner tells a story of sustainable living in harmony with nature.
                </p>
                <div className="heritage-badge">
                  <Star className="star-icon" />
                  <span>Heritage Property Since 1920</span>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Years of Heritage</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5★</div>
                  <div className="stat-label">Guest Experience</div>
                </div>
              </div>
            </div>

            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Heritage Farmstay" 
                className="about-image"
              />
              <div className="image-badge">
                <Leaf className="badge-icon" />
                <div className="badge-text">Eco-Friendly</div>
                <div className="badge-subtext">100% Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="cuisine-section">
        <div className="container">
          <div className="cuisine-content">
            <div className="cuisine-image-container">
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kerala Cuisine" 
                className="cuisine-image"
              />
              <div className="cuisine-badge">
                <div className="badge-emoji">🌿</div>
                <div className="badge-text">Farm to Table</div>
                <div className="badge-subtext">Fresh Ingredients</div>
              </div>
            </div>

            <div className="cuisine-text">
              <h3 className="cuisine-heading">Authentic Kerala Flavors</h3>
              <p className="cuisine-description">
                Savor home-cooked meals prepared with ingredients straight from our organic garden. Experience the authentic taste of Kerala through traditional recipes passed down through generations.
              </p>
              
              <div className="cuisine-features">
                <div className="cuisine-feature">
                  <div className="feature-icon">
                    <span className="feature-emoji">🥥</span>
                  </div>
                  <div className="feature-content">
                    <div className="feature-title">Traditional Breakfast</div>
                    <div className="feature-subtitle">Appam, Puttu, and Fresh Coconut</div>
                  </div>
                </div>
                
                <div className="cuisine-feature">
                  <div className="feature-icon">
                    <span className="feature-emoji">🍛</span>
                  </div>
                  <div className="feature-content">
                    <div className="feature-title">Sadya Feast</div>
                    <div className="feature-subtitle">Traditional Banana Leaf Meals</div>
                  </div>
                </div>
              </div>

              <button onClick={openWhatsApp} className="whatsapp-btn-cuisine">
                <MessageCircle className="btn-icon" />
                Ask About Our Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="experiences-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Immersive Experiences</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Connect with nature and culture through carefully curated experiences that showcase the authentic essence of Idukki.
            </p>
          </div>

          <div className="experiences-grid">
            {experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <div className="experience-icon-container">
                  {experience.icon}
                </div>
                <h4 className="experience-title">{experience.title}</h4>
                <p className="experience-description">{experience.description}</p>
              </div>
            ))}
          </div>

          <div className="experiences-cta">
            <button onClick={openWhatsApp} className="whatsapp-btn-experiences">
              <MessageCircle className="btn-icon" />
              Plan My Experience
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visual Journey</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Glimpses of serenity and beauty awaiting your discovery
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <div className="gallery-category">{image.category}</div>
                    <div className="gallery-alt">{image.alt}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Find Your Sanctuary</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Nestled in the heart of Idukki's mystical landscapes
            </p>
          </div>

          <div className="map-container">
           <iframe
  title="RM Hill Top Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0058082039604!2d77.0072088!3d9.933473600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07bd00310a6eb3%3A0x6b1e91d34b68dd40!2sR%20M%20Hill%20Top!5e0!3m2!1sen!2sin!4v1753075776524!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header contact-header">
            <h2 className="section-title contact-title">Begin Your Journey</h2>
            <div className="section-divider contact-divider"></div>
            <p className="section-description contact-description">
              Ready to experience the magic of Kerala's heritage hospitality? We're here to make your stay unforgettable.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone className="contact-icon-svg" />
              </div>
              <h4 className="contact-card-title">Call Us</h4>
              <p className="contact-card-info">+91 98470 12345</p>
              <p className="contact-card-sub">Available 24/7</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail className="contact-icon-svg" />
              </div>
              <h4 className="contact-card-title">Email</h4>
              <p className="contact-card-info">idukkifarmstay@gmail.com</p>
              <p className="contact-card-sub">Quick Response</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Instagram className="contact-icon-svg" />
              </div>
              <h4 className="contact-card-title">Follow Us</h4>
              <p className="contact-card-info">@idukkifarmstay</p>
              <p className="contact-card-sub">Daily Updates</p>
            </div>
          </div>

          <div className="contact-cta">
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-title">Idukki Heritage Farmstay</div>
            <p className="footer-subtitle">Preserving traditions, creating memories since 1920</p>
            <div className="footer-location">
              <MapPin className="footer-icon" />
              <span>Adimali, Idukki, Kerala 685651</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Idukki Heritage Farmstay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button
      <button onClick={openWhatsApp} className="floating-whatsapp">
        <MessageCircle className="floating-icon" />
      </button> */}

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="modal-image"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="modal-close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernFarmstay;