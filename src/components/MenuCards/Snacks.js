import React, { useEffect, useRef, useState } from 'react'
import { ImCross } from 'react-icons/im';
import { RiArrowUpSFill } from 'react-icons/ri';
import { useDropdown } from './Dropdowncontext';

const Snacks = () => {
 
    
  const [selectedCarb, setSelectedCarb] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('');
  const [selectedParatha, setSelectedParatha] = useState('');
  const [selectedGreens, setSelectedGreens] = useState('');

  const [selectedMeal, setSelectedMeal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showMealOptions, setShowMealOptions] = useState(false);
  const [selectedDayMeal, setSelectedDayMeal] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [searchQueryOnePot, setSearchQueryOnePot] = useState('');
const [suggestionsOnePot, setSuggestionsOnePot] = useState([]);

const [showOnePotMeal, setShowOnePotMeal] = useState(false);

const [activeMeal, setActiveMeal] = useState(''); // Active meal track karne ke liye


const mealOptions = {
    "One Pot Meal": ["Almonds", "Oats", "Sandwich"]
  };

  // Handle search and suggestion filtering
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    if (query) {
      const mealsArray = Object.entries(mealOptions).flatMap(([category, meals]) =>
        meals.map((meal) => ({ name: meal, category }))
      );
  
      const filteredMeals = mealsArray.filter((meal) =>
        meal.name.toLowerCase().includes(query)
      );
  
      setSuggestions(filteredMeals);
    } else {
      setSuggestions([]);
    }
  
    setSelectedMeal(null);
  };

  // Handle when a suggestion is clicked
  // Handle when a suggestion is clicked
  const handleSuggestClick = (suggestion) => {
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
    setSelectedDay(null);
  };


      // Render selected meals
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
  



  // Handle when a suggestion is clicked
  const handleOnePotMealClick = (suggest) => {
    // Clear previously selected options
    if (suggest.category === "One Pot Meal") {
      setSelectedMeal(suggest.name);
      setSelectedCarb('');
      setSelectedProtein('');
      setSelectedParatha('');
      setSelectedGreens('');
    }
  
    // Clear the suggestions and search input
    setSuggestions([]);
    setSearchQuery('');
    setSelectedDay(null);
  
    // Blur the input to remove focus and hide suggestions
    document.getElementById('searchInput').blur();
  };

   // Render selected meals
 const renderSelectedOnePotMeals = () => {
    if (selectedMeal) {
      return <p>You selected: {selectedMeal}</p>;
    }else {
      return <p className='text-lg'>Please select a meal</p>;
    }
  };

  // Handle search and suggestion filtering for One Pot Meal
const handleSearchOnePotChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQueryOnePot(query);
  
    if (mealOptions["One Pot Meal"]) {
      const filteredMeals = mealOptions["One Pot Meal"].filter(meal =>
        meal.toLowerCase().includes(query)
      );
      setSuggestionsOnePot(filteredMeals.map(meal => ({ name: meal, category: "One Pot Meal" })));
    } else {
      setSuggestionsOnePot([]);
    }
  };

  
  const toggleMealOptions = (event) => {
    event.stopPropagation();
    setShowMealOptions(prev => !prev);
  };


  
const [isActive, setIsActive] = useState(false);

const handleMouseEnter = () => {
  setIsActive(true); // Card active on hover
};

const handleMouseLeave = () => {
  setIsActive(false); // Card inactive when hover ends
};

const cardRef = useRef(null);




return (
  <div>
       <div className='breakf'>
       {/* <h1>Snacks</h1> */}
      {!showMealOptions ? (
        <div className={`breakfastmeal ${isActive ? "" : ""}`} >
          <div className="fleximg-meal">
            <video
              src="assets/images/186709-878853401_small.mp4"
              autoPlay
              muted
              width={150}
            ></video>
            {selectedDay ? (
              <div className="getMeal" style={{ marginTop: '20px', fontSize: '12px' }}>
                <h3>Day {selectedDay} Meal</h3>
                <p>Meal: {selectedDayMeal}</p>
              </div>
            ) : (
              <p style={{ marginTop: '20px', fontSize: '12px', fontFamily: 'serif' }}>
                Meal:-<br />
                {renderSelectedMeals()}
              </p>
            )}
          </div>
          <div className="search-box">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search meal..."
              className="search-input"
            />
            {searchQuery && (
              <div className="suggestions1">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="suggestion-item" onClick={() => handleSuggestClick(suggestion)}>
                    {suggestion.name} ({suggestion.category})
                  </div>
                ))}
              </div>
            )}
          </div>
          <RiArrowUpSFill
            className="arrowdown"
            onClick={toggleMealOptions}
          />
        </div>
      ) : (
        <div className="contain">
          <div className="detail-flex animate-slideInTop transition-transform duration-300">
            <div className="meal-container mt-8 p-4 w-full bg-transparent">
              <div className="tabs flex justify-between bg-slate-200 items-center p-2 text-center text-white font-serif h-10">
                <h4
                  onClick={() => {
                    setSelectedMeal('One Pot Meal');
                    setShowMealOptions(true);
                  }}
                  className={`cursor-pointer ${selectedMeal === 'One Pot Meal' ? 'active animate-pulse' : 'inactive'}`}
                >
                  Select Meal
                </h4>
              </div>
              <div className="meal-content">
                {selectedMeal === 'One Pot Meal' && (
                  <div className="meal-details flex-col p-2 animate-slideInTop">
                    <div className="search w-[300px] h-40">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search meal..."
                        className="search-input"
                      />
                      {searchQuery && (
                        <div className="suggestions">
                          {suggestions.map((suggestion, index) => (
                            <div
                              key={index}
                              className="suggestion-item"
                              onClick={() => handleSuggestClick(suggestion)}
                            >
                              {suggestion.name} ({suggestion.category})
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <ImCross
            className="cross"
            onClick={toggleMealOptions}
          />
        </div>
      )}
    </div>
  </div>
);
}

export default Snacks;