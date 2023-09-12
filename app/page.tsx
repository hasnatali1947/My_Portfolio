"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import ProjectsSection from "./projectSection";
import LandingPage from "./landingPage"; 
import AboutSection from "./aboutSection";
import Recommendations from "./recommendationSection"

const Page = () => {
  return (
    <>
      <main>
        <LandingPage /> 
        <ProjectsSection />
        <AboutSection />
        <Recommendations />
      </main>
    </>
  );
};

export default Page;
