"use client";
import Intro from "./components/Intro"
import Experience from "./components/Experience";
import Connect from "./components/Connect";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Intro/>
      <Experience/>
      <Connect/>
    </main>
  );
}
