import React from "react";

const MachineList = ({ machines, filter }) => {
  const filteredMachines = machines.filter((machine) =>
    filter === "all"
      ? true
      : filter === "no status"
      ? !machine.status
      : machine.status === filter
  );

  return (
    <div className="machine-list">
      {filteredMachines.length > 0 ? (
        filteredMachines.map((machine) => (
          <div key={machine.id} className={`machine ${machine.status}`}>
            <h3>{machine.name}</h3>
            <p>Status: {machine.status || "No Status"}</p>
          </div>
        ))
      ) : (
        <p>No machines found for the selected filter.</p>
      )}
    </div>
  );
};

export default MachineList;
