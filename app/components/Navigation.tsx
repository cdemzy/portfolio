"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

    return (
      <nav className="border-b border-border flex justify-end">
        <ul className="flex flex-row">
            {links.map((link) => (
                <li 
                    key={link.path} 
                    className={`px-2 pb-2.5 ${
                        pathname === link.path 
                            ? 'border-b-2 border-foreground' 
                            : 'border-b-2 border-transparent'
                    } transition-colors duration-200`}
                >
                    <Link 
                        href={link.path}
                        className={`${
                            pathname === link.path 
                                ? 'text-foreground' 
                                : 'text-secondary hover:text-foreground'
                        } transition-colors duration-200`}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
      </nav>
    )
  }
  