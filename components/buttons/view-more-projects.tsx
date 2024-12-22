"use client";

import React from 'react'
import Link from "next/link";

export default function ViewMoreProjects(){
    return(
        <Link href="/projects" passHref>
        <button className="bg-gray-200 w-full p-4 mt-4 text-center border border-black/5 rounded-lg overflow-hidden sm:pr-8 hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/15 dark:hover:bg-white/20">
            View More
        </button>
        </Link>
    )
}