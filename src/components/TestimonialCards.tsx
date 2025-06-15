"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCards = () => {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      
      {/* Grid Background - behind everything */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask overlay - still behind main content */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Foreground content */}
      <div className="relative z-10 h-[35rem] w-full flex flex-col items-center justify-center overflow-hidden dark:bg-grid-white/[0.2]">
        
        {/* Heading - now clearly on top */}
        <div className="flex items-center justify-center text-4xl font-bold mb-7">
          <h1 className="px-6 py-3 bg-white dark:bg-black rounded-md shadow-md">
            Resonating Success: Artist Voices
          </h1>
        </div>

        {/* Cards */}
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

const testimonials = [
  {
    quote:
      "Working with this team transformed our sound completely. They understood our vision and brought it to life with incredible precision and creativity. The production quality exceeded all our expectations.",
    name: "Sarah Chen",
    title: "Lead Vocalist, Midnight Echo",
  },
  {
    quote:
      "From pre-production to final mix, every step was handled with professional excellence. They captured the raw energy of our live performance while adding that polished studio magic we were looking for.",
    name: "Marcus Rodriguez",
    title: "Drummer, Steel Phoenix",
  },
  {
    quote:
      "The attention to detail is unmatched. They helped us find our unique sound and guided us through the entire recording process with patience and expertise. Our album sounds exactly how we dreamed it would.",
    name: "Emma Thompson",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "Their state-of-the-art equipment combined with years of experience created the perfect environment for creativity. The team's collaborative approach made the whole process enjoyable and stress-free.",
    name: "David Park",
    title: "Producer, Indie Collective Records",
  },
  {
    quote:
      "They don't just record music, they craft sonic experiences. The mix they delivered was radio-ready and captured every nuance of our performance. Absolutely brilliant work from start to finish.",
    name: "Lisa Morgan",
    title: "Bassist, Urban Groove",
  },
];
