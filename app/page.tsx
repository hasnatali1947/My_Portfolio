"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import ProjectsSection from "./sections/projectSection";
import LandingPage from "./sections/landingPage"; 
import AboutSection from "./sections/aboutSection";
import Recommendations from "./sections/recommendationSection"
import Contact from "./sections/contactSection";

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
