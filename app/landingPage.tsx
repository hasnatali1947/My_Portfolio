import React, { useEffect } from "react";
import {github, Gmail, linkedin, Hasnat, microverse, freeCodeCamp, MobMenu } from "./utilities/imports"
import "./globals.css"

const landingPage = () => {

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
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    
    return(
        <>
        <header>
        <nav>

          <ul className="headerLeft">
            <li>
                <a className="a_tag" href="https://github.com/hasnatali1947"><img src={github.src} alt="GitHub Logo" /></a>
                <a className="a_tags" href="hasnatking1947@gmail.com"><img src={Gmail.src} alt="Gmail Logo" /></a>
                <a className="a_tag" href="https://www.linkedin.com/in/hasnattali/"><img src={linkedin.src} alt="linkedin Logo" /></a>
            </li>
          </ul>
          <ul className="headerRight">
            <li className="mobMenu"><img src={MobMenu.src} alt="MobMenu" /></li>
            <li onClick={() => scrollToSection("projects")} className="headerProject headerRightDisktop">PROJECTS</li>
            <li onClick={()=> scrollToSection("aboutSection")} className="headerAbout headerRightDisktop">ABOUT</li>
            <li onClick={() => scrollToSection("contactSection")} className="headerContact headerRightDisktop">CONTACT</li>
          </ul>
        </nav>
      </header>
        <section className="landing_page top">
            <img className="hasnatImage" src={Hasnat.src} alt="" />
          <h3>Hi, I'm Hasnat Ali</h3>
          <h1>
            Building digital <br /> products, brands, and <br /> experience.
          </h1>
          <p>
            a Product Designer and Visual Developer in SF. <br /> Specialize in
            UI/UX Design, Responsive Web Design, <br /> and Visual Development
          </p>
          <button onClick={ ()=> scrollToSection("contactSection")} className="connectMe">CONNECT WITH ME</button>
          <button onClick={() => scrollToSection("top")} className="TopButton">TOP</button>
          <a href="https://www.microverse.org/"><img className="skillsOnLanding microverseSkill" src={microverse.src} alt="" /></a>
          
          <img className="skillsOnLanding freeCodeCampSkill" src={freeCodeCamp.src} alt="" />
        </section>
        </>
    )
}

export default landingPage;