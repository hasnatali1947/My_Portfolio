import React, { useEffect, useState } from "react";
import { contactimg, contactWhite } from '../utilities/imports'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xknlznek");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {

        setName("")
        setEmail("")
        setMessage("")

        if (state.succeeded) {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        }

    }, [state.succeeded]);

    return (
        <>
            <section className="contactSection" id="contactSectionId">
                <div>
                    <h2>CONTACT</h2>
                    {showSuccessMessage ? (
                        <>
                            <h4>Thank you for your message!</h4>
                        </>
                    ) : (
                        <h4>I WOULD BE GLAD TO HEAR FROM YOU</h4>
                    )}
                </div>
                <div className="formDiv">
                    <form action="https://formspree.io/f/xknlznek" method="post" onSubmit={handleSubmit}>

                        <div className="inputsimgDiv">
                            <img className="contactWhiteImg" src={contactWhite.src} alt="FormWhiteBG" />
                            <img className="contactimg" src={contactimg.src} alt="FormImg" />
                        </div>

                        <div className="inputsDiv">
                            <input
                                className="input"
                                type="text"
                                name="name"
                                required
                                placeholder="NAME"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="EMAIL"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />

                            <textarea placeholder="MESSAGE" required name="message" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                            <button className="box" type="submit" disabled={state.submitting}>
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <footer>
                    <h4 className="footerH4">HAS<span className="N">N</span>AT</h4>
                    <ul>
                        <a className="a_tag" href="https://docs.google.com/document/d/1IVhWvaHmA0EmR59zDbl8iizvOmerYMpAO1qFseMy0-o/edit?usp=sharing" target="_blank" rel="noreferrer"><li>RESUME</li></a>
                        <a className="a_tag" href="https://www.linkedin.com/in/hasnattali/" target="_blank" rel="noreferrer"><li>LINKEDIN</li></a>
                        <a className="a_tag" href="https://github.com/hasnatali1947" target="_blank" rel="noreferrer"><li>GITHUB</li></a>
                    </ul>
                </footer>
            </footer>
        </>
    )
}

export default Contact;