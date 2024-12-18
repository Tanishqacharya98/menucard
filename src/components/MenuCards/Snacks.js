import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { RiArrowUpSFill } from 'react-icons/ri';

const Snacks = () => {

    
  

  const [selectedMeal, setSelectedMeal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showMealOptions, setShowMealOptions] = useState(false);
  const [selectedDayMeal, setSelectedDayMeal] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const [searchQueryOnePot, setSearchQueryOnePot] = useState('');
const [suggestionsOnePot, setSuggestionsOnePot] = useState([]);

const [showOnePotMeal, setShowOnePotMeal] = useState(false);

// const [activeMeal, setActiveMeal] = useState(''); 


const mealOptions = {
    "Snacks": ["Shake", "Bread", "Egg"]
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
    setSelectedMeal(suggestion.name); // Suggestion का meal नाम सेट करें
    setSuggestions([]); // सुझाव सूची साफ करें
    setSearchQuery(''); // खोज क्वेरी साफ करें
    setSelectedDayMeal(suggestion.name); // दिन के meal में भी सेट करें
    setSelectedDay(null);
  };
  


      // Render selected meals
  // const renderSelectedMeals = () => {
  //   if (selectedMeal) {
  //     return <p>You selected: {selectedMeal}</p>;
  //   } else if (selectedCarb && selectedProtein) {
  //     return <p>You selected: {selectedCarb} + {selectedProtein}</p>;
  //   } else if (selectedParatha && selectedGreens) {
  //     return <p>You selected: {selectedParatha} + {selectedGreens}</p>;
  //   } else if (selectedCarb) {
  //     return <p>You selected: {selectedCarb}. <span style={{ color: 'red' }}>Please select a protein meal as well.</span></p>;
  //   } else if (selectedProtein) {
  //     return <p>You selected: {selectedProtein}. <span style={{ color: 'red' }}>Please select a carb meal as well.</span></p>;
  //   } else if (selectedParatha) {
  //     return <p>You selected: {selectedParatha}. <span style={{ color: 'red' }}>Please select a greens option as well.</span></p>;
  //   } else if (selectedGreens) {
  //     return <p>You selected: {selectedGreens}. <span style={{ color: 'red' }}>Please select a paratha option as well.</span></p>;
  //   } else {
  //     return <p>Please select a meal</p>;
  //   }
  // };
  



  // Handle when a suggestion is clicked
//   const handleOnePotMealClick = (suggest) => {
//     // Clear previously selected options
//     if (suggest.category === "One Pot Meal") {
//       setSelectedMeal(suggest.name);
//       setSelectedCarb('');
//       setSelectedProtein('');
//       setSelectedParatha('');
//       setSelectedGreens('');
//     }
  
//     // Clear the suggestions and search input
//     setSuggestions([]);
//     setSearchQuery('');
//     setSelectedDay(null);
  
//     // Blur the input to remove focus and hide suggestions
//     document.getElementById('searchInput').blur();
//   };

//    // Render selected meals
//  const renderSelectedOnePotMeals = () => {
//     if (selectedMeal) {
//       return <p>You selected: {selectedMeal}</p>;
//     }else {
//       return <p className='text-lg'>Please select a meal</p>;
//     }
//   };

  // Handle search and suggestion filtering for One Pot Meal
// const handleSearchOnePotChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQueryOnePot(query);
  
//     if (mealOptions["One Pot Meal"]) {
//       const filteredMeals = mealOptions["One Pot Meal"].filter(meal =>
//         meal.toLowerCase().includes(query)
//       );
//       setSuggestionsOnePot(filteredMeals.map(meal => ({ name: meal, category: "One Pot Meal" })));
//     } else {
//       setSuggestionsOnePot([]);
//     }
//   };

  
//   const toggleMealOptions = (event) => {
//     event.stopPropagation();
//     setShowMealOptions(prev => !prev);
//   };

  
const [isActive, setIsActive] = useState(false);

const handleMouseEnter = () => {
  setIsActive(true); // Card active on hover
};

const handleMouseLeave = () => {
  setIsActive(false); // Card inactive when hover ends
};

const toggleMealOptions = () => {
  setShowMealOptions((prev) => !prev);
};

  const[showDropdown, setShowDropdown] = useState(false)


  return (
    <div>
       <div className='breakf'>
       {/* <h1>Evening Snacks</h1> */}

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
                  <div className="getMeal" style={{marginTop: '20px', fontSize: '12px'}}>
                    <h3>Day {selectedDay} Meal</h3>
                    <p>Meal: {selectedDayMeal}</p> {/* Only meal name displayed */}
                  </div>
                ) : (
                  <p style={{ marginTop: '20px', fontSize: '12px', fontFamily: 'serif' }}>
                    Meal:-<br />
                    {selectedMeal ? `You selected: ${selectedMeal}` : 'Please select a meal'}
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
        setSelectedMeal('Snacks');
        setShowOnePotMeal(true);
      }}
      className={`cursor-pointer ${selectedMeal === 'Snacks' ? 'active animate-pulse' : 'inactive'}`}
    >
      Select Meal
    </h4>
  </div>

  {/* Meal Content (Dynamic) */}
  <div className="meal-content">
    {selectedMeal === 'Snacks' && (
      <div className='meal-details flex-col p-2  animate-slideInTop'>
        <div className="flex justify-between">
        <div className="flex-col">
        <div className="onepotmeal">
  {/* <h2 className="text-lg pb-2 font-merinda text-white">One Pot Meal</h2> */}
  <button
    className="dropdown-btn"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    {selectedMeal || "Select a Meal"}
  </button>
  {showDropdown && (
    <div className="dropdown-list">
      {mealOptions["Snacks"].map((meal) => (
        <div
          key={meal}
          className="dropdown-item"
          onClick={() => {
            setSelectedMeal(meal);
            setShowDropdown(false);
          }}
        >
          {meal}
        </div>
      ))}
    </div>
  )}
</div>

        </div>
        <div className="flex-p text-white">
        <p style={{ fontSize: '14px' }}>
          Meal:-<br />
          {selectedMeal ? `You selected: ${selectedMeal}` : 'Please select a meal'}
          </p>
        </div> 
        </div>
        <div className="search w-[300px]h-40">
          
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search meal..."
          className="search-input"
        />
        {searchQueryOnePot && (
          <div className="suggestions">
            {suggestionsOnePot.map((suggestion, index) => (
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
  )
}

export default Snacks;