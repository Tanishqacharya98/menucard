import React, { useState, useEffect } from 'react';
import './Meal.css';

const Snacks = () => {
  const [selectedSnack, setSelectedSnack] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [mealOptions, setMealOptions] = useState({});
  const [showMealOptions, setShowMealOptions] = useState(false);
  const [selectedSnacksDay, setSelectedSnacksDay] = useState(null);
  const [selectedSnacksDayDetails, setSelectedSnacksDayDetails] = useState(null);
  const [selectedDaySnacksMeal, setSelectedDaySnacksMeal] = useState(null);
  const [activeTab, setActiveTab] = useState(); // Active Tab to manage meal types

  useEffect(() => {
    const mealOptions = getAllMeals();
    setMealOptions(mealOptions);
  }, []);

  const getData = {
    onePotMeal: {
      Poha: { description: "Light and tasty Poha" },
      Idli: { description: "Soft steamed Idlis" },
      Dosa: { description: "Crispy Dosa with chutney" },
      Rice: { description: "Steamed rice with curry" },
    },
  };

  const getAllMeals = () => {
    const mealOptions = {
      "Snacks": ["Almonds", "Oats", "Breakfast"],
    };
    return mealOptions;
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Get new suggestions based on query
    const mealOptions = getAllMeals();
    let newSuggestions = [];
    Object.keys(mealOptions).forEach(category => {
      mealOptions[category].forEach(meal => {
        if (meal.toLowerCase().includes(query)) {
          newSuggestions.push({ name: meal, category: category });
        }
      });
    });

    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.category === "Snacks") {
      setSelectedSnack(suggestion.name);
    }
    setSuggestions([]);
    setSearchQuery('');
  };

  const toggleMealOptions = () => {
    setShowMealOptions(prev => !prev);
  };

  const renderSelectedMeals = () => {
    if (selectedSnack) {
      return <p>You selected: {selectedSnack}</p>;
    } else {
      return <p>Please select a snack</p>;
    }
  };

  // Handle Day Click for selected Snacks
  const handleDayClick = (day) => {
    setSelectedSnacksDay(day);
    const mealTypes = Object.keys(getData);
    const randomMealType = mealTypes[Math.floor(Math.random() * mealTypes.length)];
    
    let meal, mealDetailsForDay;
    if (randomMealType === "onePotMeal") {
      const selectedMeal = getRandomMeal(getData[randomMealType]);
      meal = selectedMeal.name;
      mealDetailsForDay = selectedMeal.details;
    }

    setSelectedDaySnacksMeal(meal);
    setSelectedSnacksDayDetails(mealDetailsForDay);
  };

  const getRandomMeal = (mealCategory) => {
    const meals = Object.keys(mealCategory);
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    return { name: randomMeal, details: mealCategory[randomMeal] };
  };
// Function to handle tab switching
const toggleTab = (tab) => {
  setActiveTab(tab);
};
  return (
    <div className="snacks-container">
      {/* Tab Navigation */}
      <div onClick={() => toggleTab('Snacks')} className={`card ${activeTab === 'Snacks' ? 'active' : ''}`} style={{ height: showMealOptions || selectedSnacksDay ? '400px' : '250px' }}>
        <h2 onClick={toggleMealOptions}>Snacks</h2>
        <img src="assets/images/pancakes-2291908_1280.jpg" alt="Snacks" />
        

        {/* Meal Options Toggle */}
        {showMealOptions && (
          <div className="details-flex">
            <div className="snacks">
              <h3>Snacks</h3>
              <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Snacks" })}>
                <option value="">Select a Snack</option>
                <option value="Almonds">Almonds</option>
                <option value="Oats">Oats</option>
                <option value="Breakfast">Breakfast</option>
              </select>
            </div>
          </div>
        )}

        {/* Meal Search Bar Outside Meal Options */}
        {!showMealOptions && (
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search snack..."
            />
            {searchQuery && (
              <div className="suggestions">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion.name} ({suggestion.category})
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Display selected snack */}
        <div className="selected-meals">
          {renderSelectedMeals()}
        </div>

        {/* Meal Details */}
        {selectedSnacksDay && activeTab === 'Snacks' && (
            <div className="getMeal">
              <h3>{selectedSnacksDay} Meal</h3>
              <p>Meal: {selectedDaySnacksMeal}</p>
              <p>Details: {selectedSnacksDayDetails?.description}</p>
              {selectedSnacksDayDetails?.protein && (
                <p>Protein: {selectedSnacksDayDetails.protein.description}</p>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default Snacks;
