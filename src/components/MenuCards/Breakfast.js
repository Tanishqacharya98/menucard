import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
// import './parent.css'

const Breakfast = () => {
  
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
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const [searchQueryOnePot, setSearchQueryOnePot] = useState('');
const [suggestionsOnePot, setSuggestionsOnePot] = useState([]);

const [searchQuerySeparate, setSearchQuerySeparate] = useState('');
const [suggestionsSeparate, setSuggestionsSeparate] = useState([]);
const [selectedSeparateMeal, setSelectedSeparateMeal] = useState('');
const [selectedMeals, setSelectedMeals] = useState('Separate Meal'); // Tracks current tab

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

  const navigate = useNavigate();

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

  // Handle when a suggestion is clicked
// const handleSuggestionClick = (suggestion) => {
//   // Reset all selections before setting specific ones
//   setSelectedMeal('');
//   setSelectedCarb('');
//   setSelectedProtein('');
//   setSelectedParatha('');
//   setSelectedGreens('');
  
//   // Set specific selections based on category
//   switch (suggestion.category) {
//     case "One Pot Meal":
//       setSelectedMeal(suggestion.name);
//       break;
//     case "Carbs":
//       setSelectedCarb(suggestion.name);
//       break;
//     case "Protein":
//       setSelectedProtein(suggestion.name);
//       break;
//     case "Paratha":
//       setSelectedParatha(suggestion.name);
//       break;
//     case "Greens":
//       setSelectedGreens(suggestion.name);
//       break;
//     default:
//       break;
//   }

//   // Clear suggestions and reset input
//   setSuggestions([]);  // Clears the suggestions list
//   setSearchQuery('');   // Resets the search input field
//   setSelectedDay(null); // Optionally, clear the day selection if necessary
// };

  

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
    } else {
      return (
        <p>
          {selectedCarb ? `Carb: ${selectedCarb}` : <span style={{ color: 'red' }}>Select a Carb</span>} +
          {selectedProtein ? ` Protein: ${selectedProtein}` : <span style={{ color: 'red' }}>Select a Protein</span>}
        </p>
      );
    }
  };
  

  // Render selected meals
  const renderSelectedParathaMeals = () => {
    if (selectedParatha && selectedGreens) {
      return <p>You selected: {selectedParatha} + {selectedGreens}</p>;
    } else if (selectedParatha) {
      return <p>You selected: {selectedParatha}.{' '} <span style={{ color: 'red' }}>Please select a greens option as well.</span></p>;
    } else if (selectedGreens) {
      return <p>You selected: {selectedGreens}.{' '} <span style={{ color: 'red' }}>Please select a paratha option as well.</span></p>;
    } else {
      return <p>Please select a meal</p>;
    }
  }

// Render selected meals
const renderSelectedMeals = () => {
  // Agar One-Pot Meal select hai
  if (selectedMeal === 'One-Pot Meal') {
    // Jab One-Pot Meal select ho, toh baaki saare selected items clear kar do
    return <p>You selected: {selectedMeal}</p>;
  }

  // Agar Separate Meal (Carb + Protein) select hai
  if (selectedCarb && selectedProtein) {
    return <p>You selected: {selectedCarb} + {selectedProtein}</p>;
    setSelectedMeals(true); // Switch to meal tab

  }

  // Agar sirf ek hi meal select hai (Carb ya Protein)
  if (selectedCarb || selectedProtein) {
    return (
      <p>
        {selectedCarb ? `Carb: ${selectedCarb}` : <span style={{ color: 'red' }}>Select a Carb</span>} +
        {selectedProtein ? ` Protein: ${selectedProtein}` : <span style={{ color: 'red' }}>Select a Protein</span>}
      </p>
    );
  }

  // Agar Paratha aur Greens select hain
  if (selectedParatha && selectedGreens) {
    return <p>You selected: {selectedParatha} + {selectedGreens}</p>;
  }

  // Agar sirf ek Paratha ya Greens selected hai
  if (selectedParatha || selectedGreens) {
    return (
      <p>
        {selectedParatha ? `Paratha: ${selectedParatha}` : <span style={{ color: 'red' }}>Select a Paratha</span>} +
        {selectedGreens ? ` Greens: ${selectedGreens}` : <span style={{ color: 'red' }}>Select Greens</span>}
      </p>
    );
  }

  // Agar general meal selected hai (except Separate Meal)
  if (selectedMeal && selectedMeal !== 'Separate Meal') {
    return <p>selected: {selectedMeal}</p>;
  }

  // Default: Agar koi bhi meal select nahi kiya gaya
  return <p>Please select a meal</p>;
};
  

const handleCarbChange = (e) => {
  setSelectedCarb(e.target.value);
};

const handleProteinChange = (e) => {
  setSelectedProtein(e.target.value);
};

// UseEffect hook to switch tab when both Carb and Protein are selected
useEffect(() => {
  if (selectedCarb && selectedProtein) {
    setSelectedMeals('mealDetails'); // Switch to meal details
  }
}, [selectedCarb, selectedProtein]);




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
  
    document.getElementById('searchInput').blur();
  };
  

  // Handle when a suggestion is clicked
  const handleSeprateClick = (suggestion) => {
    if (suggestion.category === "Carbs") {
      setSelectedCarb(suggestion.name);
    } else if (suggestion.category === "Protein") {
      setSelectedProtein(suggestion.name);
    }
    // Clear search
    setSuggestions([]);
    setSearchQuerySeparate('');
  
  
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



const handleSeparateSuggestClick = (suggestion) => {
  if (suggestion.category === "Carbs") {
    setSelectedCarb(suggestion.name);
  } else if (suggestion.category === "Protein") {
    setSelectedProtein(suggestion.name);
  }

  // Clear search and suggestions
  setSearchQuerySeparate('');
  setSuggestionsSeparate([]);
};


// Combine selected items into a single meal
useEffect(() => {
  if (selectedCarb && selectedProtein) {
    setSelectedSeparateMeal(`${selectedCarb} + ${selectedProtein}`);
  } else if (selectedCarb) {
    setSelectedSeparateMeal(selectedCarb);
  } else if (selectedProtein) {
    setSelectedSeparateMeal(selectedProtein);
  } else {
    setSelectedSeparateMeal('');
  }
}, [selectedCarb, selectedProtein]);



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

// When a suggestion is clicked
const handleOnePotSuggestClick = (suggestion) => {
  setSelectedMeal(suggestion.name); // Set the selected meal
  setSearchQueryOnePot(''); // Clear the search input
  setSuggestionsOnePot([]); // Clear the suggestions list
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


const handleParathaSuggestClick = (suggestion) => {
  if (suggestion.category === "Paratha") {
    setSelectedParatha(suggestion.name);
  } else if (suggestion.category === "Greens") {
    setSelectedGreens(suggestion.name);
  }

  // Clear search and suggestions
  setSearchQueryParatha('');
  setSuggestionsParatha([]);
};

// Render selected meal combination
useEffect(() => {
  if (selectedParatha && selectedGreens) {
    setSelectedMeal(`${selectedParatha} + ${selectedGreens}`);
  } else if (selectedParatha) {
    setSelectedMeal(selectedParatha);
  } else if (selectedGreens) {
    setSelectedMeal(selectedGreens);
  } else {
    setSelectedMeal('');
  }
}, [selectedParatha, selectedGreens]);



const toggleMealOptions = (event) => {
  event.stopPropagation();
  setShowMealOptions(prev => !prev);
};


const handleMealOptionClick = (mealType) => {
  setActiveMeal(activeMeal === mealType ? '' : mealType); // Toggle active meal
};

const [isActive, setIsActive] = useState(false);

const handleMouseEnter = () => {
  setIsActive(true);
};

const handleMouseLeave = () => {
  setIsActive(false); 
};

const cardRef = useRef(null);

const [showPopup, setShowPopup] = useState(false); 

const handleSelectChange = (e) => {
    const value = e.target.value;
  if (value === "add new") {
      setShowPopup(true); // पॉपअप दिखाएं
    } else {
      setSelectedOption(value); // चयनित विकल्प अपडेट करें
    }
};


const closePopup = () => {
  setShowPopup(false);
};


  const [options, setOptions] = useState(["Grams"]); // चयन विकल्प
  const [newOption, setNewOption] = useState(""); // नई वैल्यू स्टेट
  const [selectedOption, setSelectedOption] = useState(""); 


  const addNewOption = () => {
    if (newOption.trim() !== "") {
      const updatedOptions = [...options];
      // "Add new" से पहले नया ऑप्शन जोड़ें
      const addNewIndex = updatedOptions.indexOf("add new");
      updatedOptions.splice(addNewIndex, 0, newOption);
  
      setOptions(updatedOptions); // विकल्प सूची अपडेट करें
      setSelectedOption(newOption); // नया ऑप्शन ऑटोमेटिक सेलेक्ट करें
      closePopup(); // पॉपअप बंद करें
      setNewOption(""); // इनपुट फील्ड को साफ़ करें
    }
  };
  
  const[showDropdown, setShowDropdown] = useState(false);

  const [showCarbsDropdown, setShowCarbsDropdown] = useState(false);
  const [showProteinDropdown, setShowProteinDropdown] = useState(false);

  
  const [showParathaDropdown, setShowParathaDropdown] = useState(false);
  const [showGreensDropdown, setShowGreensDropdown] = useState(false);
  


// useEffect(() => {
//   const handleScroll = () => {
//     if (cardRef.current) {
//       const rect = cardRef.current.getBoundingClientRect();
//       const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
//       setIsActive(isInView);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

  return (
    <div>
       <div className='breakf'>
       {/* <h1>Breakfast</h1> */}

      {!showMealOptions ? (
        <div  ref={cardRef} className={`breakfastmeal ${isActive ? "" : ""}`} >
          {/* <h1>Breakfast</h1> */}
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
                  <>
                  <p style={{ marginTop: '20px', fontSize: '12px', fontFamily: 'serif' }}>
                    Meal:-<br />
                    {renderSelectedMeals()}
                  </p>
                  </>
                  
              )}
          </div>
          
          {/* <div className="box flex w-40 m-auto mt-4 justify-between items-center">
                 
                  <img src="assets/images/bowl.png" alt="not found" className='w-16 animate-slideInTop' />
                  <select className='text-black'  value={selectedOption} onChange={handleSelectChange}>
                     {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                    <option value="add new">Add new</option>
                  </select>

                  {showPopup && (
        <div
          className="fixed top-0 left-22 w-full h-full bg-transparent bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-4 rounded shadow-md w-96">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold  text-black">Add Grams</h2>
            <button
                className="px-2 py-2 text-red-500 text-md rounded mr-2"
                onClick={closePopup}
              >
                <ImCross />
              </button>
              </div>
            <input
              type="text"
              className="border p-2 w-full mb-4 text-black"
              placeholder="Enter Gram"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
            />
            
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addNewOption}>
                Add
              </button>
            </div>
          </div>
      )}

          </div> */}

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
                    <div key={index} className="suggestion-item" onClick={() => handleSuggestionClick(suggestion)}>
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
      {mealOptions["One Pot Meal"].map((meal) => (
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
        <p style={{ fontSize: '20px' }}>
          Meal:-<br />
          {renderSelectedOnePotMeals()}
        </p>
        </div>
        </div>
        
        {/* add grams */}
        
        <div className="search w-[300px]h-40">
          
        <input
          type="text"
          value={searchQueryOnePot}
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
                onClick={() => handleOnePotSuggestClick(suggestion)}
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
  <h2 className="text-lg pb-2 font-merinda text-white">Carbs</h2>
  <button
    className="dropdown-btn"
    onClick={() => setShowCarbsDropdown(!showCarbsDropdown)}
  >
    {selectedCarb || "Select a Carbs"}
  </button>
  {showCarbsDropdown && (
    <div className="dropdown-list">
      {mealOptions["Carbs"].map((meal) => (
        <div
          key={meal}
          className="dropdown-item"
          onClick={() => {
            setSelectedCarb(meal);
            setShowCarbsDropdown(false);
          }}
        >
          {meal}
        </div>
      ))}
    </div>
  )}
      </div>

<div className="protein">
  <h2 className="text-lg pb-2 font-merinda text-white">Protein</h2>
  <button
    className="dropdown-btn"
    onClick={() => setShowProteinDropdown(!showProteinDropdown)}
  >
    {selectedProtein || "Select a Protein"}
  </button>
  {showProteinDropdown && (
    <div className="dropdown-list greens-dropdown">
      {mealOptions["Protein"].map((meal) => (
        <div
          key={meal}
          className="dropdown-item"
          onClick={() => {
            setSelectedProtein(meal);
            setShowProteinDropdown(false);
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
        <p style={{ fontSize: '20px' }}>
          Meal:-<br />
          {renderSelectedSeprateMeals()}
        </p>
        </div>
      </div>
      <div className="search w-[300px]h-40">
        <input
            type="text"
            value={searchQuerySeparate}
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
                  onClick={() => handleSeparateSuggestClick(suggestion)}
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
      <div className="paratha">
  <h2 className="text-lg pb-2 font-merinda text-white">Paratha</h2>
  <button
    className="dropdown-btn"
    onClick={() => setShowParathaDropdown(!showParathaDropdown)}
  >
    {selectedParatha || "Select a paratha"}
  </button>
  {showParathaDropdown && (
    <div className="dropdown-list">
      {mealOptions["Paratha"].map((meal) => (
        <div
          key={meal}
          className="dropdown-item"
          onClick={() => {
            setSelectedParatha(meal);
            setShowParathaDropdown(false);
          }}
        >
          {meal}
        </div>
      ))}
    </div>
  )}
      </div>

<div className="greens">
  <h2 className="text-lg pb-2 font-merinda text-white">Greens</h2>
  <button
    className="dropdown-btn"
    onClick={() => setShowGreensDropdown(!showGreensDropdown)}
  >
    {selectedGreens || "Select a Greens"}
  </button>
  {showGreensDropdown && (
    <div className="dropdown-list greens-dropdown">
      {mealOptions["Greens"].map((meal) => (
        <div
          key={meal}
          className="dropdown-item"
          onClick={() => {
            setSelectedGreens(meal);
            setShowGreensDropdown(false);
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
        <p style={{ fontSize: '16px' }}>
          Meal:-<br />
          {renderSelectedParathaMeals()}
        </p>
        </div>
      </div>
        <div className="search w-[300px]h-40">
        <input
            type="text"
            value={searchQueryParatha}
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
                  onClick={() => handleParathaSuggestClick(suggestion)}
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

export default Breakfast;
