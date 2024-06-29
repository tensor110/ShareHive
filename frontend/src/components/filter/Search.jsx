import React from 'react'
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";

function Search({ searchQuery, onSearchChange}) {
  return (
    <div className="w-full px-2 my-2">
      <Input
          classNames={{
            base: "h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<CiSearch size={18} />}
          type="search"
          value={searchQuery}
          onChange={onSearchChange}
        />      
      </div>
  )
}

export default Search
