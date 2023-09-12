import React from "react";
import { contactimg, contactWhite } from './utilities/imports'

const contact = () => {
    return (
<>
        <section className="contactSection">
            <div>
                <h2>CONTACT</h2>
                <h4>I WOULD BE GLAD TO HEAR FROM YOU</h4>
            </div>
            <div className="contact-blue-background-1"></div>
            <div className="contact-blue-background-2"></div>
            <div className="formDiv">
                <form action="">
                    <div className="inputsimgDiv">
                        <img className="contactWhiteImg" src={contactWhite.src} alt="" />
                        <img className="contactimg" src={contactimg.src} alt="" />
                    
                    </div>
                    <div className="inputsDiv">
                        <input className="input" type="text" placeholder="FULL NAME" />
                        <input type="email" placeholder="EMAIL" />
                        <textarea placeholder="MESSAGE" name="" id=""></textarea>
                        <div className="box">
                            <span>SUBMIT</span>
                            <i></i>
                        </div>
                    </div>
                </form>
            </div>
        </section>
            <footer>
               <footer>
                <h4>HASNAT</h4>
                <ul>
                    <a className="a_tag" href="https://docs.google.com/document/d/1IVhWvaHmA0EmR59zDbl8iizvOmerYMpAO1qFseMy0-o/edit?usp=sharing"><li>RESUME</li></a>
                    <a className="a_tag" href="https://www.linkedin.com/in/hasnattali/"><li>LINKEDIN</li></a>
                    <a className="a_tag" href="https://github.com/hasnatali1947"><li>GITHUB</li></a>
                </ul>
               </footer>
            </footer>
        </>
    )
}

export default contact;