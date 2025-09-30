"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useLayoutEffect, useRef } from "react";

const links = [
    {
      path: "/",
      title: "Index",
    },
    {
      path: "/projects",
      title: "Projects",
    },
] as const;

  export default function Navigation() {
    const pathname = `/${usePathname().split("/")[1]}`;
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [previousHoveredIndex, setPreviousHoveredIndex] = useState<number | null>(null);
    const [linkDimensions, setLinkDimensions] = useState<Array<{x: number, width: number, height: number, top: number}>>([]);
    const linkRefs = useRef<(HTMLElement | null)[]>([]);

    const updateLinkRef = (el: HTMLElement | null, index: number) => {
      linkRefs.current[index] = el;
    };

    const calculateDimensions = () => {
      const dimensions = linkRefs.current.map((link) => {
        if (!link) return { x: 0, width: 0, height: 0, top: 0 };
        
        const rect = link.getBoundingClientRect();
        const container = link.closest('ul');
        const containerRect = container?.getBoundingClientRect();
        
        return {
          x: rect.left - (containerRect?.left || 0),
          width: rect.width,
          height: rect.height,
          top: rect.top - (containerRect?.top || 0)
        };
      });
      
      setLinkDimensions(dimensions);
    };

    useLayoutEffect(() => {
      calculateDimensions();
    }, []);

    useLayoutEffect(() => {
      calculateDimensions();
    }, [hoveredIndex]);

    return (
      <nav className="border-b border-border flex justify-end">
        <ul className="flex flex-row relative">
            {links.map((link, index) => (
                <li 
                    key={link.path} 
                    className={`px-1 pb-2.5 ${
                        pathname === link.path 
                            ? 'border-b-2 border-foreground' 
                            : 'border-b-2 border-transparent'
                    } transition-colors duration-200`}
                >
                    <Link 
                        ref={(el) => updateLinkRef(el, index)}
                        href={link.path}
                        className={`px-2 py-1.25 rounded-lg relative z-10 block ${
                            pathname === link.path 
                                ? 'text-foreground' 
                                : 'text-secondary-foreground hover:text-foreground'
                        } transition-colors duration-200`}
                        onMouseEnter={() => {
                          setPreviousHoveredIndex(hoveredIndex);
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          setPreviousHoveredIndex(hoveredIndex);
                          setHoveredIndex(null);
                        }}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
            
            <motion.div
                className="absolute bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: hoveredIndex !== null ? 1 : 0,
                    x: hoveredIndex !== null && linkDimensions[hoveredIndex] ? linkDimensions[hoveredIndex].x : (previousHoveredIndex !== null && linkDimensions[previousHoveredIndex] ? linkDimensions[previousHoveredIndex].x : 0),
                    width: hoveredIndex !== null && linkDimensions[hoveredIndex] ? linkDimensions[hoveredIndex].width : (previousHoveredIndex !== null && linkDimensions[previousHoveredIndex] ? linkDimensions[previousHoveredIndex].width : 0),
                    height: hoveredIndex !== null && linkDimensions[hoveredIndex] ? linkDimensions[hoveredIndex].height : (previousHoveredIndex !== null && linkDimensions[previousHoveredIndex] ? linkDimensions[previousHoveredIndex].height : 0),
                    top: hoveredIndex !== null && linkDimensions[hoveredIndex] ? linkDimensions[hoveredIndex].top : (previousHoveredIndex !== null && linkDimensions[previousHoveredIndex] ? linkDimensions[previousHoveredIndex].top : 0),
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
                style={{
                    zIndex: 1,
                }}
            />
        </ul>
      </nav>
    )
  }
  