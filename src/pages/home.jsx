import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub, FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaFileAlt, FaTimes,
  FaLinkedin, FaWhatsapp
} from "react-icons/fa";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPython, SiDjango, SiDotnet, SiMysql } from "react-icons/si";
import heroImg from "../Assets/image.png";
import { DiJava } from "react-icons/di";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [modalProject, setModalProject] = useState(null);
  const typingRef = useRef(null);

  const projects = [
    { title: "AdminGuard", desc: "College security & exit management system using MERN stack." },
    { title: "CampusGuard", desc: "QR based campus access & vehicle monitoring system." },
    { title: "SMART HIRE", desc: "AI-based resume screening & job matching system using NLP." },
    // { title: "Club Management", desc: "Event & club management system using Django." },
  ];

  // Typing effect
  useEffect(() => {
    const el = typingRef.current;
    const texts = ["Full Stack Developer", ".NET ", "Web Enthusiast", "Problem Solver"];
    let i = 0, j = 0, del = false;

    const loop = () => {
      const text = texts[i];
      el.textContent = del ? text.substring(0, j--) : text.substring(0, j++);
      if (!del && j === text.length + 1) del = true;
      if (del && j === 0) { del = false; i = (i + 1) % texts.length; }
      setTimeout(loop, del ? 60 : 100);
    };
    loop();
  }, []);

  // Stars
  useEffect(() => {
    const stars = document.querySelector(".stars");
    stars.innerHTML = "";
    for (let i = 0; i < 200; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.width = s.style.height = Math.random() * 3 + "px";
      stars.appendChild(s);
    }
  }, []);

  // Scroll animation
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: 0.15 });
    document.querySelectorAll(".hidden").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      ["home","about","projects","contact"].forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY + 200 >= el.offsetTop) setActiveSection(id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id:"home", path:"#home", icon:<FaHome/>, label:"Home" },
    { id:"about", path:"#about", icon:<FaInfoCircle/>, label:"About" },
    { id:"projects", path:"#projects", icon:<FaProjectDiagram/>, label:"Projects" },
    { id:"contact", path:"#contact", icon:<FaEnvelope/>, label:"Contact" },
    { path:"/Assets/Arjun Manoj.pdf", icon:<FaFileAlt/>, label:"Resume", external:true },
  ];

  return (
    <div>
      <style>{`
        body { margin:0; background:#090A0F; color:white; font-family:Segoe UI; }
        html { scroll-behavior:smooth; }
        .stars { position:fixed; inset:0; z-index:-1; }
        .star { position:absolute; background:white; border-radius:50%; opacity:.8; }

        .github-corner {
          position: fixed; top: 20px; left: 20px; z-index: 50;
          background: rgba(0,0,0,.6); padding: 10px; border-radius: 50%;
        }
        .github-corner a { color: white; font-size: 28px; }

        .navbar { position:fixed; top:20px; right:20px; left:auto; z-index:999; }


        .nav-links {
          display:flex; gap:15px; list-style:none;
          background:rgba(0,0,0,.6); padding:10px 20px; border-radius:30px;
        }
        .nav-links a {
          color:white; text-decoration:none; padding:6px 12px; border-radius:20px;
          display:flex; gap:6px; align-items:center;
        }
        .nav-links a.active, .nav-links a:hover { background:rgba(179,136,255,.4); }

        .section {
          min-height:100vh; display:flex; flex-direction:column;
          justify-content:center; align-items:center; text-align:center; padding:40px;
        }

        .hero-content { display:flex; gap:40px; flex-wrap:wrap; align-items:center; justify-content:center; }
        .hero-img { max-width:350px; animation: float 3s ease-in-out infinite; }
        @keyframes float { 0%{transform:translateY(0)}50%{transform:translateY(-15px)}100%{transform:translateY(0)} }

        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; width:80%; max-width:900px; }
        .card { padding:30px; background:rgba(255,255,255,.05); border-radius:20px; cursor:pointer; transition:.3s; }
        .card:hover { transform:translateY(-10px); background:rgba(179,136,255,.15); }

        .hidden { opacity:0; transform:translateY(50px); transition:.8s; }
        .show { opacity:1; transform:translateY(0); }

        .modal-backdrop { position:fixed; inset:0; background:rgba(0,0,0,.7); display:flex; align-items:center; justify-content:center; z-index:100; }
        .modal { background:#111; padding:30px; border-radius:20px; max-width:400px; width:90%; position:relative; }
        .close-btn { position:absolute; top:10px; right:10px; cursor:pointer; }

        .skill-card {
          background: rgba(255,255,255,.06);
          border-radius: 16px;
          padding: 16px;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:8px;
        }
        .skill-card svg { font-size: 28px; color:#b388ff; }

        .contact-icons {
          display:flex;
          gap:30px;
          margin-top:20px;
          font-size:40px;
        }
        .contact-icons a {
          color:white;
          transition:.3s;
        }
        .contact-icons a:hover {
          color:#b388ff;
          transform:scale(1.2);
        }
      `}</style>

      <div className="stars"></div>

      {/* GitHub Corner */}
      <div className="github-corner">
        <a href="https://github.com/arjun81951" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>

      {/* NAV */}
      <nav className="navbar">
        <ul className="nav-links">
          {navItems.map((n,i)=>(
            <li key={i}>
              <a href={n.path} className={activeSection===n.id?"active":""} target={n.external?"_blank":undefined}>
                {n.icon} {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="section hero hidden">
        <div className="hero-content">
          <div>
            <h1>Hi 👋 I'm <span style={{color:"#b388ff"}}>Arjun Manoj</span></h1>
            <p ref={typingRef}></p>
          </div>
          <img className="hero-img" src={heroImg} alt="hero" />
        </div>
      </section>

      {/* ABOUT */}
     <section id="about" className="section hidden">
 <h2 style={{ color: "#b388ff" }}>About Me</h2>


  <div style={{ maxWidth: "900px", textAlign: "center", lineHeight: "1.8" }}>
    <p style={{ fontSize: "18px", marginBottom: "20px" }}>
      I’m <b>Arjun Manoj</b>, an MCA graduate and a passionate <b>Software Developer</b> with a strong focus on
      <b> Java and .NET Core development</b>. I enjoy building structured, scalable, and maintainable applications
      with clean architecture and good coding practices.
    </p>

    <p style={{ fontSize: "18px", marginBottom: "20px" }}>
      I have hands-on experience in building backend systems using <b>Java, .NET Core, ASP.NET Core, REST APIs</b>
      and working with databases like <b>MySQL and SQL Server</b>. I’m comfortable working with OOP concepts,
      MVC architecture, and layered application design.
    </p>


    <p style={{ fontSize: "18px" }}>
      I’m a quick learner, disciplined, and highly motivated to start my career as a <b>Java / .NET Developer</b>
      in a professional environment where I can improve my skills, contribute to real projects, and grow as
      a software engineer.
    </p>
</div>
       <h3 style={{ marginTop: "30px", color: "#b388ff" }}> Core Skills</h3>
        <div className="grid">
          <div className="skill-card"><SiDotnet /> .NET</div>
              <div className="skill-card"><DiJava /> <span>Java</span></div>
          <div className="skill-card"><SiPython /> Python</div>
          <div className="skill-card"><SiJavascript /> JavaScript</div>
          <div className="skill-card"><FaReact /> React</div>
          <div className="skill-card"><FaNodeJs /> Node.js</div>
          <div className="skill-card"><SiMongodb /> MongoDB</div>
         <div className="skill-card"><SiDjango /> Django</div>
      

          <div className="skill-card"><SiMysql /> MySQL</div>
          <div className="skill-card"><FaHtml5 /> HTML</div>
          <div className="skill-card"><FaCss3Alt /> CSS</div>
          <div className="skill-card"><FaGitAlt /> Git</div>
          

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section hidden">
    <h2 style={{ color: "#b388ff" }}>projects</h2>

        <div className="grid">
          {projects.map((p,i)=>(
            <div className="card" key={i} onClick={()=>setModalProject(p)}>
              {p.title}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section hidden">
        <h2>Contact</h2>
        <p>Email: arjunmanoj8643@gmail.com</p>
        <p>Phone: +91 7736457053</p>

        <div className="contact-icons">
          {/* <a href="https://github.com/arjun81951" target="_blank" rel="noreferrer"><FaGithub /></a> */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/917736457053" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
      </section>

      {/* MODAL */}
      {modalProject && (
        <div className="modal-backdrop" onClick={()=>setModalProject(null)}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <FaTimes className="close-btn" onClick={()=>setModalProject(null)} />
            <h2>{modalProject.title}</h2>
            <p>{modalProject.desc}</p>
          </div>
        </div>
      )}

    </div>
  );
}
