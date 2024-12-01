import React, { useState } from 'react';

const Search = () => {
  const [selectedCarb, setSelectedCarb] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [noMealFound, setNoMealFound] = useState(false);
  const [mealCombination, setMealCombination] = useState('');
  const [secondSearchNeeded, setSecondSearchNeeded] = useState('');

  // Function to gather all meal options from the select elements
  const getAllMeals = () => {
    const mealOptions = {
      "One Pot Meal": Array.from(document.querySelectorAll('.onepotmeal select option')).map(option => option.value).filter(value => value),
      "Carbs": Array.from(document.querySelectorAll('.carbs select option')).map(option => option.value).filter(value => value),
      "Protein": Array.from(document.querySelectorAll('.protein select option')).map(option => option.value).filter(value => value)
    };
    return mealOptions;
  };

  // Handle input change for search
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
    setNoMealFound(newSuggestions.length === 0);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    if (suggestion.category === "Carbs") {
      setSelectedMeal('');
      setSelectedCarb(suggestion.name);
      setSecondSearchNeeded('protein');
      setSuggestions([]);
      setSearchQuery('');
    } else if (suggestion.category === "Protein") {
      setSelectedMeal('');
      setSelectedProtein(suggestion.name);
      setSecondSearchNeeded('');
      setSuggestions([]);
      setSearchQuery('');
    } else if (suggestion.category === "One Pot Meal") {
      setSelectedCarb('');
      setSelectedProtein('');
      setSelectedMeal(suggestion.name);
      setSuggestions([]);
      setSearchQuery('');
    }
  };

  // Render suggestion items
  const renderSuggestions = () => {
    if (noMealFound) {
      return <div className="no-meal-found">No meal found</div>;
    }
    return suggestions.map((suggestion, index) => (
      <div key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>
        {suggestion.name} ({suggestion.category})
      </div>
    ));
  };

  // Render selected meals and messages
  const renderSelectedMeals = () => {
    if (selectedMeal) {
      return <p>You selected: {selectedMeal}</p>;
    } else if (selectedCarb && selectedProtein) {
      return <p>You selected: {selectedCarb} + {selectedProtein}</p>;
    } else if (selectedCarb) {
      return <p>You selected: {selectedCarb}. <span style={{ color: 'red' }}>Please select a protein meal as well.</span></p>;
    } else if (selectedProtein) {
      return <p>You selected: {selectedProtein}. <span style={{ color: 'red' }}>Please select a carb meal as well.</span></p>;
    } else {
      return <p>Please select a meal</p>;
    }
  };

  return (
    <div className="meal-search-container">
      {/* One Pot Meal Search */}
      <div className="onepotmeal">
        <h3>One Pot Meal</h3>
        <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "One Pot Meal"})}>
          <option value="">Select a Meal</option>
          <option value="Poha">Poha</option>
          <option value="Idli">Idli</option>
          <option value="Dosa">Dosa</option>
        </select>
      </div>

      {/* Separate Meal (Carbs & Protein) */}
      <div className="sepratemeal">
        <div className="carbs">
          <h3>Carbs</h3>
          <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "Carbs"})}>
            <option value="">Select a Meal</option>
            <option value="Rice">Rice</option>
            <option value="Roti">Roti</option>
            <option value="Pav">Pav</option>
          </select>
        </div>
        <div className="protein">
          <h3>Protein</h3>
          <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "Protein"})}>
            <option value="">Select a Meal</option>
            <option value="Chicken">Chicken</option>
            <option value="Egg Curry">Egg Curry</option>
            <option value="Paneer Bhurji">Paneer Bhurji</option>
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search meal..."
        />
        {searchQuery && <div className="suggestions">{renderSuggestions()}</div>}
      </div>

      {/* Display selected meals */}
      <div className="selected-meals">
        {renderSelectedMeals()}
      </div>

      {/* Save Meal Button */}
      {selectedCarb && selectedProtein && (
        <div className="save-button">
          <button onClick={() => setMealCombination(`${selectedCarb} + ${selectedProtein}`)}>Save Meal</button>
        </div>
      )}
    </div>
  );
};

export default Search;
