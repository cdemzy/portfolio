"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/projects",
      title: "Projects",
    },
] as const;

  export default function Navigation() {
    const pathname = `/${usePathname().split("/")[1]}`;

    return (
      <nav>
        <ul className="flex flex-row border-b">
            {links.map((link) => (
                <li key={link.path} className="px-2">
                    <Link href={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
      </nav>
    )
  }
  