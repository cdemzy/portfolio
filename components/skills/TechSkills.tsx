import React from 'react'

import { IoLayers } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoMdFingerPrint } from "react-icons/io";
import { GoServer } from "react-icons/go";


export default function TechSkills() {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-10'>
            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoLayers style={{ fontSize: "30pt"}}/></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Fullstack Development</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Mastering Both Client and Server-Side Technologies.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoCodeSlash style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Frontend Development</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Crafting User-Friendly and Responsive Web Interfaces.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><FaGamepad style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Game Development</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Experienced Developer, Crafting Interactive Games.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><FaPencil style={{ fontSize: "30pt"}}/></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>UI/UX Design</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Strategic Planning for Intuitive User Experiences.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoMdFingerPrint style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Information Security</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>
                        Applying Security Principles for Enhanced Protection.
                    </p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 backdrop-blur-[90px] h-[250px] dark:border-g-1 dark:bg-g-2'>
                <span className='flex-1'><GoServer style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Deployment & Hosting</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Efficient Deployment Strategies for Easy Hosting.</p>
                </div>
            </li>
            
        </ul>
  )
}
