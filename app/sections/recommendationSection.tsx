import React, { useEffect, useState } from "react"
import { cursor, shayan, mercy } from "../utilities/imports"
import { useScroll } from "framer-motion";

const recommendation = () => {

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
            transform: `translateX(calc(-${scrollYPosition}px + 1250px ))`,}}>
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
                        <p>Hasnat Ali is a great web developer who is highly committed to his work. His knowledge in web technologies is just exceptional. I worked with him and he was always dedicated to writing clean code.</p>
                        <div className="shayanimgdiv">
                            <img className="shayanImg" src={shayan.src} alt="ShayanImg" />
                            <div>
                                <h3>Rose Mutai</h3>
                                <span>Full Stack Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default recommendation;