"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import ProjectsSection from "./projectSection";
import LandingPage from "./landingPage"; 
import AboutSection from "./aboutSection";

const Page = () => {
  return (
    <>
      <main>
        <LandingPage /> 
        <ProjectsSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Page;
