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
                <li key={link.path} className="px-2 pb-2.5">
                    <Link href={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
      </nav>
    )
  }
  