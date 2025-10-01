"use client";

// import Image from "next/image";
import BlogPic1 from "@/public/projects/notes/Cover.png"
import BlogPic2 from "@/public/projects/Cafe/cafe.png"

const blogPosts = [
  {
    id: 1,
    image: BlogPic1,
    title: "Notes App",
    description: "An open source project that I started to learn the aspects of full-stack development...",
  },
  {
    id: 2,
    image: BlogPic2, // You can import different images
    title: "Kyoto Cafe",
    description: "Creating a modern portfolio website using Next.js and TypeScript...",
  },
] as const;

export default function Blog() {
  return (
    <section className="index-section" id="blog">
        <h2>Blog</h2>
        <div className="relative overflow-hidden rounded-lg">

          {/* TODO: Delete this blur effect after blog posts are added */}
            <div className="blur-[4.5px] p-2">
                <ul className="grid grid-cols-2 gap-6">
                    {blogPosts.slice().reverse().map((post) => (
                        <li key={post.id} className="rounded-lg p-4 transition-colors duration-200 cursor-pointer">
                            {/* <Image
                                src={post.image}
                                alt={post.title}
                                className="rounded-lg mb-4 dark:bg-secondary-bg-dark"
                            /> */}
                            <p className="project-title font-semibold">{post.title}</p>
                            <p className="project-description text-secondary-foreground mb-2">{post.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-[1px] dark:backdrop-blur-sm rounded-lg">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Coming Soon...</h3>
                </div>
            </div>
        </div>
    </section>
  );
}
