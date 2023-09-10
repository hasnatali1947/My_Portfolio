import React from "react"
import img1 from "./assets/projectsImg/img1.png";
import img2 from "./assets/projectsImg/img2.png";
import img3 from "./assets/projectsImg/img3.png";
import img4 from "./assets/projectsImg/img4.png";

const ProjectsSection = () => {

    const scrollProject = [
        img1.src,
        img2.src,
        img3.src,
        img4.src,
      ];

    return(
        <section className="projects">
        <h2>My Projects</h2>
        <p>
          witness the beauty of through our lens, <br /> as we showcase
          stunning landscapes that evoke <br /> wonder and appreciation for
          the environment.
        </p>

        <div
          className="container"
        >
          {scrollProject.map((src) => (
            <div
              className="card"
              key={src}
               style={{
              
            backgroundImage: `url(${src})`
          }}
            ></div>
          ))}
        </div>
      </section>
    )
}

export default ProjectsSection;