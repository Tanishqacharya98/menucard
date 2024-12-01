import React, { useState, useEffect } from 'react';
import './Meal.css';

const Dinner = () => {
  const [selectedCarb, setSelectedCarb] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('');
  const [selectedParatha, setSelectedParatha] = useState('');
  const [selectedGreens, setSelectedGreens] = useState('');

  const [selectedMeal, setSelectedMeal] = useState('');
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
      "One Pot Meal": ["Dal Khichdi", "Vegetable Pulao", "Tomato Rice"],
      "Carbs": ["Chapati", "Rice", "Naan"],
      "Protein": ["Palak Paneer", "Tandoori Chicken", "Dal Makhani"],
      "Paratha": ["Aloo Paratha", "Onion Paratha", "Methi Paratha"],
      "Greens": ["Palak", "Methi", "Bhindi"]
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
    if (suggestion.category === "One Pot Meal") {
      setSelectedMeal(suggestion.name);
      setSelectedCarb('');
      setSelectedProtein('');
      setSelectedParatha('');
      setSelectedGreens('');
    } else if (suggestion.category === "Carbs") {
      setSelectedCarb(suggestion.name);
      setSelectedMeal('');
      setSelectedProtein('');
      setSelectedParatha('');
      setSelectedGreens('');
    } else if (suggestion.category === "Protein") {
      setSelectedProtein(suggestion.name);
    } else if (suggestion.category === "Paratha") {
      setSelectedParatha(suggestion.name);
      setSelectedMeal('');
      setSelectedCarb('');
      setSelectedProtein('');
      setSelectedGreens('');
    } else if (suggestion.category === "Greens") {
      setSelectedGreens(suggestion.name);
    }

    setSuggestions([]);
    setSearchQuery('');
  };

  const toggleMealOptions = () => {
    setShowMealOptions(prev => !prev);
  };

  const renderSelectedMeals = () => {
    if (selectedMeal) {
      return <p>You selected: {selectedMeal}</p>;
    } else if (selectedCarb && selectedProtein) {
      return <p>You selected: {selectedCarb} + {selectedProtein}</p>;
    } else if (selectedParatha && selectedGreens) {
      return <p>You selected: {selectedParatha} + {selectedGreens}</p>;
    } else if (selectedCarb) {
      return <p>You selected: {selectedCarb}. <span style={{ color: 'red' }}>Please select a protein meal as well.</span></p>;
    } else if (selectedProtein) {
      return <p>You selected: {selectedProtein}. <span style={{ color: 'red' }}>Please select a carb meal as well.</span></p>;
    } else if (selectedParatha) {
      return <p>You selected: {selectedParatha}. <span style={{ color: 'red' }}>Please select a greens option as well.</span></p>;
    } else if (selectedGreens) {
      return <p>You selected: {selectedGreens}. <span style={{ color: 'red' }}>Please select a paratha option as well.</span></p>;
    } else {
      return <p>Please select a meal</p>;
    }
  };

  return (
    <>
      {/* <div className="meal-search-container"> */}
        {/* Meal Options Toggle */}
        <div className="card" style={{ height: showMealOptions ? '400px' : '250px' }}>
          <h2 onClick={toggleMealOptions}>Dinner</h2>
          <img src="assets/images/ai-generated-8619138_1280.png" alt="Dinner" />
            
        {/* Search Bar Outside Meal Options */}
        { !showMealOptions && (
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search meal..."
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
              {/* One Pot Meal Selection */}
              <div className="onepotmeal">
                <h3>One Pot Meal</h3>
                <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "One Pot Meal"})}>
                  <option value="">Select a Meal</option>
                  <option value="Dal Khichdi">Dal Khichdi</option>
                  <option value="Vegetable Pulao">Vegetable Pulao</option>
                  <option value="Tomato Rice">Tomato Rice</option>
                </select>
              </div>

              {/* Carbs & Protein Selection */}
              <div className="sepratemeal">
                <div className="carbs">
                  <h3>Carbs</h3>
                  <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "Carbs"})}>
                    <option value="">Select a Meal</option>
                    <option value="Chapati">Chapati</option>
                    <option value="Rice">Rice</option>
                    <option value="Naan">Naan</option>
                  </select>
                </div>
                <div className="protein">
                  <h3>Protein</h3>
                  <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "Protein"})}>
                    <option value="">Select a Meal</option>
                    <option value="Palak Paneer">Palak Paneer</option>
                    <option value="Tandoori Chicken">Tandoori Chicken</option>
                    <option value="Dal Makhani">Dal Makhani</option>
                  </select>
                </div>
              </div>

              {/* Paratha & Greens Selection */}
              <div className="sepratemeal">
                <div className="Paratha">
                  <h3>Paratha</h3>
                  <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "Paratha"})}>
                    <option value="">Select a Meal</option>
                    <option value="Aloo Paratha">Aloo Paratha</option>
                    <option value="Onion Paratha">Onion Paratha</option>
                    <option value="Methi Paratha">Methi Paratha</option>
                  </select>
                </div>
                <div className="Greens">
                  <h3>Greens</h3>
                  <select onChange={(e) => handleSuggestionClick({name: e.target.value, category: "Greens"})}>
                    <option value="">Select a Meal</option>
                    <option value="Palak">Palak</option>
                    <option value="Methi">Methi</option>
                    <option value="Bhindi">Bhindi</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
        {/* Display selected meals */}
        <div className="selected-meals">
          {renderSelectedMeals()}
        </div>

        </div>

      {/* </div> */}
    </>
  );
};

export default Dinner;
