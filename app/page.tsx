import React from "react";
import "./globals.css"
import github from "../assets/images/github.svg"
import Gmail from "../assets/images/Gmail.svg"
import linkedin from "../assets/images/linkedin.svg"

const Page = () => {
  return(
    <>

    <header>
      <nav>
        <ul className="headerLeft">
          <li>
            <img src={github.src} alt="GitHub Logo" />
            <img src={Gmail.src} alt="Gmail Logo" />
            <img src={linkedin.src} alt="linkedin Logo" />
          </li>
          </ul>
          <ul className="headerRight">
            <li>landing</li>
            <li>projects</li>
            <li>about me</li>
            <li>contact</li>
        </ul>
      </nav>
    </header>
    <main>
      <section className="landing_page">

        <h3>Hi, I'm Hasnat Ali</h3>
        <h1>Building digital <br /> products,brands,and <br /> experience.</h1>

        <p>a Product Designer and Visual Developer in SF. <br /> Ispeciallize in UI/UX Design, Responsive Web Design, <br /> and Visual Development</p>
        <button>CONNECT WITH ME</button>
      </section>

      {/* <section className="projects">
        <h2>My Projects</h2>
        <p>witness the beauty of through our lens, <br /> as we showcase stunning landscaps that evoke <br /> wonder and appreciation for the environment.</p>
      
        <button>Left</button>
        <button>Right</button>
        <div>
        </div>

      </section> */}
    </main>
    </>
  )
}

export default Page;