import React, { useRef, useState } from 'react';

import {
  TVShow,
  WeatherApp,
  housesReservation,
  leaderboard,
  weeShareImg,
  arrowLeft,
  arrowRight,
} from '../utilities/imports';

const ProjectsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollIncrement = 300;

  const projectContainerRef = useRef(null);

  const scrollLeft = () => {
    if (projectContainerRef.current) {
      const container = projectContainerRef.current;
      const newPosition = scrollPosition - scrollIncrement;
      const minScrollPosition = 0;
      setScrollPosition(Math.max(newPosition, minScrollPosition));
      container.scrollLeft = Math.max(newPosition, minScrollPosition);
    }
  };

  const scrollRight = () => {
    if (projectContainerRef.current) {
      const container = projectContainerRef.current;
      const newPosition = scrollPosition + scrollIncrement;
      const maxScrollPosition = container.scrollWidth - container.clientWidth;
      setScrollPosition(Math.min(newPosition, maxScrollPosition));
      container.scrollLeft = Math.min(newPosition, maxScrollPosition);
    }
  };

  return (
    <section className="projects" id="projectsId">
      <div className="projects-top">
        <div onClick={scrollLeft} className="leftArrow">
          <img src={arrowLeft.src} alt="" />
        </div>
        <div className="headingsProjects">
          <h2>Latest Projects</h2>
          <p>
            witness the beauty of through our lens, <br /> as we showcase
            stunning landscapes that evoke <br /> wonder and appreciation for
            the environment.
          </p>
        </div>
        <div onClick={scrollRight} className="RightArrow">
          <img src={arrowRight.src} alt="" />
        </div>
      </div>

      <div className="project-container" ref={projectContainerRef}>
        <div className="projects-box porject-1">
          <img className="ProjectImgs" src={housesReservation.src} alt="" />
          <div className="projectDescription">
            <h4>Houses Reservation</h4>
            <p>
              Castop project is my first near real-work project experience. I
              proceeded to style the content focusing on a mobile-first
              approach.
            </p>
            <span>
              <b>TECH STACK:</b> React.js, Ruby on Rails
            </span>
            <div className="projectBtns">
              <a
                href="https://houses-reservation-frontend-xhhl.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seelive">SEE LIVE</button>
              </a>
              <a
                href="https://github.com/hasnatali1947/Houses_reservation-frontend"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <button className="btn seecode">SEE CODE</button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects-box">
          <img className="ProjectImgs" src={TVShow.src} alt="" />
          <div className="projectDescription">
            <h4>TV Show</h4>
            <p>
              This website displays a list of TV shows with likes and offers
              detailed pages for each show, complete with comment sections.
            </p>
            <span>
              <b>TECH STACK:</b> HTML5, CSS, JavaScript
            </span>
            <div className="projectBtns">
              <a
                href="https://ubdanam.github.io/TV-Show/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seelive">SEE LIVE</button>
              </a>
              <a
                href="https://github.com/hasnatali1947/TV-Show"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seecode">SEE CODE</button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects-box porject-1">
          <img className="ProjectImgs" src={weeShareImg.src} alt="" />
          <div className="projectDescription">
            <h4>WeeShare</h4>
            <p>
              Our platform, WeeShare, is designed to empower our users and
              provide them with the tools they need to succeed in the
              ever-changing world of social media.
            </p>
            <span>
              <b>TECH STACK:</b> Next.js, node.js, mongoose
            </span>
            <div className="projectBtns">
              <a
                href="https://weesharenextjs.smbdigitalzone.online/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seelive">SEE LIVE</button>
              </a>
              <a
                href="https://github.com/hasnatali1947/WeeShare_Frontend"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <button className="btn seecode">SEE CODE</button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects-box">
          <img className="ProjectImgs" src={WeatherApp.src} alt="" />
          <div className="projectDescription">
            <h4>Weather-App</h4>
            <p>
              This is a weather app project where users can check the weather
              for cities all over the world.
            </p>
            <span className="Tech-stack">
              <b>TECH STACK:</b> HTML5, CSS, React, Redux
            </span>
            <div className="projectBtns">
              <a
                href="https://weather-app-57lg.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seelive">SEE LIVE</button>
              </a>
              <a
                href="https://github.com/hasnatali1947/Weather-App"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seecode">SEE CODE</button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects-box">
          <img className="ProjectImgs" src={leaderboard.src} alt="" />
          <div className="projectDescription">
            <h4>Leaderboard</h4>
            <p>
              The leader-board website shows player scores and lets you submit
              your own, using an external Leader-board API service to store the
              data.
            </p>
            <span>
              <b>TECH STACK:</b> HTML5, CSS, JavaScript
            </span>
            <div className="projectBtns">
              <a
                href="https://hasnatali1947.github.io/Leaderboard/dist"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seelive">SEE LIVE</button>
              </a>
              <a
                href="https://github.com/hasnatali1947/Leaderboard"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn seecode">SEE CODE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
