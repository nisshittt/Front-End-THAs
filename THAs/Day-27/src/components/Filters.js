import React from "react";
import visibilityFilters from "../constants/visibilityFilters";
import { ButtonGroup } from "./core/Buttons";
import FilterLink from "./FilterLink/withData";

const Filters = () => (
  <div className="mb-16">
    <span className="mr-8">Filter: </span>
    <ButtonGroup>
      {visibilityFilters.map(f => {
        return (
          <FilterLink key={f.filter} filter={f.filter}>
            {f.label}
          </FilterLink>
        );
      })}
    </ButtonGroup>
  </div>
);

export default Filters;
