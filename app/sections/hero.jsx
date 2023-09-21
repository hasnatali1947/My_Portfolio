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

      // Select elements with class "landing_page"
      const scrollElements = document.querySelectorAll(".landing_page");

      scrollElements.forEach((el) => observer.observe(el));
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`.${sectionId}`);
    setIsMobileMenuOpen(false);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <>
      <header>
        <nav>
          <ul className="headerLeft">
            <li>
              <a className="a_tag" href="https://github.com/hasnatali1947"><img src={github.src} alt="GitHub Logo" /></a>
              <a className="a_tag" href="https://www.linkedin.com/in/hasnattali/"><img src={linkedin.src} alt="linkedin Logo" /></a>

            </li>
          </ul>
          <ul className="headerRight">
            <li onClick={toggleMobileMenu} className="mobMenu"><img src={MobMenu.src} alt="MobMenu" /></li>
            <li onClick={() => scrollToSection("projects")} className="headerProject headerRightDisktop">PROJECTS</li>
            <li onClick={() => scrollToSection("aboutSection")} className="headerAbout headerRightDisktop">ABOUT</li>
            <li onClick={() => scrollToSection("contactSection")} className="headerContact headerRightDisktop">CONTACT</li>
          </ul>
        </nav>
      </header>

      <section className="landing_page top">
        <div className="about-blue-background-hero"></div>
        <div className={`mobileMenu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={closeMobileMenu} className="Xicon">+</li>
            <li onClick={() => scrollToSection("projects")} className={`${isMobileMenuOpen ? 'open' : ''}`}>PROJECT</li>
            <li onClick={() => scrollToSection("aboutSection")}>ABOUT</li>
            <li onClick={() => scrollToSection("contactSection")}>CONTACT</li>
          </ul>

        </div>

        <img className="hasnatImage" src={Hasnat.src} alt="" />
        <h3>Hi, I&apos;m Hasnat<span role="img" aria-label="wave">🖐</span></h3>
        <img className="blueLine" src={blueLine.src} alt="blueLine" />
        <h1>
          Building digital <br /> products, brands, and <br /> experience.
        </h1>
        <p>
          a website <b>Full-Stack</b> developer <br /> Specialize in
          React and Ruby-On-Rails<br /> I bring ideas to life
        </p>
        <button onClick={() => scrollToSection("contactSection")} className="connectMe">CONNECT WITH ME</button>
        <button onClick={() => scrollToSection("contactSection")} className="TopButton"><img src={Gmail.src} alt="Gmail Logo" /></button>
        <a href="https://react.dev/"><img className="skillsOnLanding microverseSkill" src={react.src} alt="" /></a>
        <a href="https://nextjs.org/"><img className="skillsOnLanding freeCodeCampSkill" src={next.src} alt="" /></a>
      </section>
    </>
  )
}

export default LandingPage;