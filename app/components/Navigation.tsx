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
    const liRefs = useRef<(HTMLLIElement | null)[]>([]);

    const activeIndex = links.findIndex((link) => link.path === pathname);
    const shouldAnimateHover =
      hoveredIndex !== null &&
      previousHoveredIndex !== null &&
      hoveredIndex !== previousHoveredIndex;
    const currentHoverIndex = hoveredIndex ?? previousHoveredIndex;

    const updateLinkRef = (el: HTMLElement | null, index: number) => {
      linkRefs.current[index] = el;
    };

    const updateLiRef = (el: HTMLLIElement | null, index: number) => {
      liRefs.current[index] = el;
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
      
      const handleResize = () => {
        calculateDimensions();
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
      calculateDimensions();
    }, [hoveredIndex, pathname]);

    return (
      <nav className="border-b border-border flex justify-end">
        <ul className="flex flex-row relative">
            {links.map((link, index) => (
                <li 
                    key={link.path}
                    ref={(el) => updateLiRef(el, index)}
                    className="pb-2.5"
                >
                    <Link 
                        ref={(el) => updateLinkRef(el, index)}
                        href={link.path}
                        className="block px-1 relative z-10"
                        onMouseEnter={() => {
                          setPreviousHoveredIndex(hoveredIndex ?? previousHoveredIndex);
                          setHoveredIndex(index);
                        }}
                        onMouseLeave={() => {
                          setPreviousHoveredIndex(hoveredIndex);
                          setHoveredIndex(null);
                        }}
                        style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                        <div
                            className={`px-2 py-1.25 rounded-lg transition-colors duration-200 ${
                                pathname === link.path 
                                    ? 'text-foreground' 
                                    : 'text-secondary-foreground hover:text-foreground'
                            }`}
                        >
                            {link.title}
                        </div>
                    </Link>
                </li>
            ))}
            
            <motion.div
                className="secondary-bg absolute hidden rounded-lg md:block"
                initial={false}
                animate={{
                    opacity: hoveredIndex !== null ? 1 : 0,
                    x: currentHoverIndex !== null && linkDimensions[currentHoverIndex] ? linkDimensions[currentHoverIndex].x : 0,
                    width: currentHoverIndex !== null && linkDimensions[currentHoverIndex] ? linkDimensions[currentHoverIndex].width : 0,
                    height: currentHoverIndex !== null && linkDimensions[currentHoverIndex] ? linkDimensions[currentHoverIndex].height : 0,
                    top: currentHoverIndex !== null && linkDimensions[currentHoverIndex] ? linkDimensions[currentHoverIndex].top : 0,
                }}
                transition={{
                    opacity: { duration: 0 },
                    x: shouldAnimateHover ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 },
                    width: { duration: 0 },
                    height: { duration: 0 },
                    top: { duration: 0 },
                }}
                style={{
                    zIndex: 1,
                }}
            />
            
            {activeIndex !== -1 && liRefs.current[activeIndex] && (
                <motion.div
                    className="absolute bottom-0 h-0.5 bg-foreground"
                    initial={false}
                    animate={{
                        x: liRefs.current[activeIndex]?.getBoundingClientRect().left - (liRefs.current[activeIndex]?.closest('ul')?.getBoundingClientRect().left || 0) || 0,
                        width: liRefs.current[activeIndex]?.getBoundingClientRect().width || 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 40
                    }}
                    style={{
                        zIndex: 1,
                    }}
                />
            )}
        </ul>
      </nav>
    )
  }
  
