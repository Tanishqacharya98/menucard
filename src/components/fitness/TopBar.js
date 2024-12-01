import React from "react";

const TopBar = ({ activeDay, setActiveDay }) => {
  const days = ["Day 1", "Day 2", "Day 3"];
  return (
    <div className="top-bar">
      {days.map((day) => (
        <button
          key={day}
          className={activeDay === day ? "active" : ""}
          onClick={() => setActiveDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default TopBar;
