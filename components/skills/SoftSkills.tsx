import React from 'react'

import { IoIosChatbubbles } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { IoSwapHorizontal } from "react-icons/io5";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";

export default function SoftSkills() {
    return (
        <ul className='grid grid-cols-3 gap-3 mt-10 text-start'>
            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoIosChatbubbles style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Communication</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Simplifying Complex Ideas for Better Understanding.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoIosPeople style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Collaboration</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Building Trust and Unity for Effective Collaboration.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoSwapHorizontal style={{ fontSize: "30pt"}}/></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Adaptability</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Navigating Ambiguity with Confidence and Resilience.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><IoExtensionPuzzleSharp style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Problem Solving</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Analytical Problem-Solving for Efficient Solutions.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><HiLightBulb style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Creativity</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Innovative Thinking for Unique Technical Solutions.</p>
                </div>
            </li>

            <li className='p-5 rounded-xl flex flex-col border bg-white/90 dark:border-g-1 dark:bg-g-2 backdrop-blur-[90px] h-[250px]'>
                <span className='flex-1'><FaClock style={{ fontSize: "30pt"}} /></span>
                <div className=''>
                    <h4 className='font-medium text-xl'>Time management</h4>
                    <p className='text-g-4 dark:text-secondary-d mt-2 text-sm'>Prioritizing Tasks for Efficient Workload Management.</p>
                </div>
            </li>
            
        </ul>
  )
}
