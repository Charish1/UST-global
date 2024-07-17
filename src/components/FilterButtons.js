import React from "react";

const FilterButtons = ({ setFilter, activeFilter }) => {
  const filters = [
    { name: "Acceptable", color: "#28a745" },
    { name: "Monitor", color: "#ffc107" },
    { name: "Alarm", color: "#dc3545" },
    { name: "Danger", color: "#ff073a" },
    { name: "No Status", color: "#6c757d" },
  ];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setFilter(filter.name.toLowerCase())}
          style={{
            backgroundColor:
              activeFilter === filter.name.toLowerCase() ? filter.color : "",
            color: activeFilter === filter.name.toLowerCase() ? "white" : "",
          }}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
