import React from "react";
// import { useClient } from 'next/client';
// import NameScroll from "./NameScroll";

const Page = () => {
  // useClient();
  return(
    <>
    <header>
      <nav>
        <ul className="headerLeft">
          <li>gmail
          {/* <Image src="/icons/Gmail.svg" alt="Gmail Logo" width={50} height={50} /> */}
          </li>
          <li>linkedIn</li>
          <li>github</li>
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

      <section className="projects">
        <h2>My Projects</h2>
        <p>witness the beauty of through our lens, <br /> as we showcase stunning landscaps that evoke <br /> wonder and appreciation for the environment.</p>
      
        <button>Left</button>
        <button>Right</button>
        <div>
        {/* <NameScroll /> */}
        </div>

      </section>

    </main>
    </>
  )
}

export default Page;