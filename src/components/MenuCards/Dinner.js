import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
// import './parent.css'

const Dinner = () => {
  
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

const [searchQuerySeparate, setSearchQuerySeparate] = useState('');
const [suggestionsSeparate, setSuggestionsSeparate] = useState([]);

const [searchQueryParatha, setSearchQueryParatha] = useState('');
const [suggestionsParatha, setSuggestionsParatha] = useState([]);

const [showOnePotMeal, setShowOnePotMeal] = useState(false);
const [showSeprateMeal, setShowSeprateMeal] = useState(false);
const [showParathaMeal, setShowParathaMeal] = useState(false);

const [activeMeal, setActiveMeal] = useState(''); // Active meal track karne ke liye


  const mealOptions = {
    "One Pot Meal": ["Poha", "Idli", "Dosa"],
    "Carbs": ["Rice", "Roti", "Pav"],
    "Protein": ["Chicken", "Egg Curry", "Paneer Bhurji"],
    "Paratha": ["Paneer Paratha", "Plain Paratha", "Mix Paratha"],
    "Greens": ["Palak", "Methi", "Bhindi"]
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

  const handleOutsideSuggestionClick = (suggestion) => {
    setSelectedMeal(suggestion);
    setSuggestions([]); 
    setSearchQuery(''); 
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

  // Handle when a suggestion is clicked
const handleSuggestionClick = (suggestion) => {
  // Reset all selections before setting specific ones
  setSelectedMeal('');
  setSelectedCarb('');
  setSelectedProtein('');
  setSelectedParatha('');
  setSelectedGreens('');
  
  // Set specific selections based on category
  switch (suggestion.category) {
    case "One Pot Meal":
      setSelectedMeal(suggestion.name);
      break;
    case "Carbs":
      setSelectedCarb(suggestion.name);
      break;
    case "Protein":
      setSelectedProtein(suggestion.name);
      break;
    case "Paratha":
      setSelectedParatha(suggestion.name);
      break;
    case "Greens":
      setSelectedGreens(suggestion.name);
      break;
    default:
      break;
  }

  // Clear suggestions and reset input
  setSuggestions([]);  // Clears the suggestions list
  setSearchQuery('');   // Resets the search input field
  setSelectedDay(null); // Optionally, clear the day selection if necessary
};

  

 // Render selected meals
 const renderSelectedOnePotMeals = () => {
  if (selectedMeal) {
    return <p>You selected: {selectedMeal}</p>;
  }else {
    return <p className='text-lg'>Please select a meal</p>;
  }
};


  // Render selected meals
  const renderSelectedSeprateMeals = () => {
    if (selectedCarb && selectedProtein) {
      return <p>You selected: {selectedCarb} + {selectedProtein}</p>;
    }else if (selectedCarb) {
      return <p>You selected: {selectedCarb}. <span style={{ color: 'red' }}>Please select a protein meal as well.</span></p>;
    } else if (selectedProtein) {
      return <p>You selected: {selectedProtein}. <span style={{ color: 'red' }}>Please select a carb meal as well.</span></p>;
    } else {
      return <p>Please select a meal</p>;
    }
  };

  // Render selected meals
  const renderSelectedParathaMeals = () => {
    if (selectedParatha && selectedGreens) {
      return <p>You selected: {selectedParatha} + {selectedGreens}</p>;
    } else if (selectedParatha) {
      return <p>You selected: {selectedParatha}. <span style={{ color: 'red' }}>Please select a greens option as well.</span></p>;
    } else if (selectedGreens) {
      return <p>You selected: {selectedGreens}. <span style={{ color: 'red' }}>Please select a paratha option as well.</span></p>;
    } else {
      return <p>Please select a meal</p>;
    }
  }


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
  

  // Handle when a suggestion is clicked
  const handleSeprateClick = (suggestion) => {
    if (suggestion.category === "Carbs") {
      setSelectedCarb(suggestion.name);
      setSelectedMeal('');
      setSelectedProtein('');
      setSelectedParatha('');
      setSelectedGreens('');
    } else if (suggestion.category === "Protein") {
      setSelectedProtein(suggestion.name);
    }

    setSuggestions([]);
    setSearchQuery('');
    setSelectedDay(null);
  };

  // Handle when a suggestion is clicked
  const handleParathaClick = (suggestion) => {
    if (suggestion.category === "Paratha") {
      setSelectedParatha(suggestion.name);
      setSelectedMeal('');
      setSelectedProtein('');
      setSelectedCarb('');
    } else if (suggestion.category === "Greens") {
      setSelectedGreens(suggestion.name);
    }

    setSuggestions([]);
    setSearchQuery('');
    setSelectedDay(null);
  };

  // separtemeal seggestion

 // Handle search and suggestion filtering for separateMeal
 const handleSearchSeprateChange = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQuerySeparate(query);

  const allowedCategories = ["Carbs", "Protein"];
  let newSuggestions = [];

  allowedCategories.forEach(category => {
    if (mealOptions[category]) {
      const filteredMeals = mealOptions[category].filter(meal =>
        meal.toLowerCase().includes(query)
      );
      newSuggestions = [
        ...newSuggestions,
        ...filteredMeals.map(meal => ({ name: meal, category })),
      ];
    }
  });

  setSuggestionsSeparate(newSuggestions);
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



const handleSearchParathaChange = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQueryParatha(query);

  const allowedCategories = ["Paratha", "Greens"];
  let newSuggestions = [];

  allowedCategories.forEach(category => {
    if (mealOptions[category]) {
      const filteredMeals = mealOptions[category].filter(meal =>
        meal.toLowerCase().includes(query)
      );
      newSuggestions = [
        ...newSuggestions,
        ...filteredMeals.map(meal => ({ name: meal, category })),
      ];
    }
  });

  setSuggestionsParatha(newSuggestions);
};



const toggleMealOptions = (event) => {
  event.stopPropagation();
  setShowMealOptions(prev => !prev);
};


const handleMealOptionClick = (mealType) => {
  setActiveMeal(activeMeal === mealType ? '' : mealType); // Toggle active meal
};


const [isActive, setIsActive] = useState(false);

const handleMouseEnter = () => {
  setIsActive(true); // Card active on hover
};

const handleMouseLeave = () => {
  setIsActive(false); // Card inactive when hover ends
};


  return (
    <div>
       <div className='breakf'>
       {/* <h1>Dinner</h1> */}
       {!showMealOptions ? (
        <div className={`breakfastmeal ${isActive ? "" : ""}`}>
          <div className="fleximg-meal">
            <video
              src="assets/images/186709-878853401_small.mp4"
              autoPlay
              muted
              width={150}
            ></video>
            {selectedDay ? (
                  <div className="getMeal" style={{marginTop: '20px', fontSize: '12px'}}>
                    <h3>Day {selectedDay} Meal</h3>
                    <p>Meal: {selectedDayMeal}</p> {/* Only meal name displayed */}
                  </div>
                ) : (
                  <p style={{ marginTop: '20px', fontSize: '12px', fontFamily: 'serif' }}>
                    Meal:-<br />
                    {renderSelectedMeals()}
                  </p>
              )}
          </div>
          {!showMealOptions && (
            <div className="search-box">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search meal..."
                className='search-input'
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
          )}
          <RiArrowUpSFill
            className="arrowdown"
            onClick={toggleMealOptions}
          />
        </div>
      ) : (
        <div className="contain">
          <div className="detail-flex animate-slideInTop transition-transform duration-300">
            {/* <h3>Select Meal Options</h3> */}
            {/* Render meal options */}

            
            <div className="meal-container mt-8 p-4 w-full bg-transparent">
  {/* Tab Header */}
  <div className="tabs flex justify-between bg-slate-200 items-center p-2 text-center text-white font-serif h-10">
    <h4
      onClick={() => {
        setSelectedMeal('One Pot Meal');
        setShowOnePotMeal(true);
        setShowSeprateMeal(false);
        setShowParathaMeal(false);
      }}
      className={`cursor-pointer ${selectedMeal === 'One Pot Meal' ? 'active animate-pulse' : 'inactive'}`}
    >
      One Pot Meal
    </h4>
    <h4
      onClick={() => {
        setSelectedMeal('Separate Meal');
        setShowOnePotMeal(false);
        setShowSeprateMeal(true);
        setShowParathaMeal(false);
      }}
      className={`cursor-pointer ${selectedMeal === 'Separate Meal' ? 'active animate-pulse' : 'inactive'}`}
    >
      Separate Meal
    </h4>
    <h4
      onClick={() => {
        setSelectedMeal('Paratha & Greens');
        setShowOnePotMeal(false);
        setShowSeprateMeal(false);
        setShowParathaMeal(true);
      }}
      className={`cursor-pointer ${selectedMeal === 'Paratha & Greens' ? 'active animate-pulse' : 'inactive'}`}
    >
      Paratha & Greens
    </h4>
  </div>

  {/* Meal Content (Dynamic) */}
  <div className="meal-content">
    {selectedMeal === 'One Pot Meal' && (
      <div className='meal-details flex-col p-2  animate-slideInTop'>
        <div className="flex justify-between">
        <div className="flex-col">
        <select>
          <option value="">Select a Meal</option>
          {mealOptions["One Pot Meal"].map((meal) => (
            <option key={meal} value={meal}>
              {meal}
            </option>
          ))}
        </select>
        </div>
        <div className="flex-p text-white">
        <p style={{ fontSize: '20px' }}>
          Meal:-<br />
          {renderSelectedOnePotMeals()}
        </p>
        </div> 
        </div>
        <div className="search w-[300px]h-40">
          
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchOnePotChange}
          placeholder="Search meal..."
          className="search-input"
        />
        {searchQueryOnePot && (
          <div className="suggestions">
            {suggestionsOnePot.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleOnePotMealClick(suggestion)}
              >
                {suggestion.name} ({suggestion.category})
              </div>
            ))}
          </div>
        )}
        </div> 
      </div>
      
    )}

    {selectedMeal === 'Separate Meal' && (
      <div className='meal-details flex-col p-2  animate-slideInTop'>
      <div className="flex justify-between">
      <div className="flex-col">
        <div className="carbs">
          <h2 className='text-lg pb-2 font-merinda text-white'>Carbs</h2>
          <select>
            <option value="">Select a Meal</option>
            {mealOptions["Carbs"].map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        <div className="protein">
          <h2 className='text-lg pb-2 font-merinda text-white'>Protein</h2>
          <select>
            <option value="">Select a Meal</option>
            {mealOptions["Protein"].map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className="flex-p text-white">
        <p style={{ fontSize: '20px' }}>
          Meal:-<br />
          {renderSelectedSeprateMeals()}
        </p>
        </div>
      </div>
      <div className="search w-[300px]h-40">
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchSeprateChange}
            placeholder="Search meal..."
            className="search-input"
          />
          {searchQuerySeparate && (
            <div className="suggestions">
              {suggestionsSeparate.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleParathaClick(suggestion)}
                >
                  {suggestion.name} ({suggestion.category})
                </div>
              ))}
            </div>
          )}
      </div>
      </div>
    )}

    {selectedMeal === 'Paratha & Greens' && (
      <div className='meal-details flex-col p-2  animate-slideInTop '>
      <div className="flex justify-between">
      <div className="flex-col">
        <div className="Paratha">
          <h2 className='text-lg pb-2 font-merinda text-white'>Paratha</h2>
          <select
            onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Paratha" })}
          >
            <option value="">Select a Meal</option>
            {mealOptions["Paratha"].map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        <div className="Greens">
          <h2 className='text-lg pb-2 font-merinda text-white'>Greens</h2>
          <select
            onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Greens" })}
          >
            <option value="">Select a Meal</option>
            {mealOptions["Greens"].map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className="flex-p text-white">
        <p style={{ fontSize: '16px' }}>
          Meal:-<br />
          {renderSelectedParathaMeals()}
        </p>
        </div>
      </div>
        <div className="search w-[300px]h-40">
        <input
            type="text"
            value={searchQuery}
            onChange={handleSearchParathaChange}
            placeholder="Search meal..."
            className="search-input"
          />
          {searchQueryParatha && (
            <div className="suggestions">
              {suggestionsParatha.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleParathaClick(suggestion)}
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
  )
}

export default Dinner;