import React, { useState, useEffect, useRef } from 'react';
import './Meal.css';
import Lunch from './Lunch';
import Snacks from './Snacks';
import EveningSnacks from './EveningSnacks';
import Dinner from './Dinner';

const MealSearch = () => {
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
      "One Pot Meal": ["Poha", "Idli", "Dosa"],
      "Carbs": ["Rice", "Roti", "Pav"],
      "Protein": ["Chicken", "Egg Curry", "Paneer Bhurji"],
      "Paratha": ["Paneer Paratha", "Plain Paratha", "Mix Paratha"],
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
    setSelectedDay(null);
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

  // scroll start
  const mealListRef = useRef(null);

 
  const handleScroll = () => {
    if (mealListRef.current) {
      // Check if we've reached the bottom of the meal list
      if (mealListRef.current.scrollTop + mealListRef.current.clientHeight >= mealListRef.current.scrollHeight) {
        // Scroll back to top with a delay to slow down the scroll
        setTimeout(() => {
          mealListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }, 500); // Delay in milliseconds (500ms here, adjust as needed)
      }
    }
  };
  

  useEffect(() => {
    const ref = mealListRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
// scroll end

// calender
const [selectedDayMeal, setSelectedDayMeal] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayDetails, setSelectedDayDetails] = useState(null);

  const getData = {
    onePotMeal: {
      Poha: { description: "Light and tasty Poha" },
      Idli: { description: "Soft steamed Idlis" },
      Dosa: { description: "Crispy Dosa with chutney" },
      Rice: { description: "Steamed rice with curry" },
    },
    separateMeal: {
      carbs: {
        Rice: { description: "Steamed Rice" },
        Roti: { description: "Soft Roti" },
        Pav: { description: "Fresh Pav" },
      },
      protein: {
        Chicken: { description: "Spicy Chicken Curry" },
        EggCurry: { description: "Egg Curry" },
        Paneer: { description: "Paneer Bhurji" },
      },
    },
    parathaMeal: {
      meal1: {
        Idli: { description: "Idli with sambhar" },
      },
      meal2: {
        PaneerBhurji: { description: "Paneer Bhurji with Idli" },
      },
    },
  };

  const getRandomMeal = (mealCategory) => {
    const meals = Object.keys(mealCategory);
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    return { name: randomMeal, details: mealCategory[randomMeal] };
  };

  const [selectedSnacksDayDetails, setSelectedSnacksDayDetails] = useState(null);

  const [selectedDaySnacksMeal, setSelectedDaySnacksMeal] = useState(null);

  const handleDayClick = (day) => {
     if (activeTab === 'Breakfast') {
    setSelectedDay(day);

    const mealTypes = Object.keys(getData);
    const randomMealType = mealTypes[Math.floor(Math.random() * mealTypes.length)];

    let meal, mealDetailsForDay;

    if (randomMealType === "separateMeal") {
      const carb = getRandomMeal(getData.separateMeal.carbs);
      const protein = getRandomMeal(getData.separateMeal.protein);
      meal = `${carb.name} + ${protein.name}`;
      mealDetailsForDay = { description: carb.details.description, protein: protein.details };
    } else if (randomMealType === "parathaMeal") {
      const meal1 = getRandomMeal(getData.parathaMeal.meal1);
      const meal2 = getRandomMeal(getData.parathaMeal.meal2);
      meal = `${meal1.name} + ${meal2.name}`;
      mealDetailsForDay = { description: meal1.details.description, protein: meal2.details };
    } else {
      const selectedMeal = getRandomMeal(getData[randomMealType]);
      meal = selectedMeal.name;
      mealDetailsForDay = selectedMeal.details;
    }

    setSelectedDayMeal(meal);
    setSelectedDayDetails(mealDetailsForDay);
  }else if (activeTab === 'Snacks') {
    setSelectedDay(null); 
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
  };


  const [selectedSnacksDay, setSelectedSnacksDay] = useState(null);
  const [activeTab, setActiveTab] = useState('Breakfast'); // Tracks the active tab
// Function to handle tab switching
const toggleTab = (tab) => {
  setActiveTab(tab);
  // setSelectedDay(null);
  // setSelectedSnacksDay(null);
};



// calendar end

  return (
    <>
      <div className="meal-search-container" ref={mealListRef}>

      <div className="title">
        <h1>Fitness</h1>
      </div>
      {/* Day Selector and Meal Details for Breakfast */}
   
      <div>
        <div className="day-selector days-select">
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
        
        <div style={{ height: selectedDay ? '400px' : '250px' }} onClick={() => toggleTab('Breakfast')} className={`card ${activeTab === 'Breakfast' ? 'active' : ''}`}>
          <h2 onClick={toggleMealOptions}>Breakfast</h2>
          <div className="flex-contain" style={{display: 'flex', gap: '10px'}}>
            <video src="assets/images/186709-878853401_small.mp4" autoPlay muted loop style={{maxWidth: '60%', height: 'auto', marginTop: '20px'}}></video>
            <p style={{marginTop: '20px'}}>Meal:-{selectedMeal}</p>
          </div>
          
          {selectedDay && activeTab === 'Breakfast' && (
            <div className="getMeal">
              <h3>{selectedDay} Meal</h3>
              <p>Meal: {selectedDayMeal}</p>
              <p>Details: {selectedDayDetails?.description}</p>
              {selectedDayDetails?.protein && (
                <p>Protein: {selectedDayDetails.protein.description}</p>
              )}
            </div>
          )}

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

          {showMealOptions && (
            <div className="details-flex">
              {/* Snack Selection */}
              <div className="breakfast">
                <h3>Breakfast</h3>
                <select onChange={(e) => handleSuggestionClick({ name: e.target.value, category: "'Breakfast'" })}>
                  <option value="">Select a meal</option>
                  <option value="Oats">Oats</option>
                  <option value="Breakfast">Sandwich</option>
                </select>

              </div>
            </div>
          )}
          
          {/* Display selected snack */}
          <div className="selected-meals">
            {renderSelectedMeals()}
          </div>
          
        </div>

      </div>

        <Snacks />

        <Lunch />

        <EveningSnacks />

        <Dinner  />

      </div>
    </>
  );
};

export default MealSearch;
