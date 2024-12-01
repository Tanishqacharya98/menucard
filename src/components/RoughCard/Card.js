import React, { useState, useEffect, useRef } from 'react';
import '../../cards/Meal.css';
import { mealOptions } from './MealCard';  // Import meal options
// import Lunch from './Lunch';
import Snacks from './Snacks';
import Lunch from '../../cards/Lunch';
import EveningSnacks from '../../cards/EveningSnacks';
import Dinner from '../../cards/Dinner';
// import EveningSnacks from './EveningSnacks';
// import Dinner from './Dinner';

const Card = () => {
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
  const [selectedDayDetails, setSelectedDayDetails] = useState(null);

  const mealListRef = useRef(null);
  

  // Handle search and suggestion filtering
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Get new suggestions based on query
    let newSuggestions = [];
    Object.keys(mealOptions).forEach(category => {
      mealOptions[category].forEach(meal => {
        if (meal.toLowerCase().includes(query)) {
          newSuggestions.push({ name: meal, category });
        }
      });
    });

    setSuggestions(newSuggestions);
    setSelectedMeal(null);
  };
   // Handle when a suggestion is clicked
   const handleOnePotMealClick = (suggest) => {
    if (suggest.category === "One Pot Meal") {
      setSelectedMeal(suggest.name);
      setSelectedCarb('');
      setSelectedProtein('');
      setSelectedParatha('');
      setSelectedGreens('');
    }
    setSuggestions([]);
    setSearchQuery('');
    setSelectedDay(null);
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

  // separtemeal seggestion

  // Handle search and suggestion filtering
const handleSearchSeprateChange = (e) => {
  const query = e.target.value.toLowerCase();
  setSearchQuery(query);

  // Filter suggestions for separateMeal (only Carbs and Protein)
  let newSuggestions = [];
  const allowedCategories = ["Carbs", "Protein"]; // Restrict to these categories only

  Object.keys(mealOptions).forEach(category => {
    if (allowedCategories.includes(category)) { // Check if category is allowed
      mealOptions[category].forEach(meal => {
        if (meal.toLowerCase().includes(query)) {
          newSuggestions.push({ name: meal, category }); // Add only valid meals
        }
      });
    }
  });

  setSuggestions(newSuggestions); // Update suggestions list
  setSelectedMeal(null); // Reset selected meal
};



  // Handle when a suggestion is clicked
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
    setSelectedDay(null);
  };

  const toggleMealOptions = () => {
    setShowMealOptions(prev => !prev);
  };

  // Function to get a random meal from a category
  const getRandomMeal = (mealCategory) => {
    const meals = mealOptions[mealCategory];
  
    // Ensure meals are available in the category
    if (!meals || meals.length === 0) {
      console.warn(`No meals available in category: ${mealCategory}`);
      return 'No meal available'; // Fallback message if no meals are available
    }
  
    // Select a random meal from the category
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    return randomMeal;
  };
  
  

  // Handle calendar day click
 // Function to handle when a day is clicked
// Function to handle when a day is clicked
const handleDayClick = (day) => {
  setSelectedDay(day);
  

  // Randomly choose one category for the meal
  const categories = ['One Pot Meal', 'Carbs', 'Protein', 'Paratha', 'Greens'];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  let selectedMeal = '';  // Initialize selectedMeal as empty

  // Randomly select a meal based on the chosen category
  if (randomCategory === 'One Pot Meal') {
    selectedMeal = getRandomMeal('One Pot Meal');  // Get a random meal from One Pot Meal
  } else if (randomCategory === 'Carbs' && selectedProtein) {
    const randomCarb = getRandomMeal('Carbs');
    selectedMeal = `${randomCarb} + ${selectedProtein}`;  // Combo of Carbs and Protein
  } else if (randomCategory === 'Paratha' && selectedGreens) {
    const randomParatha = getRandomMeal('Paratha');
    selectedMeal = `${randomParatha} + ${selectedGreens}`;  // Combo of Paratha and Greens
  } else if (randomCategory === 'Carbs' || randomCategory === 'Protein') {
    selectedMeal = `${getRandomMeal('Carbs')} + ${getRandomMeal('Protein')}`;
  } else if (randomCategory === 'Paratha' || randomCategory === 'Greens') {
    selectedMeal = `${getRandomMeal('Paratha')} + ${getRandomMeal('Greens')}`;
  }

  console.log(`Selected meal: ${selectedMeal}`);  // Debugging the selected meal

  if (selectedMeal) {
    // Store the selected random meal for the specific day
    setSelectedDayMeal(selectedMeal);
    
  } else {
    // Fallback to a default message if no meal is found (should not happen)
    setSelectedDayMeal("Default meal: Mix Paratha + Palak");
  }
  setSelectedMeal(null);
};


 // Render selected meals
 const renderSelectedOnePotMeals = () => {
  if (selectedMeal) {
    return <p>You selected: {selectedMeal}</p>;
  }else {
    return <p>Please select a meal</p>;
  }
};


  // Render selected meals
  const renderSelectedSeprateMeals = () => {
    if (selectedMeal) {
      return <p>You selected: {selectedMeal}</p>;
    } else if (selectedCarb && selectedProtein) {
      return <p>You selected: {selectedCarb} + {selectedProtein}</p>;
    }else {
      return <p>Please select a meal</p>;
    }
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

  useEffect(() => {
    const ref = mealListRef.current;
    if (ref) {
      const handleScroll = () => {
        if (ref.scrollTop + ref.clientHeight >= ref.scrollHeight) {
          ref.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      ref.addEventListener('scroll', handleScroll);
      return () => {
        ref.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="meal-search-container" ref={mealListRef}>
        <div className="title">
          <h1>Fitness</h1>
        </div>

        {/* Calendar */}
        <div className="day-selector days-select1">
          <div className="days-container days-contain">
            {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`dayButton ${selectedDay === day ? 'active' : ''}`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        <div className="card" style={{ height: showMealOptions ? '400px' : '250px' }}>
          <h2 onClick={toggleMealOptions}>Breakfast</h2>
          <div className="flex-contain" style={{display: 'flex', gap: '10px'}}>
            <video src="assets/images/186709-878853401_small.mp4" autoPlay muted loop style={{maxWidth: '60%', height: 'auto', marginTop: '20px'}}></video>
           
              {selectedDay ? (
                  <div className="getMeal" style={{marginTop: '20px', fontSize: '12px'}}>
                    <h3>Day {selectedDay} Meal</h3>
                    <p>Meal: {selectedDayMeal}</p> {/* Only meal name displayed */}
                  </div>
                ) : (
                  <p style={{ marginTop: '20px', fontSize: '12px' }}>
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
            <div className='details-flex'>
              {/* One Pot Meal Selection */}
              <div className="onepotmeal">
                <h3>One Pot Meal</h3>
                <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "One Pot Meal" })}>
                  <option value="">Select a Meal</option>
                  {mealOptions["One Pot Meal"].map((meal) => (
                    <option key={meal} value={meal}>{meal}</option>
                  ))}
                </select>
                <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search meal..."
              />
              {searchQuery && (
                <div className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-item" onClick={() => handleOnePotMealClick(suggestion)}>
                      {suggestion.name} ({suggestion.category})
                    </div>
                  ))}
                </div>
              )}
              <p style={{marginTop: '10px', fontSize: '16px'}}>Meal:-<br />{renderSelectedOnePotMeals()}</p>
              </div>

              {/* Carbs & Protein Selection */}
              <div className="sepratemeal">
              <h3>Seprate Meal</h3>
                <div className="carbs">
                  <h3>Carbs</h3>
                  <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Carbs" })}>
                    <option value="">Select a Meal</option>
                    {mealOptions["Carbs"].map((meal) => (
                      <option key={meal} value={meal}>{meal}</option>
                    ))}
                  </select>
                </div>
                <div className="protein">
                  <h3>Protein</h3>
                  <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Protein" })}>
                    <option value="">Select a Meal</option>
                    {mealOptions["Protein"].map((meal) => (
                      <option key={meal} value={meal}>{meal}</option>
                    ))}
                  </select>
                </div>

                      
                <input
                type="text"
                value={searchQuery}
                onChange={handleSearchSeprateChange}
                placeholder="Search meal..."
              />
              {searchQuery && (
                <div className="suggestions">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-item" onClick={() => handleSeprateClick(suggestion)}>
                      {suggestion.name} ({suggestion.category})
                    </div>
                  ))}
                </div>
              )}
              <p style={{marginTop: '10px', fontSize: '16px'}}>Meal:-<br />{renderSelectedSeprateMeals()}</p>
              
                
              </div>

              {/* Paratha & Greens Selection */}
              <div className="sepratemeal">
                <div className="Paratha">
                  <h3>Paratha</h3>
                  <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Paratha" })}>
                    <option value="">Select a Meal</option>
                    {mealOptions["Paratha"].map((meal) => (
                      <option key={meal} value={meal}>{meal}</option>
                    ))}
                  </select>
                </div>
                <div className="Greens">
                  <h3>Greens</h3>
                  <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "Greens" })}>
                    <option value="">Select a Meal</option>
                    {mealOptions["Greens"].map((meal) => (
                      <option key={meal} value={meal}>{meal}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Display selected meals */}
          {/* <div className="selected-meals">
            {renderSelectedMeals()}
          </div> */}
        </div>

        <Snacks />
         <Lunch /> 
        <EveningSnacks />
        <Dinner /> 
      </div>
    </>
  );
};

export default Card;
