
import React, { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

import {
    css, figma, freeCodeCamp, github, hackerRank, html, jest, js, firebase, next, postgreSQL, rails, react,
    redux, ruby, mypic2, microverse, fire, express, circuit, mongoDB
} from "../utilities/imports"

const AboutSection = () => {

    const [SkillScroll, setSkillScroll] = useState(0)
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        scrollYProgress.onChange((v) => {
            setSkillScroll(v * 1600);
        });
    }, [scrollYProgress]);

    return (
        <section className="aboutSection" id="aboutSectionId">
            <div className="aboutDiv">

            <h1>SOFTWARE <br />DEVELOPER</h1>
            <div className="Aboutcontainer">
                <div className="AboutDescription">
                    <span>
                        A highly skilled full-stack developer with expertise in <span className="spanlanguages">Html Css, React, Next.js,</span> and <span className="spanlanguages">Ruby on Rails.</span> I have developed real-world projects such as working with supply chain management systems or car maintenance bidding systems etc. With over 3 years of working in this field, I have honed my abilities to thrive in a fast-paced environment.
                    </span>
                </div>

                <div className="MypicDiv">
                    <img className="Mypic" src={mypic2.src} alt="Mypic" />
                </div>
            </div>
            </div>

            <div className="about-blue-background-1"></div>
            <div className="about-blue-background-2"></div>
            <a href="https://www.microverse.org/" target="_blank"><img className="skillsOnLanding microverseSkill2" src={microverse.src} alt="microverseIcon" /></a>

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
                            <span className="span Figma">hackerRank</span>
                            <img src={hackerRank.src} alt="css" />
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
                            <span className="span Figma">Firebase</span>
                            <img src={firebase.src} alt="css" />
                        </div>
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
                            <span className="span Figma EffectiveSkill">Effective Communicator</span>
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

                <div className="skillMainDivMoblie" style={{ transform: `translateX(calc(-${SkillScroll}px + 1000px))` }}>
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
                            <span className="span Figma">hackerRank</span>
                            <img src={hackerRank.src} alt="css" />
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
                            <span className="span Figma">Firebase</span>
                            <img src={firebase.src} alt="css" />
                        </div>
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
    )
}

export default AboutSection;