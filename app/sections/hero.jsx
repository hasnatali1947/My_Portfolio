import React, { useEffect, useState } from "react";
import { github, Gmail, linkedin, Hasnat, blueLine, MobMenu, react, next } from "../utilities/imports"
import "../styles/globals.css"

const LandingPage = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("landing_page");
          } else {
            entry.target.classList.remove("landing_page");
          }
        });
      });

      const scrollElements = document.querySelectorAll(".landing_page");

      scrollElements.forEach((el) => observer.observe(el));
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    setIsMobileMenuOpen(false);

    if (section) {
      setTimeout(() => {
        console.log(1);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul className="headerLeft">
            <li>
              <a className="a_tag" href="https://github.com/hasnatali1947" target="_blank"><img src={github.src} alt="GitHub Logo" /></a>
              <a className="a_tag" href="https://www.linkedin.com/in/hasnattali/" target="_blank"><img src={linkedin.src} alt="linkedin Logo" /></a>

            </li>
          </ul>
          <ul className="headerRight">
            <li onClick={toggleMobileMenu} className="mobMenu"><img src={MobMenu.src} alt="MobMenu" /></li>
            <li><a href="#projectsId" onClick={(e) => { e.preventDefault(); scrollToSection("projectsId"); }} className="headerProject headerRightDisktop">PROJECTS</a></li>
            <li><a href="#aboutSectionId" onClick={(e) => { e.preventDefault(); scrollToSection("aboutSectionId"); }} className="headerAbout headerRightDisktop">ABOUT</a></li>
            <li><a href="#contactSectionId" onClick={(e) => { e.preventDefault(); scrollToSection("contactSectionId"); }} className="headerContact headerRightDisktop">CONTACT</a></li>
          </ul>
        </nav>
      </header>

      <section className="landing_page top">
        <div className="about-blue-background-hero"></div>
        <div className={`mobileMenu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={closeMobileMenu} className="Xicon">+</li>
            <li onClick={() => scrollToSection("projectsId")} className={`${isMobileMenuOpen ? 'open' : ''}`}>PROJECT</li>
            <li onClick={() => scrollToSection("aboutSectionId")}>ABOUT</li>
            <li onClick={() => scrollToSection("contactSectionId")}>CONTACT</li>
          </ul>

        </div>

        <img className="hasnatImage" src={Hasnat.src} alt="" />
        <h3>Hi, I&apos;m Hasnat<span role="img" aria-label="wave">🖐</span></h3>
        <h1>
         <div className="blueLineDiv">
          Building digital
          <div>
          <img className="blueLine" src={blueLine.src} alt="blueLine" />
          </div>
          </div> 
          products, brands, and <br /> experience.
        </h1>
        <p>
          a website <b>Full-Stack</b> developer <br /> Specialize in
          React and Ruby-On-Rails<br /> I bring ideas to life
        </p>
        <button onClick={() => scrollToSection("contactSection")} className="connectMe">CONNECT WITH ME</button>
        <button onClick={() => scrollToSection("contactSectionId")} className="TopButton"><img src={Gmail.src} alt="Gmail Logo" /></button>
        <a href="https://react.dev/" target="_blank"><img className="skillsOnLanding microverseSkill" src={react.src} alt="" /></a>
        <a href="https://nextjs.org/" target="_blank"><img className="skillsOnLanding freeCodeCampSkill" src={next.src} alt="" /></a>
      </section>
    </>
  )
}

export default LandingPage;