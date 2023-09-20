"use client";
import React from "react";
import "./styles/globals.css";
import ProjectsSection from "./sections/projectSection";
import Hero from "./sections/hero";
import AboutSection from "./sections/aboutSection";
import Recommendations from "./sections/recommendationSection"
import Contact from "./sections/contactSection";

const Page = () => {

  return (
    <>
      <main className="Pages">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
};

export default Page;
