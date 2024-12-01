import React, { useState } from 'react';
import './mix.css';

const MealPlanner = () => {
  const [activeMealCategory, setActiveMealCategory] = useState("");
  const [showAllMeals, setShowAllMeals] = useState(false);
  const [showSnacksMeal, setShowSnacksMeal] = useState(false);
  const [showLunchMeals, setShowLunchMeals] = useState(false);
  const [showEveningSnacks, setShowEveningSnacks] = useState(false);
  const [showDinner, setShowDinner] = useState(false);

  // Meal selections
  const [onePotMeal, setOnePotMeal] = useState("");
  const [separateCarb, setSeparateCarb] = useState("");
  const [separateProtein, setSeparateProtein] = useState("");
  const [parathaCarb, setParathaCarb] = useState("");
  const [parathaProtein, setParathaProtein] = useState("");

  const mealDetails = {
    onePotMeal: { calories: 200, grams: 100 },
    separateMeal: {
      rice: { calories: 130, grams: 50 },
      idli: { calories: 150, grams: 60 },
      chicken: { calories: 220, grams: 100 },
    },
    parathaAndGreens: {
      rice: { calories: 100, grams: 50 },
      chicken: { calories: 150, grams: 70 },
    },
  };

  // Toggle section visibility
  const handleToggleMeal = (mealType) => {
    setActiveMealCategory(mealType === activeMealCategory ? "" : mealType);
  };

  const handleToggleAllMeals = () => setShowAllMeals(!showAllMeals);
  const handleToggleSnacksMeal = () => setShowSnacksMeal(!showSnacksMeal);
  const handleToggleLunchMeals = () => setShowLunchMeals(!showLunchMeals);
  const handleToggleEveningSnacks = () => setShowEveningSnacks(!showEveningSnacks);
  const handleToggleDinner = () => setShowDinner(!showDinner);

  // Handlers for meal selections
  const handleOnePotMealChange = (e) => setOnePotMeal(e.target.value);
  const handleSeparateCarbChange = (e) => setSeparateCarb(e.target.value);
  const handleSeparateProteinChange = (e) => setSeparateProtein(e.target.value);
  const handleParathaCarbChange = (e) => setParathaCarb(e.target.value);
  const handleParathaProteinChange = (e) => setParathaProtein(e.target.value);

  return (
    <div>
      {/* Breakfast Section */}
      <div className="meal-category">
        <h1 onClick={handleToggleAllMeals}>Breakfast {showAllMeals ? "▼" : "▶"}</h1>
        {showAllMeals && activeMealCategory === "breakfast" && (
          <MealTabs
            onePotMeal={onePotMeal}
            handleOnePotMealChange={handleOnePotMealChange}
            separateCarb={separateCarb}
            handleSeparateCarbChange={handleSeparateCarbChange}
            separateProtein={separateProtein}
            handleSeparateProteinChange={handleSeparateProteinChange}
            parathaCarb={parathaCarb}
            handleParathaCarbChange={handleParathaCarbChange}
            parathaProtein={parathaProtein}
            handleParathaProteinChange={handleParathaProteinChange}
            mealDetails={mealDetails}
          />
        )}
      </div>

      {/* Snacks Section */}
      <div className="meal-category">
        <h1 onClick={handleToggleSnacksMeal}>Snacks {showSnacksMeal ? "▼" : "▶"}</h1>
        {showSnacksMeal && activeMealCategory === "snacks" && (
          <MealTabs
            onePotMeal={onePotMeal}
            handleOnePotMealChange={handleOnePotMealChange}
            mealDetails={mealDetails}
          />
        )}
      </div>

      {/* Lunch Section */}
      <div className="meal-category">
        <h1 onClick={handleToggleLunchMeals}>Lunch {showLunchMeals ? "▼" : "▶"}</h1>
        {showLunchMeals && activeMealCategory === "lunch" && (
          <MealTabs
            onePotMeal={onePotMeal}
            handleOnePotMealChange={handleOnePotMealChange}
            separateCarb={separateCarb}
            handleSeparateCarbChange={handleSeparateCarbChange}
            separateProtein={separateProtein}
            handleSeparateProteinChange={handleSeparateProteinChange}
            parathaCarb={parathaCarb}
            handleParathaCarbChange={handleParathaCarbChange}
            parathaProtein={parathaProtein}
            handleParathaProteinChange={handleParathaProteinChange}
            mealDetails={mealDetails}
          />
        )}
      </div>

      {/* Additional Sections: Evening Snacks, Dinner */}

      {/* Unified Display of Selected Meal */}
      <SelectedMealDetails
        activeTab={activeMealCategory}
        onePotMeal={onePotMeal}
        separateCarb={separateCarb}
        separateProtein={separateProtein}
        parathaCarb={parathaCarb}
        parathaProtein={parathaProtein}
        mealDetails={mealDetails}
      />
    </div>
  );
};

const MealTabs = ({
  onePotMeal, handleOnePotMealChange,
  separateCarb, handleSeparateCarbChange,
  separateProtein, handleSeparateProteinChange,
  parathaCarb, handleParathaCarbChange,
  parathaProtein, handleParathaProteinChange
}) => (
  <div className="tabs">
    {/* One-Pot Meal */}
    <div>
      <h2>One-Pot Meal</h2>
      <select value={onePotMeal} onChange={handleOnePotMealChange}>
        <option value="Rice">Rice</option>
        <option value="Idli">Idli</option>
        <option value="Dosa">Dosa</option>
      </select>
    </div>
    
    {/* Separate Meal */}
    <div>
      <h2>Separate Meal</h2>
      <select value={separateCarb} onChange={handleSeparateCarbChange}>
        <option value="">Select Carb</option>
        <option value="Rice">Rice</option>
        <option value="Idli">Idli</option>
      </select>
      <select value={separateProtein} onChange={handleSeparateProteinChange}>
        <option value="">Select Protein</option>
        <option value="Chicken">Chicken</option>
      </select>
    </div>

    {/* Paratha & Greens */}
    <div>
      <h2>Paratha & Greens</h2>
      <select value={parathaCarb} onChange={handleParathaCarbChange}>
        <option value="Rice">Rice</option>
      </select>
      <select value={parathaProtein} onChange={handleParathaProteinChange}>
        <option value="Chicken">Chicken</option>
      </select>
    </div>
  </div>
);

const SelectedMealDetails = ({
  activeTab, onePotMeal,
  separateCarb, separateProtein,
  parathaCarb, parathaProtein,
  mealDetails
}) => (
  <div className="active-meal">
    {activeTab === "onePotMeal" && onePotMeal && (
      <p>One-Pot Meal: {onePotMeal}</p>
    )}
    {activeTab === "separateMeal" && separateCarb && separateProtein && (
      <p>Separate Meal: {separateCarb} and {separateProtein}</p>
    )}
    {activeTab === "parathaAndGreens" && parathaCarb && parathaProtein && (
      <p>Paratha & Greens: {parathaCarb} and {parathaProtein}</p>
    )}
    {!activeTab && (
      <p>Please select a meal to see details</p>
    )}
  </div>
);

export default MealPlanner;
