"use client";
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
             <HoverEffect items={projects} />
        </div>
        <div className="flex justify-center mt-20">
          <Link
            href="/courses"
            className="px-6 py-3 rounded-md border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition-colors duration-200 font-medium"
            aria-label="View All Courses"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export const projects = [
  {
    title: "SoundScape",
    description:
      "A cutting-edge digital audio workstation (DAW) designed for music producers to create, edit, and mix professional-grade tracks.",
    link: "https://soundscape.com",
  },
  {
    title: "BeatFlow",
    description:
      "An intuitive beat-making platform offering a wide range of virtual instruments, loops, and MIDI tools for producers of all levels.",
    link: "https://beatflow.com",
  },
  {
    title: "MixLab",
    description:
      "A powerful online mixing and mastering tool that helps artists polish their tracks with studio-quality effects and automation.",
    link: "https://mixlab.com",
  },
  {
    title: "LoopVerse",
    description:
      "A vast library of royalty-free loops and samples across multiple genres, curated for producers and sound designers.",
    link: "https://loopverse.com",
  },
  {
    title: "SynthWave",
    description:
      "A virtual synthesizer plugin offering a range of classic and modern synth sounds, perfect for electronic and cinematic music.",
    link: "https://synthwave.com",
  },
  {
    title: "CollabRoom",
    description:
      "A real-time collaboration platform where music producers and vocalists can co-create projects from anywhere in the world.",
    link: "https://collabroom.com",
  },
];

export default UpcomingWebinars;
