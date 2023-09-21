import React, { useEffect, useState } from "react"
import { cursor, shayan, mercy, Abbas } from "../utilities/imports"
import { useScroll } from "framer-motion";

const Recommendation = () => {

    const [scrollYPosition, setScrollYPosition] = useState();
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        scrollYProgress.onChange((v) => {
            setScrollYPosition(v * 1600);
        });
    }, [scrollYProgress]);

    return (
        <section className="recommendation_section" >
            <span className="recommendation_heading">DONT TAKE MY WORDS <span className="only">ONLY</span> <img className="cursorImg" src={cursor.src} alt="" /> </span>

            <div className="recommendationMainDiv" style={{
                transform: `translateX(calc(-${scrollYPosition}px + 1250px ))`,
            }}>
                <div className="recommendationDiv">
                    <div className="shayanRecommendation">
                        <p>Hasnat is an exceptional software developer known for his excellent collaborative skills. One of his standout qualities is his exceptional problem-solving approach, which sets him apart in the field.</p>
                        <div className="shayanimgdiv">
                            <img className="shayanImg" src={shayan.src} alt="ShayanImg" />
                            <div>
                                <h3>Shayan Ali Bakhsh</h3>
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recommendationDiv">
                    <div className="shayanRecommendation">
                        <p className="Recommendation-P">Hasnat is an outstanding software developer with a knack for collaboration. Among his skillset, I can guarantee that his problem-solving approach is top of the game.</p>
                        <div className="shayanimgdiv">
                            <img className="shayanImg" src={mercy.src} alt="ShayanImg" />
                            <div>
                                <h3>MERCY MUGAMBI</h3>
                                <span>Coding Partner</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="recommendationDiv">
                    <div className="shayanRecommendation">
                        <p>I&apos;ve had the privilege of working closely with Hasnat for 1 year, and I&apos;m consistently impressed by his web development skills. Hasnat is a highly talented and innovative developer who consistently delivers exceptional results.</p>
                        <div className="shayanimgdiv">
                            <img className="shayanImg" src={Abbas.src} alt="ShayanImg" />
                            <div>
                                <h3>Abbas Sarwar</h3>
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendation;