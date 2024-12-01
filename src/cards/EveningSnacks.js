import React, { useState, useEffect } from 'react';
import './Meal.css';

const EveningSnacks = () => {
  const [selectedEveningSnack, setSelectedEveningSnack] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [mealOptions, setMealOptions] = useState({});
  const [showMealOptions, setShowMealOptions] = useState(false);

  useEffect(() => {
    const mealOptions = getAllMeals();
    setMealOptions(mealOptions);
  }, []);

  const getAllMeals = () => {
    const mealOptions = {
      "Evening Snacks": ["Dahi Vada", "Pasta", "Daliya"]
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
    if (suggestion.category === "Evening Snacks") {
      setSelectedEveningSnack(suggestion.name);
    }

    setSuggestions([]);
    setSearchQuery('');
  };

  const toggleMealOptions = () => {
    setShowMealOptions(prev => !prev);
  };

  const renderSelectedMeals = () => {
    if (selectedEveningSnack) {
      return <p>You selected: {selectedEveningSnack}</p>;
    } else {
      return <p>Please select an evening snack</p>;
    }
  };

  return (
    <>
      {/* <div className="meal-search-container"> */}
        {/* Meal Options Toggle */}
        <div className="card" style={{ height: showMealOptions ? '400px' : '250px' }}>
          <h2 onClick={toggleMealOptions}>Evening Snacks</h2>
          <img src="assets/images/fruitsalad.png" alt="Evening Snacks" />

         {/* Search Bar Outside Meal Options */}
         {!showMealOptions && (
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search evening snack..."
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

          {showMealOptions && (
            <div className="details-flex">
              {/* Evening Snack Selection */}
              <div className="evening-snacks">
                <h3>Evening Snacks</h3>
                <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Evening Snacks" })}>
                  <option value="">Select an Evening Snack</option>
                  <option value="Dahi Vada">Dahi Vada</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Daliya">Daliya</option>
                </select>
              </div>
            </div>
          )}
          
          {/* Display selected evening snack */}
          <div className="selected-meals">
            {renderSelectedMeals()}
          </div>

        </div>
      {/* </div> */}
    </>
  );
};

export default EveningSnacks;
