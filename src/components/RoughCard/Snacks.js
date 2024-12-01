import React, { useState } from 'react';
import './Card.css';
import { snacksMealOptions} from './MealCard'; // Import meal options from the external file

const Snacks = () => {
  const [selectedSnack, setSelectedSnack] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showMealOptions, setShowMealOptions] = useState(false);

  // Handle search input and filter suggestions
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter suggestions based on query
    let newSuggestions = [];
    snacksMealOptions["Snacks"].forEach(snack => {
      if (snack.toLowerCase().includes(query)) {
        newSuggestions.push(snack);
      }
    });

    setSuggestions(newSuggestions);
  };

  // Handle when a suggestion is clicked
  const handleSuggestionClick = (snack) => {
    setSelectedSnack(snack);
    setSuggestions([]); // Clear suggestions after selection
    setSearchQuery(''); // Reset the search query
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

  return (
    <>
      {/* <div className="meal-search-container"> */}
        {/* Meal Options Toggle */}
        <div className="card" style={{ height: showMealOptions ? '400px' : '250px' }}>
          <h2 onClick={toggleMealOptions}>Snacks</h2>
          <img src="assets/images/pancakes-2291908_1280.jpg" alt="Snacks" />

          {/* Search Bar Outside Meal Options */}
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
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {showMealOptions && (
            <div className="details-flex">
              {/* Snack Selection */}
              <div className="snacks">
                <h3>Snacks</h3>
                <select onChange={(e) => handleSuggestionClick(e.target.value)}>
                  <option value="">Select a Snack</option>
                  {snacksMealOptions["Snacks"].map((snack, index) => (
                    <option key={index} value={snack}>
                      {snack}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Display selected snack */}
          <div className="selected-meals">
            {renderSelectedMeals()}
          </div>

        </div>
      {/* </div> */}
    </>
  );
};

export default Snacks;
