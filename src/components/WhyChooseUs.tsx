"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work seamlessly with your team in real time. Share ideas, edit documents, and accelerate decision-making for a more productive workflow.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Stay updated effortlessly. Our platform ensures you're always working on the latest version—no manual updates, no confusion, just smooth collaboration.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version Control
      </div>
    ),
  },
  {
    title: "Content Updates",
    description:
      "Never worry about outdated content again. Our system keeps everything fresh and aligned, so your workflow stays uninterrupted.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Content Updates
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;

