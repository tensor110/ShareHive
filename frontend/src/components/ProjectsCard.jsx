import React from 'react'
import {images} from '../constants' 
import { BsCheckLg } from 'react-icons/bs';

const ProjectCard = ({className}) => {
  return (
    <div className={`p-5 rounded-xl overflow-hidden  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]  ${className} `}>
        <img src={images.Post1Image} alt="post image" className='w-full object-cover object-center h-auto md:h-53 lg:h-58 xl:h-61' />
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>Future of Work</h2>
            <p className='text-dark-light mt-3 text-sm md:text-lg'>Majority of people will work in jobs that dont exist today.</p>
            <div className='flex justify-between flex-nowrap items-center mt-6'>
                <div className='flex item-center gap-x-2 md:gap-x-2.5'>
                  <img src={images.PostProfileImage} alt='post profile'
                   className='w-9 h-9 md:w-10 md:h-10'/>
                  <div className='flex flex-col'>
                    <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                      Venkat Raju
                    </h4>
                    <div className='flex items-center gap-x-2'>
                      <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full '>
                        <BsCheckLg />
                      </span>
                      <span className='italic text-dark-light text-xs md:text-sm'>Verified</span>

                    </div>
                  </div>
                </div>
                <span className='font-bold text-dark-light italic text-sm md:text-base'>02 May</span>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;