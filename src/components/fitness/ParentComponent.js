import React, { useState } from "react";
import MealBox from "./MealBox";
import "./style.css";

const ParentComponent = () => {
  const [activeBox, setActiveBox] = useState("Breakfast"); // Default active box
  const [activeDay, setActiveDay] = useState("Day 1");

  const mealData = {
    Breakfast: {
      "Day 1": ["Oats", "Toast"],
      "Day 2": ["Smoothie", "Porridge"],
      "Day 3": []
    },
    Snacks: {
      "Day 1": ["Chips", "Fruit Salad"],
      "Day 2": ["Popcorn"],
      "Day 3": []
    }
  };

  const onManualMealAdd = (type, day, meal) => {
    mealData[type][day] = [...(mealData[type][day] || []), meal];
    alert(`Added ${meal} to ${type} on ${day}`);
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  return (
    <div>
      {/* Top Bar for Days */}
      <div className="top-bar">
        {["Day 1", "Day 2", "Day 3"].map((day) => (
          <button
            key={day}
            className={activeDay === day ? "active-day" : ""}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Meal Boxes */}
      <div className="meal-boxes-container">
        <MealBox
          type="Breakfast"
          activeDay={activeDay}
          activeBox={activeBox}
          setActiveBox={setActiveBox}
          mealData={mealData}
          onManualMealAdd={onManualMealAdd}
        />
        <MealBox
          type="Snacks"
          activeDay={activeDay}
          activeBox={activeBox}
          setActiveBox={setActiveBox}
          mealData={mealData}
          onManualMealAdd={onManualMealAdd}
        />
      </div>
    </div>
  );
};

export default ParentComponent;
