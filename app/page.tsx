"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import ProjectsSection from "./projectSection";
import LandingPage from "./landingPage"; 

const Page = () => {
  return (
    <>
      <main>
        <LandingPage /> 
        <ProjectsSection />
      </main>
    </>
  );
};

export default Page;
