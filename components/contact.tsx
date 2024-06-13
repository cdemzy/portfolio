"use client";

import React, { useState, FormEvent } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { validateEmail } from '@/lib/helper';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  // Form Fillup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  
  async function handleSignup (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(!name){
        setError("Please enter your name.");
        return;
    }
    if(!validateEmail(email)){
      setError("Please enter your email address.");
      return;
    }
  }

  const [submitResult, setSubmitError] = useState<string | null>(null);

  // Form submit
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("Sending...");
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);

    const accessKey = process.env.NEXT_PUBLIC_EMAIL_TOKEN;

    if (!accessKey) {
      console.error("Email token is not defined");
      setSubmitError("Send");
      setSubmitError("Error: Email token not defined");
      return;
    }

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitError("Sent!");
        event.currentTarget.reset();
        setTimeout(() => {
          setSubmitError("Send");
        }, 5000);
      } else {
        console.error("Error", data);
        setSubmitError(data.message);
        setSubmitError("Send");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitError("Error submitting form");
    }
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,38rem)] text-center scroll-mt-5 sm:scroll-mt-24 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <form
        className="flex flex-col p-4 border rounded-xl mt-10 gap-3 bg-white/80 dark:bg-[#2b303c] dark:border-white/20 dark:text-white/80 backdrop-blur-[0.05rem] dark:border-g-1 shadow-md"
        onSubmit={handleSubmit}
      >
        <label className="select-none font-medium text-xl">Contact Form</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="contact-input capitalize"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-input"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <textarea
          placeholder="Message"
          name="message"
          className="contact-input min-h-36 max-h-44 sm:min-h-64 sm:max-h-72"
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className="text-red-500 text-start text-sm">{error}</p>}
        <button
          type="submit"
          className="font-medium select-none rounded-lg bg-neutral-800 dark:bg-neutral-200 p-3 active:bg-L-2 hover:bg-L-1 dark:hover:bg-w-2 text-white dark:text-black/80"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
}
