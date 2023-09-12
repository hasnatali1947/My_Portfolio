import React from "react";
import {github, Gmail, linkedin, Hasnat } from "./utilities/imports"

const landingPage = () => {

    const scrollToSection  = (sectionId) => {
        const section = document.querySelector(`.${sectionId}`);
       if(section){
        section.scrollIntoView({ behavior: "smooth" })
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
            <li onClick={() => scrollToSection("projects")}>PROJECTS</li>
            <li onClick={()=> scrollToSection("aboutSection")}>ABOUT</li>
            <li onClick={() => scrollToSection("contactSection")}>CONTACT</li>
          </ul>
        </nav>
      </header>
        <section className="landing_page">
            <img className="hasnatImage" src={Hasnat.src} alt="" />
          <h3>Hi, I'm Hasnat Ali</h3>
          <h1>
            Building digital <br /> products, brands, and <br /> experience.
          </h1>
          <p>
            a Product Designer and Visual Developer in SF. <br /> Specialize in
            UI/UX Design, Responsive Web Design, <br /> and Visual Development
          </p>
          <button>CONNECT WITH ME</button>
        </section>
        </>
    )
}

export default landingPage;