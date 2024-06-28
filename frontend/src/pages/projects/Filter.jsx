import React from "react";
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from "@nextui-org/react";

function Filter({ categories, difficulties, setCategories, setDifficulties }) {
  const handleCategoryChange = (values) => {
    setCategories(values);
  };

  const handleDifficultyChange = (value) => {
    setDifficulties(value);
  };
  const clearFilter = () => {
    setCategories([]);
    setDifficulties([]);
  };

  return (
    <section className="w-1/3 lg:w-1/5 h-screen border-r-1 border-black px-[4%]">
      <h2 className="text-2xl font-bold">Filters</h2>
      <div className="flex flex-col">
        <h4 className="text-lg text-gray-600 font-medium my-3">Project Category</h4>
        <div className="flex flex-col gap-2">
          <CheckboxGroup value={categories} onChange={handleCategoryChange} size="sm">
            <Checkbox value="web-development">Web Development</Checkbox>
            <Checkbox value="ai">AI</Checkbox>
            <Checkbox value="ml">Machine Learning</Checkbox>
            <Checkbox value="data-science">Data Science</Checkbox>
            <Checkbox value="app-development">App Development</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg text-gray-600 font-medium my-3">Difficulty Level</h4>
        <div className="flex flex-col gap-2">
          <CheckboxGroup value={difficulties} onChange={handleDifficultyChange} size="sm">
            <Checkbox value="beginner">Beginner</Checkbox>
            <Checkbox value="intermediate">Intermediate</Checkbox>
            <Checkbox value="advanced">Advanced</Checkbox>
            <Checkbox value="expert">Expert</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
      <button
        className="bg-primary text-white font-medium w-full py-1 mt-4 rounded-lg"
        onClick={clearFilter}
      >
        Clear Filters
      </button>
    </section>
  );
}

export default Filter;
