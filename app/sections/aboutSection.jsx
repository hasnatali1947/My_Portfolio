import React, { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import {
  css,
  figma,
  freeCodeCamp,
  github,
  html,
  jest,
  js,
  next,
  postgreSQL,
  rails,
  react,
  redux,
  ruby,
  mypic2,
  microverse,
  fire,
  circuit,
} from '../utilities/imports';

import { mousemove, mouseout } from '../utilities/magnetic';

const AboutSection = () => {
  const [SkillScroll, setSkillScroll] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.onChange((v) => {
      setSkillScroll(v * 1600);
    });
  }, [scrollYProgress]);

  return (
    <section className="aboutSection" id="aboutSectionId">
      <div className="aboutDiv">
        <h1>
          SOFTWARE <br />
          <span className="spread">DEVELOPER</span>
        </h1>
        <div className="Aboutcontainer">
          <div className="AboutDescription">
            <p>
              A highly skilled full-stack developer with expertise in{' '}
              <span className="spanlanguages">
                Html Css, React, Next.js, Node.js
              </span>{' '}
              and <span className="spanlanguages">Ruby on Rails.</span> I have
              developed real-world projects, including{' '}
              <span className="spanlanguages">Houses Reservation</span> and{' '}
              <span className="spanlanguages">Weather App</span>, with over 1
              year of experience in the field. These projects have allowed me to
              gain valuable experience and thrive in a fast-paced environment.
            </p>
          </div>
          <div
            className="MypicDiv"
            style={{ backgroundImage: `url(${mypic2.src})` }}
          ></div>
        </div>
      </div>

      <div className="about-blue-background-1"></div>
      <div className="about-blue-background-2"></div>

      <div className="MicroverseDiv2">
        <span className="span4 span">MICROVERSE</span>
        <a
          href="https://www.microverse.org/"
          target="_blank"
          rel="noreferrer"
          onMouseMove={mousemove}
          onMouseOut={mouseout}
        >
          <img
            className="skillsOnLanding microverseSkill2"
            src={microverse.src}
            alt="microverseIcon"
          />
        </a>
      </div>
      <div className="jsDiv2">
        <span className="span5 span">JS</span>
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noreferrer"
          onMouseMove={mousemove}
          onMouseOut={mouseout}
        >
          <img
            className="skillsOnLanding JsSkill2"
            src={js.src}
            alt="microverseIcon"
          />
        </a>
      </div>

      <h2>MY SKILL SET</h2>

      <div className="SkillContainer">
        <div className="skillMainDiv">
          <div className="topSkill">
            <div className="cssDiv">
              <span className="span CSS">CSS</span>
              <img className="cssicon" src={css.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Figma</span>
              <img src={figma.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">FreeCodeCamp</span>
              <img src={freeCodeCamp.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Github</span>
              <img src={github.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">HTML</span>
              <img src={html.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Jest</span>
              <img src={jest.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">JS</span>
              <img src={js.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma skillsSpan">Fast Learner</span>
              <img src={fire.src} alt="css" />
            </div>
          </div>
          <div className="bottomSkill">
            <div className="cssDiv">
              <span className="span Figma">Next.js</span>
              <img src={next.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">PostgreSQL</span>
              <img src={postgreSQL.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Rails</span>
              <img src={rails.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">React</span>
              <img src={react.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Redux</span>
              <img src={redux.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma EffectiveSkill">
                Effective Communicator
              </span>
              <img src={circuit.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Ruby</span>
              <img src={ruby.src} alt="css" />
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////// Mobile Skills/////////////////////////////////////////////// */}

      <div className="SkillContainerMoblie">
        <div
          className="skillMainDivMoblie"
          style={{ transform: `translateX(calc(-${SkillScroll}px + 1000px))` }}
        >
          <div className="topSkill">
            <div className="cssDiv">
              <span className="span CSS">CSS</span>
              <img className="cssicon" src={css.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Figma</span>
              <img src={figma.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">FreeCodeCamp</span>
              <img src={freeCodeCamp.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Github</span>
              <img src={github.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">HTML</span>
              <img src={html.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Jest</span>
              <img src={jest.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">JS</span>
              <img src={js.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Fast Learner</span>
              <img src={fire.src} alt="css" />
            </div>
          </div>
          <div className="bottomSkill">
            <div className="cssDiv">
              <span className="span Figma">Next.js</span>
              <img src={next.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">PostgreSQL</span>
              <img src={postgreSQL.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Rails</span>
              <img src={rails.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">React</span>
              <img src={react.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Redux</span>
              <img src={redux.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Effective Communicator</span>
              <img src={circuit.src} alt="css" />
            </div>
            <div className="cssDiv">
              <span className="span Figma">Ruby</span>
              <img src={ruby.src} alt="css" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
