"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import ProjectsSection from "./projectSection";
import LandingPage from "./landingPage"; 
import AboutSection from "./aboutSection";
import Recommendations from "./recommendationSection"
import Contact from "./contactSection";

const Page = () => {
  return (
    <>
      <main>
        <LandingPage /> 
        <ProjectsSection />
        <AboutSection />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
};

export default Page;
