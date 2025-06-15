"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { FormEvent } from "react";
import { useState } from "react";

const page = () => {
   const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 py-12 pt-36 relative">
      <Meteors number={80} />
      <h1 className="text-center text-white text-lg md:text-7xl text-bold">
        Contact Us
      </h1>
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit}  className="space-y-4 pt-10 flex flex-col gap-10">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
