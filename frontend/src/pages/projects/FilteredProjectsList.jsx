import React, {useState} from "react";
import projectsData from "../../data/projects";
import FilteredProject from "./FilteredProject";
import Filter from "./Filter";

function FilteredProjects() {
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);

  const clearFilter = () => {
    setCategories([]);
    setDifficulties([]);
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      categories.length === 0 ||
      categories.some((category) => project.categories.includes(category));
    
    const matchesDifficulty =
      difficulties.length === 0 ||
      difficulties.includes(project.difficulty);

    return matchesCategory && matchesDifficulty;
  });
  return (
    <div className="flex">
      <Filter
        categories={categories}
        difficulties={difficulties}
        setCategories={setCategories}
        setDifficulties={setDifficulties}
      />
    <aside className="h-screen ml-[2%] w-3/5 lg:w-4/5">
      <h2 className="text-2xl font-bold mb-3">Filtered Projects</h2>
      <div className="flex flex-wrap justify-between">
        {filteredProjects.map((project, index) => (
          <FilteredProject key={index} project={project} />
        ))}
      </div>
    </aside>
    </div>
  );
}

export default FilteredProjects;
