import React, { useEffect, useState } from "react";

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

  const handleLinkHover = (link) => {
    setHoveredLink(link);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header
        style={{
          ...styles.header,
          top: showHeader ? 0 : "-100px",
        }}
      >
        <h2 style={styles.logo}>Idukki Heritage Farmstay</h2>
        <nav>
          <ul style={styles.navList}>
            {['home', 'about', 'contact'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link}`}
                  style={{
                    ...styles.navLink,
                    ...(hoveredLink === link && styles.navLinkHover)
                  }}
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

      
      {/* Hero Section */}
<section style={styles.hero} id="home">
  <div style={styles.overlay}>
    <h1 style={styles.title}>Idukki Heritage Farmstay</h1>
    <p style={styles.subtitle}>Escape to Kerala's soulful highlands</p>
    
    {/* WhatsApp Booking Button */}
    <a 
      href="https://wa.me/919847012345?text=Hello%20Idukki%20Heritage%20Farmstay,%20I%20would%20like%20to%20book%20a%20stay" 
      style={{
        display: 'inline-block',
        backgroundColor: '#25D366', // WhatsApp green
        color: 'white',
        padding: '12px 24px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '30px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        border: '2px solid white',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px)';
        e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
      }}
    >
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-10.446-7.42c-.083.124-.272.354-.37.475-.123.148-.247.148-.446.074-.198-.074-.836-.308-1.603-.587-.766-.28-1.42-.431-1.551-.458-.13-.025-.272-.037-.272-.111 0-.074.074-.174.124-.248.136-.173.595-.434.814-.558.297-.174.595-.26.893-.26.099 0 .198 0 .273.01.074.008.173.037.272.111.099.074.148.174.248.297.099.124.173.26.248.347.075.099.149.174.025.347-.124.174-.248.372-.372.521-.124.149-.248.297-.347.446-.099.148-.02.272.074.397.095.124.42.533.9.923.595.49.932.647 1.115.708.099.05.198.025.273-.05.074-.074.372-.409.47-.548.099-.149.198-.124.347-.074.149.05.934.434 1.094.516.16.074.272.111.322.173.05.062.05.36-.074.545-.136.186-.058.694-.26 1.237-.578.543-.318.907-.487 1.012-.533.105-.05.198-.037.272.025.074.062.471.579.471 1.393 0 .814-.545 1.63-.558 1.63-.013 0-.105-.013-.223-.037" fill="currentColor"/>
        </svg>
        Book Now on WhatsApp
      </span>
      
      {/* Floating Kerala leaf decoration */}
      <span style={{
        position: 'absolute',
        right: '-15px',
        top: '-15px',
        fontSize: '40px',
        color: 'rgba(255,255,255,0.1)',
        transform: 'rotate(30deg)'
      }}>☘</span>
    </a>
  </div>
</section>

      {/* Welcome */}
      <section style={styles.section} id="about">
   <h4 style={{
  fontSize: "2.5rem",
  color: "#2e7d32", // Deep green reminiscent of Kerala's forests
  textAlign: "center",
  margin: "2rem 0",
  fontFamily: "'Noto Sans Malayalam', 'Manjari', sans-serif",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  position: "relative",
  padding: "1.5rem 0",
  background: "linear-gradient(to right, transparent, #f1f8e9, transparent)", // Light green backdrop
  borderRadius: "8px",
  border: "1px solid #e8f5e9", // Subtle green border
}}>
  <span style={{
    display: "block",
    position: "relative",
    zIndex: 1,
    padding: "0 2rem"
  }}>
    നമസ്കാരം!
    <div style={{
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100px",
      height: "3px",
      background: "#388e3c", // Natural green accent line
      borderRadius: "3px",
      boxShadow: "0 2px 4px rgba(0, 100, 0, 0.2)"
    }}></div>
  </span>
  
  {/* Decorative leaf elements */}
  <span style={{
    position: "absolute",
    top: "50%",
    left: "5%",
    fontSize: "1.5rem",
    transform: "translateY(-50%)",
    color: "#81c784", // Leaf green
    opacity: 0.6
  }}>☘</span>
  
  <span style={{
    position: "absolute",
    top: "50%",
    right: "5%",
    fontSize: "1.5rem",
    transform: "translateY(-50%) rotate(180deg)",
    color: "#81c784",
    opacity: 0.6
  }}>☘</span>
</h4>
        <p style={styles.text}>
          Welcome to our traditional Kerala farmhouse nestled in the misty hills of Idukki.
          Here, nature and heritage come together to offer you a soul-refreshing experience.
        </p>
      </section>

      {/* About Farmstay */}
      <section style={styles.imageTextSection}>
        <img
          src="https://t3.ftcdn.net/jpg/02/57/91/04/360_F_257910476_b8gOz265DhRrp5v1bln4ocrzTzcTpgRG.jpg"
          alt="Farm Stay"
          className="hover-shake"
          style={styles.imageLeft}
        />
        <div style={styles.textBlock}>
          <h2>About Our Farmstay</h2>
          <p>
            Built over 100 years ago using traditional materials like clay, wood, and coconut thatch,
            our farmstay offers eco-friendly cottages, private verandas, and lush spice gardens.
          </p>
        </div>
      </section>

      {/* Traditional Food */}
      <section style={styles.imageTextSectionAlt}>
        <div style={styles.textBlock}>
          <h2>Authentic Kerala Cuisine</h2>
          <p>
            Enjoy home-cooked meals prepared with ingredients straight from our garden.
            Experience Kerala's flavors – from appam and stew to banana leaf feasts.
          </p>
        </div>
        <img
          src="https://t4.ftcdn.net/jpg/04/75/14/55/360_F_475145559_5yxMALNoLrUq2KmgkcUCcYpLR0zbfDaJ.jpg"
          alt="Kerala Food"
          className="hover-shake"
          style={styles.imageRight}
        />
      </section>

      {/* Gallery */}
     
<section style={styles.gallerySection}>
  <h2 style={styles.heading}>Visual Tour</h2>
  <div style={styles.gallery}>
    {[
      "https://tramptraveller.com/wp-content/uploads/2020/05/12015082602271956935.jpg", // Kerala backwaters
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Tea plantation
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Spices
      "https://tramptraveller.com/wp-content/uploads/2020/05/12015082602271956935.jpg", // Traditional house
      "https://tramptraveller.com/wp-content/uploads/2020/05/12015082602271956935.jpg", // Idukki landscape
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Kerala food
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Wildlife
      "https://cdn.pixabay.com/photo/2019/12/13/07/02/idukki-4692355_640.jpg", // Hill station
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", // Waterfalls
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"  // Cultural performance
    ].map((imgSrc, idx) => (
      <img
        key={idx}
        src={imgSrc}
        alt={`Gallery ${idx + 1}`}
        className="hover-shake"
        style={styles.galleryImg}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/280x180?text=Image+Not+Found";
        }}
      />
    ))}
  </div>
</section>

      {/* Local Experiences */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.heading}>Experience Idukki</h2>
        <ul style={styles.list}>
          <li>🌿 Spice plantation walks</li>
          <li>🧘 Morning yoga in the hills</li>
          <li>🎭 Cultural evenings with Kathakali</li>
          <li>🚶‍♂️ Trekking to waterfalls</li>
          <li>🌌 Stargazing nights</li>
        </ul>
      </section>

      {/* Location Map */}
      <section style={styles.section}>
        <h2 style={styles.heading}>📍 Our Location</h2>
        <div style={styles.mapContainer}>
          <iframe
            title="Adimali Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.2876858659165!2d76.952782!3d10.011504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079970f9dd117d%3A0xa79e8f70ec86986d!2sAdimali%2C%20Kerala%20685651%2C%20India!5e0!3m2!1sen!2sin!4v1686728505583!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer} id="contact">
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>📞 Contact Us</h2>
        <p>Phone: +91 98470 12345</p>
        <p>Email: idukkifarmstay@gmail.com</p>
        <p>Instagram: @idukkifarmstay</p>
        <p>&copy; 2025 Idukki Heritage Farmstay</p>
      </footer>

      <style>{`
        .hover-shake {
          transition: transform 0.3s ease;
        }

        .hover-shake:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Georgia, serif",
    backgroundColor: "#fffaf0",
    scrollBehavior: "smooth",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px 20px 20px",
    backgroundColor: "#003300",
    color: "white",
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1000,
    transition: "top 0.3s",
  },
  logo: {
    fontSize: "24px",
    marginLeft: "20px",
    transition: "transform 0.3s",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "25px",
    margin: 0,
    padding: 0,
    marginRight: "30px",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  navLinkHover: {
    backgroundColor: "#ffd700",
    color: "#003300",
    transform: "translateY(-2px)",
  },
  hero: {
    marginTop: "80px",
    backgroundImage:
      "url('https://wallpapers.com/images/hd/4k-forest-with-dirt-pathway-sssu9mpkfvsfewvs.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "60px",
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: "48px",
  },
  subtitle: {
    fontSize: "20px",
    fontStyle: "italic",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  sectionAlt: {
    backgroundColor: "#fff0e6",
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  heading: {
    fontSize: "30px",
    color: "#005200",
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#333",
    textAlign: "center",
  },
  list: {
    fontSize: "18px",
    paddingLeft: "30px",
    color: "#333",
  },
  imageTextSection: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "20px",
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  imageTextSectionAlt: {
    display: "flex",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    gap: "20px",
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  imageLeft: {
    width: "50%",
    borderRadius: "10px",
    minWidth: "280px",
  },
  imageRight: {
    width: "50%",
    borderRadius: "10px",
    minWidth: "280px",
  },
  textBlock: {
    flex: 1,
    minWidth: "280px",
  },
  gallerySection: {
    backgroundColor: "#f0fff5",
    padding: "60px 20px",
    textAlign: "center",
  },
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  },
  galleryImg: {
    width: "280px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "pointer",
  },
  mapContainer: {
    marginTop: "20px",
  },
  footer: {
    backgroundColor: "#003300",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
  },
};

export default HomePage;