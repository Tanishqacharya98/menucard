import React from "react";
import "./style.css";

const MealBox = ({ type, activeDay, activeBox, setActiveBox, mealData, onManualMealAdd }) => {
  const currentMeals = mealData?.[type]?.[activeDay] || []; // Meals for the current day

  return (
    <div
      className={`meal-box ${activeBox === type ? "active" : ""}`}
      onClick={() => setActiveBox(type)} // Set this box as active on click
    >
      <h2>{type}</h2>

      {/* Always Show Card Content */}
      <div className="day-meals">
        <h4>Meals for {activeDay}:</h4>

        {/* Show meals only for the active card */}
        {activeBox === type ? (
          currentMeals.length > 0 ? (
            <ul>
              {currentMeals.map((meal, idx) => (
                <li key={idx}>{meal}</li>
              ))}
            </ul>
          ) : (
            <p>No meals for {activeDay}</p>
          )
        ) : (
          <p>Click on {type} to see its meals for {activeDay}</p>
        )}
      </div>
    </div>
  );
};

export default MealBox;
