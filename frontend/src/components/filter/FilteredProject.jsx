import React from "react";
import { BsCheckLg } from "react-icons/bs";

function FilteredProject({ project }) {
  return (
    <div
      className={`p-5 rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.15)_0px_9px_30px] w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]`}
    >
      <img
        src={project.thumbnail}
        alt="post image"
        className="w-full object-cover object-center h-auto md:h-53 lg:h-58 xl:h-61"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {project.title}
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          {project.description}
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex item-center gap-x-2 md:gap-x-2.5">
            <img
              src={project.creator.profile_image}
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {project.creator.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full ">
                  <BsCheckLg />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilteredProject;
