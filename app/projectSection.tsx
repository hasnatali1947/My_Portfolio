import React from "react"
import img1 from "./assets/projectsImg/img1.png";
import img2 from "./assets/projectsImg/img2.png";
import img4 from "./assets/projectsImg/img4.png";
import leaderboard from "./assets/projectsImg/leaderboard.png";
import budgetApp from "./assets/projectsImg/budgetApp.png";

const ProjectsSection = () => {

    return (
        <section className="projects">
            <h2>Latest Projects</h2>
            <p>
                witness the beauty of through our lens, <br /> as we showcase
                stunning landscapes that evoke <br /> wonder and appreciation for
                the environment.
            </p>

            <div className="projects-container">
                <div className="projects-box">
                    <img className="ProjectImgs" src={img2.src} alt="" />
                    <div className="projectDescription">
                        <h4>Warrior Cars</h4>
                        <p>Castop project is my first near real-work project experience in which I set up a new Github repo, added files and configured code linters before ensuring that the git/github flows worked as expected. Then I proceeded to style the content focusing on a mobile-first approach.</p>
                        <div className="projectBtns">
                            <a href="https://hasnatali1947.github.io/Warrior-cars/"><button className="btn seelive">SEE LIVE</button></a>
                            <a href="https://github.com/hasnatali1947/Warrior-cars#-live-demo-"> <button className="btn seecode">SEE CODE</button></a>
                           
                        </div>
                    </div>
                </div>

                <div className="projects-box">
                    <img className="ProjectImgs" src={img1.src} alt="" />
                    <div className="projectDescription">
                        <h4>TV-Show</h4>
                        <p>This is a TV show list web app that fetches real time data from the server to show you TV shows list with number of likes. This project also includes a details page for the TV shows and comments added to each TV show.</p>
                        <div className="projectBtns">
                            <a href="https://ubdanam.github.io/TV-Show/"><button className="btn seelive">SEE LIVE</button></a>
                            <a href="https://github.com/hasnatali1947/TV-Show"><button className="btn seecode">SEE CODE</button></a>
                            
                        </div>
                    </div>
                </div>

                <div className="projects-box">
                    <img className="ProjectImgs" src={img4.src} alt="" />
                    <div className="projectDescription">
                        <h4>Weather-App</h4>
                        <p>This is a weather app project where users can check the weather for cities all over the world.</p>
                        <div className="projectBtns">
                            <a href="https://weather-app-57lg.onrender.com/"><button className="btn seelive">SEE LIVE</button></a>
                            <a href="https://github.com/hasnatali1947/Weather-App"><button className="btn seecode">SEE CODE</button></a>
                        </div>
                    </div>
                </div>

                <div className="projects-box">
                    <img className="ProjectImgs" src={leaderboard.src} alt="" />
                    <div className="projectDescription">
                        <h4>Leaderboard</h4>
                        <p>The leader-board website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leader-board API service.</p>
                        <div className="projectBtns">
                            <a href="https://hasnatali1947.github.io/Leaderboard/dist"><button className="btn seelive">SEE LIVE</button></a>
                            <a href="https://github.com/hasnatali1947/Leaderboard"><button className="btn seecode">SEE CODE</button></a>
                            
                        </div>
                    </div>
                </div>

                <div className="projects-box">
                    <img className="ProjectImgs" src={budgetApp.src} alt="" />
                    <div className="projectDescription">
                        <h4>Budget Apps</h4>
                        <p>Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.</p>
                        <div className="projectBtns">
                            <a href="https://rails-capston-web-service.onrender.com"> <button className="btn seelive">SEE LIVE</button></a>
                            <a href="https://github.com/hasnatali1947/rails_capston#live-demo"><button className="btn seecode">SEE CODE</button></a>
                        </div>
                    </div>
                </div>

                <div className="projects-box">
                    <img className="ProjectImgs" src={img1.src} alt="" />
                    <div className="projectDescription">
                        <h4>Project Name</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore dolores quaerat, alias consequuntur ut ullam perspiciatis ducimus ad, ex laborum</p>
                        <div className="projectBtns">
                            <a href="https://hasnatali1947.github.io/Calculator/dist/"><button className="btn seelive">SEE LIVE</button></a>
                            <a href="https://github.com/hasnatali1947/Calculator"><button className="btn seecode">SEE CODE</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;