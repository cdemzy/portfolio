"use client";
import Intro from "./components/Intro"
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import Education from "./components/Education";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Intro/>
      <Blog/>
      <Experience/>
      <Education/>
      <Connect/>
    </main>
  );
}
