'use client'
import { motion } from 'framer-motion'
import Intro from './components/Intro'
import Experience from './components/Experience'

const sections = [
	{ Component: Intro, key: 'intro' },
	{ Component: Experience, key: 'experience' },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      {sections.map(({ Component, key }, index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <Component />
        </motion.div>
      ))}
    </main>
  );
}
