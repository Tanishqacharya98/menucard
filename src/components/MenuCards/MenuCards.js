import React, { useEffect, useRef, useState } from 'react';
import './MenuCards.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuCards = () => {
  // State to store selected meal details
  const [selectedMeal, setSelectedMeal] = useState(null);

  // State to toggle meal options visibility onepot meal
  const [showMealOptions, setShowMealOptions] = useState(false);
//   snacks meal
  const[snacksMeal, setSnacksMeal] = useState(false);
// lunch
  const[LunchMeal, setLunchMeal] = useState(false);
// evening snacks meal
  const[eveningsnacksMeal, setEveningSnacksMeal] = useState(false);
// dinner
  const[dinnerMeal, setDinnerMeal] = useState(false);


 // State to store selected meal details
 const [selectedCarbs, setSelectedCarbs] = useState(null);
 const [selectedProtein, setSelectedProtein] = useState(null);

 // State to store selected meal details
 const [selectedMeal1, setSelectedMeal1] = useState(null);
 const [selectedMeal2, setSelectedMeal2] = useState(null);


  // Meal details data
  const mealDetails = {
    onePotMeal: {
      Eggs: { calories: '70', grams: '40g' },
      Oats: { calories: '120', grams: '50g' },
    },
    separateMeal: {
      Rice: { calories: '130', grams: '50g' },
      Pasta: { calories: '150', grams: '60g' },
      Chicken: { calories: '250', grams: '100g' },
      Yogurt: { calories: '50', grams: '100g' },
    },
    parathaMeal: {
      "Aloo Paratha": { calories: '200', grams: '80g' },
      Salad: { calories: '40', grams: '100g' },
      "Methi Paratha": { calories: '180', grams: '80g' },
      "Paneer Bhurji": { calories: '220', grams: '100g' },
    }
  };

  // Handle selection for each meal type
  const handleOnePotMealSelect = (meal) => {
    const selected = mealDetails.onePotMeal[meal];
  setSelectedMeal(selected ? { 
    name: meal, 
    baseCalories: parseInt(selected.calories), 
    baseGrams: parseInt(selected.grams), 
    quantity: 1 
  } : null);
  setSelectedCarbs(null);
  setSelectedProtein(null);
  setSelectedMeal1(null);
  setSelectedMeal2(null);
  };

  const handleSeparateMealSelect = (meal) => {
    setSelectedMeal(mealDetails.separateMeal[meal] ? { name: meal, ...mealDetails.separateMeal[meal] } : null);
  };

  const handleParathaMealSelect = (meal) => {
    setSelectedMeal(mealDetails.parathaMeal[meal] ? { name: meal, ...mealDetails.parathaMeal[meal] } : null);
  };
//   end meal seclion select-meal

// Increase calories
const increaseCalories = () => {
    if (selectedMeal) {
      setSelectedMeal((prevMeal) => ({
        ...prevMeal,
        calories: parseInt(prevMeal.calories) + 10, // Increment by 10
      }));
    } else if (selectedCarbs && selectedProtein) {
      setSelectedCarbs((prevCarbs) => ({
        ...prevCarbs,
        calories: parseInt(prevCarbs.calories) + 10,
      }));
      setSelectedProtein((prevProtein) => ({
        ...prevProtein,
        calories: parseInt(prevProtein.calories) + 10,
      }));
    } else if (selectedMeal1 && selectedMeal2) {
      setSelectedMeal1((prevMeal1) => ({
        ...prevMeal1,
        calories: parseInt(prevMeal1.calories) + 10,
      }));
      setSelectedMeal2((prevMeal2) => ({
        ...prevMeal2,
        calories: parseInt(prevMeal2.calories) + 10,
      }));
    }
  };
  
  // Decrease calories
  const decreaseCalories = () => {
    if (selectedMeal) {
      setSelectedMeal((prevMeal) => ({
        ...prevMeal,
        calories: Math.max(parseInt(prevMeal.calories) - 10, 0),
      }));
    } else if (selectedCarbs && selectedProtein) {
      setSelectedCarbs((prevCarbs) => ({
        ...prevCarbs,
        calories: Math.max(parseInt(prevCarbs.calories) - 10, 0),
      }));
      setSelectedProtein((prevProtein) => ({
        ...prevProtein,
        calories: Math.max(parseInt(prevProtein.calories) - 10, 0),
      }));
    } else if (selectedMeal1 && selectedMeal2) {
      setSelectedMeal1((prevMeal1) => ({
        ...prevMeal1,
        calories: Math.max(parseInt(prevMeal1.calories) - 10, 0),
      }));
      setSelectedMeal2((prevMeal2) => ({
        ...prevMeal2,
        calories: Math.max(parseInt(prevMeal2.calories) - 10, 0),
      }));
    }
  };
  
  // Increase grams
  const increaseGrams = () => {
    if (selectedMeal) {
      setSelectedMeal((prevMeal) => ({
        ...prevMeal,
        grams: parseInt(prevMeal.grams) + 10,
      }));
    } else if (selectedCarbs && selectedProtein) {
      setSelectedCarbs((prevCarbs) => ({
        ...prevCarbs,
        grams: parseInt(prevCarbs.grams) + 10,
      }));
      setSelectedProtein((prevProtein) => ({
        ...prevProtein,
        grams: parseInt(prevProtein.grams) + 10,
      }));
    } else if (selectedMeal1 && selectedMeal2) {
      setSelectedMeal1((prevMeal1) => ({
        ...prevMeal1,
        grams: parseInt(prevMeal1.grams) + 10,
      }));
      setSelectedMeal2((prevMeal2) => ({
        ...prevMeal2,
        grams: parseInt(prevMeal2.grams) + 10,
      }));
    }
  };
  
  // Decrease grams
  const decreaseGrams = () => {
    if (selectedMeal) {
      setSelectedMeal((prevMeal) => ({
        ...prevMeal,
        grams: Math.max(parseInt(prevMeal.grams) - 10, 0),
      }));
    } else if (selectedCarbs && selectedProtein) {
      setSelectedCarbs((prevCarbs) => ({
        ...prevCarbs,
        grams: Math.max(parseInt(prevCarbs.grams) - 10, 0),
      }));
      setSelectedProtein((prevProtein) => ({
        ...prevProtein,
        grams: Math.max(parseInt(prevProtein.grams) - 10, 0),
      }));
    } else if (selectedMeal1 && selectedMeal2) {
      setSelectedMeal1((prevMeal1) => ({
        ...prevMeal1,
        grams: Math.max(parseInt(prevMeal1.grams) - 10, 0),
      }));
      setSelectedMeal2((prevMeal2) => ({
        ...prevMeal2,
        grams: Math.max(parseInt(prevMeal2.grams) - 10, 0),
      }));
    }
  };
//   end caloreis increase-decrease

 // Toggle visibility of meal options
 const toggleMealOptions = (e) => {
    e.stopPropagation();
    setShowMealOptions((prev) => !prev);
  };
//   snacks
  const toggleSnacksMealOptions = (e) => {
    e.stopPropagation();
    setSnacksMeal((prev) => !prev);
  };

//   lunch
const toggleLunchMealOptions = (e) => {
    e.stopPropagation();
    setLunchMeal((prev) => !prev);
  };
//   evening snacks
const toggleEveningSnacksMealOptions = (e) => {
      e.stopPropagation();
      setEveningSnacksMeal((prev) => !prev);
};
//   dinner
const toggleDinnerMealOptions = (e) => {
      e.stopPropagation();
      setDinnerMeal((prev) => !prev);
};


//  meal-options fucntion

  // Handle selection for carbs and protein in separateMeal
  const handleCarbsSelect = (meal) => {
    const selectedCarb = mealDetails.separateMeal[meal];
    setSelectedCarbs(
      selectedCarb
        ? {
            name: meal,
            baseCalories: parseInt(selectedCarb.calories), // initialize with the meal's calories
            baseGrams: parseInt(selectedCarb.grams), // initialize with the meal's grams
            quantity: 1, // initialize with a default quantity of 1
            calories: parseInt(selectedCarb.calories), // initial calories
            grams: parseInt(selectedCarb.grams), // initial grams
          }
        : null
    );
    setSelectedMeal(null);
    setSelectedMeal1(null);
    setSelectedMeal2(null);
  };
  
  const handleProteinSelect = (meal) => {
    const selectedProtein = mealDetails.separateMeal[meal];
    setSelectedProtein(
      selectedProtein
        ? {
            name: meal,
            baseCalories: parseInt(selectedProtein.calories),
            baseGrams: parseInt(selectedProtein.grams),
            quantity: 1,
            calories: parseInt(selectedProtein.calories),
            grams: parseInt(selectedProtein.grams),
          }
        : null
    );
    setSelectedMeal(null);
    setSelectedMeal1(null);
    setSelectedMeal2(null);
  };
  

   // Handle selection for carbs and protein in separateMeal
   const handleMeal1Select = (meal) => {
    const selectedMeal1Option = mealDetails.parathaMeal[meal];
    setSelectedMeal1(
      selectedMeal1Option
        ? {
            name: meal,
            baseCalories: parseInt(selectedMeal1Option.calories),
            baseGrams: parseInt(selectedMeal1Option.grams),
            quantity: 1,
            calories: parseInt(selectedMeal1Option.calories),
            grams: parseInt(selectedMeal1Option.grams),
          }
        : null
    );
    setSelectedMeal(null);
    setSelectedCarbs(null);
    setSelectedProtein(null);
  };
  
  const handleMeal2Select = (meal) => {
    const selectedMeal2Option = mealDetails.parathaMeal[meal];
    setSelectedMeal2(
      selectedMeal2Option
        ? {
            name: meal,
            baseCalories: parseInt(selectedMeal2Option.calories),
            baseGrams: parseInt(selectedMeal2Option.grams),
            quantity: 1,
            calories: parseInt(selectedMeal2Option.calories),
            grams: parseInt(selectedMeal2Option.grams),
          }
        : null
    );
    setSelectedMeal(null);
    setSelectedCarbs(null);
    setSelectedProtein(null);
  };
  

  const updateQuantity = (mealType, quantity) => {
    console.log("Updating quantity for", mealType); 
    const parsedQuantity = parseInt(quantity) || 1; // Ensure quantity is a number
    let updatedMeal;
  
    if (mealType === 'carbs' && selectedCarbs) {
      updatedMeal = {
        ...selectedCarbs,
        quantity: parsedQuantity,
        calories: selectedCarbs.baseCalories * parsedQuantity,
        grams: selectedCarbs.baseGrams * parsedQuantity,
      };
      setSelectedCarbs(updatedMeal);
    } else if (mealType === 'protein' && selectedProtein) {
      updatedMeal = {
        ...selectedProtein,
        quantity: parsedQuantity,
        calories: selectedProtein.baseCalories * parsedQuantity,
        grams: selectedProtein.baseGrams * parsedQuantity,
      };
      setSelectedProtein(updatedMeal);
    } else if (mealType === 'meal' && selectedMeal) { // Handle 'meal' case
        updatedMeal = {
          ...selectedMeal,
          quantity: parsedQuantity,
          calories: selectedMeal.baseCalories * parsedQuantity,   // Calculate calories based on quantity
          grams: selectedMeal.baseGrams * parsedQuantity,         // Calculate grams based on quantity
        };
        setSelectedMeal(updatedMeal);
    }else if (mealType === 'meal1' && selectedMeal1) {
      updatedMeal = {
        ...selectedMeal1,
        quantity: parsedQuantity,
        calories: selectedMeal1.baseCalories * parsedQuantity,
        grams: selectedMeal1.baseGrams * parsedQuantity,
      };
      setSelectedMeal1(updatedMeal);
    } else if (mealType === 'meal2' && selectedMeal2) {
      updatedMeal = {
        ...selectedMeal2,
        quantity: parsedQuantity,
        calories: selectedMeal2.baseCalories * parsedQuantity,
        grams: selectedMeal2.baseGrams * parsedQuantity,
      };
      setSelectedMeal2(updatedMeal);
    }
  };
  
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showMealDetails, setShowMealDetails] = useState(false);
    // State to hold selected quantity and grams for each meal
    const [selectedMealInfo, setSelectedMealInfo] = useState({
        quantity: 1, 
        grams: 0,
      });

      const handleQuantityChange = (factor, meal) => {
        // Ensure you are working with a number for grams (remove 'g' if it's a string)
        const currentGrams = parseFloat(meal.details.grams.replace('g', ''));
      
        // Update the grams based on the factor selected (1.5, 2, or 3)
        const updatedGrams = currentGrams * factor;
      
        // Update selectedMealInfo state with new quantity and grams
        setSelectedMealInfo({
          quantity: factor,
          grams: updatedGrams + 'g', // Append 'g' after updating the grams
        });
      };
      
      
      
// Handle search input change
const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
  setShowMealDetails(e.target.value !== ''); // Only show details if search is not empty
  setSelectedDayDetails(null);
};

// Filter meals based on search query for combination from separateMeal only
const filteredMeals = (() => {
  if (!searchQuery) return [];

  // Split search query by "+" and trim each part
  const searchTerms = searchQuery
    .toLowerCase()
    .split("+")
    .map(term => term.trim());

  // Retrieve only the meals in the 'separateMeal' category that match all search terms
  const mealsInSeparateMeal = mealDetails.separateMeal;
  const mealsArray = Object.keys(mealsInSeparateMeal)
    .filter(mealName => 
      searchTerms.every(term => mealName.toLowerCase().includes(term))
    )
    .map(mealName => ({
      name: mealName,
      details: mealsInSeparateMeal[mealName],
    }));

  // Return meals if found, otherwise return a "No meal found" message
  return mealsArray.length > 0 ? mealsArray : [{ name: "No meal found", details: null }];
})();


  
  const [snacksSearchQuery, setSnacksSearchQuery] = useState('');
  const [showSnacksMealDetails, setShowSnacksMealDetails] = useState(false);
 // Handle search input change
 const handleSnacksSearchChange = (e) => {
    setSnacksSearchQuery(e.target.value);
    setShowSnacksMealDetails(e.target.value !== '');  // Only show details if search is not empty
    setSelectedDayDetails(null);
  };

  const [lunchSearchQuery, setLunchSearchQuery] = useState('');
  const [showLunchMealDetails, setShowLunchMealDetails] = useState(false);
 // Handle search input change
 const handleLunchSearchChange = (e) => {
    setLunchSearchQuery(e.target.value);
    setShowLunchMealDetails(e.target.value !== '');  // Only show details if search is not empty
    setSelectedDayDetails(null);
  };
  
  const [eveningsnacksSearchQuery, setEveningSnacksSearchQuery] = useState('');
  const [showEveningSnacksMealDetails, setShowEveningSnacksMealDetails] = useState(false);
 // Handle search input change
 const handleEveningSnacksSearchChange = (e) => {
    setEveningSnacksSearchQuery(e.target.value);
    setShowEveningSnacksMealDetails(e.target.value !== '');  // Only show details if search is not empty
    setSelectedDayDetails(null);
  };
  
  const [dinnerSearchQuery, setDinnerSearchQuery] = useState('');
  const [showDinnerMealDetails, setShowDinnerMealDetails] = useState(false);
 // Handle search input change
 const handleDinnerSearchChange = (e) => {
    setDinnerSearchQuery(e.target.value);
    setShowDinnerMealDetails(e.target.value !== '');  // Only show details if search is not empty
    setSelectedDayDetails(null);
  };

   // scroll start
   const mealListRef = useRef(null);

 
   const handleScroll = () => {
     if (mealListRef.current) {
       // Check if we've reached the bottom of the meal list
       if (mealListRef.current.scrollTop + mealListRef.current.clientHeight >= mealListRef.current.scrollHeight) {
         // Scroll back to top
         mealListRef.current.scrollTo({ top: 0, behavior: 'smooth' });
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

 const [selectedDayMeal, setSelectedDayMeal] = useState('null'); 
 
 const [selectedDay, setSelectedDay] = useState(null);
 const[selectedDayDetails, setSelectedDayDetails] = useState(null);

 const handleDayClick = (day) => {
  setSelectedDay(day);

  const randomMealType = Math.floor(Math.random() * 3);

  let meal, mealDetailsForDay;

  switch (randomMealType) {
    case 0:
      meal = "Rice"; 
      mealDetailsForDay = mealDetails.onePotMeal["Rice"];
      break;
    case 1:
      meal = "Rice + Chicken"; // Separate Meal (Carb + Protein)
      mealDetailsForDay = {
        ...mealDetails.separateMeal["Rice"],
        protein: mealDetails.separateMeal["Chicken"],
      };
      break;
    case 2:
      meal = "Idli + Paneer"; // Paratha & Greens
      mealDetailsForDay = {
        ...mealDetails.parathaMeal["Idli"],
        protein: mealDetails.parathaMeal["Paneer Bhurji"],
      };
      break;
    default:
      meal = "Rice";
      mealDetailsForDay = mealDetails.onePotMeal["Rice"];
      break;
  }

  setSelectedDayMeal(meal);
  setSelectedDayDetails(mealDetailsForDay); 
};


 

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Menu Cards</h1>
        </div>

        {/* calendar */}
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

        <div className="cards" ref={mealListRef}>
        {/* breakfast */}
          <div className="card">
            <h2 onClick={toggleMealOptions} >Breakfast</h2>
            <img src="assets/images/sandwich-932646_1280.jpg" alt="not found" />
            {/* day meal select start */}
            {selectedDayDetails && (
            <div className="daymeal-details">
              <h3>Day {selectedDay} Meal: {selectedDayMeal}</h3>
              <p>Calories: {selectedDayDetails.calories}</p>
              <p>Quantity: {selectedDayDetails.grams}</p>
            </div>
          )}
          
            <div className="search-box">
                <input type="text" value={searchQuery} onChange={handleSearchChange}  placeholder='Search meal..' />
                {searchQuery && (
        <div className="suggestions">
            {filteredMeals.map((meal, index) => (
                <p key={index}>{meal.name}</p>  // Only show names here
            ))}
        </div>
    )}
            </div>
           {/* day meal-select end */}
           <div className="meal-details" style={{ display: showMealDetails ? 'block' : 'none' }} >
                {filteredMeals.length > 0 ? (
                filteredMeals.map((meal, index) => (
                    <div key={index}>
                    <h3>{meal.name}</h3>
                    <div className="quantity-adjustment">
                        <div className="flex-bowl">
                            <img src="assets/images/bowl.png" alt="not found" className='bowl-img' />
                            <p>Grams:  {selectedMealInfo.grams || meal.details?.grams || 'N/A'}</p>
                        </div>
                        <div className="flex-quantity">
                            <p onClick={() => handleQuantityChange(1.5, meal)}>*1.5</p>
                            <p onClick={() => handleQuantityChange(2, meal)}>*2</p>
                            <p onClick={() => handleQuantityChange(3, meal)}>*3</p>
                        </div>
                     </div>
                     {/* Display the selected quantity at the bottom */}
                     {selectedMealInfo.quantity > 1 && (
                        <div className="quantity-display">
                            <p>Quantity: {selectedMealInfo.quantity}</p>
                        </div>
                     )}
                    </div>
                ))
                ) : searchQuery ? (
                <p>No meals found</p> // Show this message when no meals match the search query
                ) : (
                <p>Search for meals to see details.</p> // Show this message when search query is empty
                )}
            </div>

            {/* Dropdown options */}
            {showMealOptions && (
            <div className="meal-options" onClick={(e) => e.stopPropagation()}>
              <div className="options">
                
                {/* One Pot Meal */}
                <div className="onepotmeal">
                  <h3>One Pot Meal</h3>
                  <select onChange={(e) => handleOnePotMealSelect(e.target.value)}>
                    <option value="">Select a Meal</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Oats">Oats</option>
                  </select>
                </div>
                
                {/* Separate Meal */}
                <div className="sepratemeal">
                  <div className="carbs">
                    <h3>Carbs</h3>
                    <select  onChange={(e) => handleCarbsSelect(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Rice">Rice</option>
                      <option value="Pasta">Pasta</option>
                    </select>
                  </div>
                  <div className="protien">
                    <h3>Protein</h3>
                    <select  onChange={(e) => handleProteinSelect(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Yogurt">Yogurt</option>
                    </select>
                  </div>
                </div>

                {/* Paratha Meal */}
                <div className="parathameal">
                  <div className="meal1">
                    <h3>Meal1</h3>
                    <select onChange={(e) => handleMeal1Select(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Aloo Paratha">Aloo Paratha</option>
                      <option value="Salad">Salad</option>
                    </select>
                  </div>
                  <div className="meal2">
                    <h3>Meal2</h3>
                    <select onChange={(e) => handleMeal2Select(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Methi Paratha">Methi Paratha</option>
                      <option value="Paneer Bhurji">Paneer Bhurji</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Display selected meal details */}

              <div className="select-meal">
                  {selectedMeal && (
                    <div>
                      <h4>{selectedMeal.name}</h4>
                      <p>Calories: {selectedMeal.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories}  />
                        <FaMinus className='minus' onClick={decreaseCalories}  />
                      </div>
                      <p>Grams: {selectedMeal.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams}  />
                      </div>
                      <div className="quantity">
                      <h4>One Pot Meal: {selectedMeal.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>

                    {/* Display quantity in bowl for selectedMeal */}
                    <div className="bowl-display">
                        <p>Quantity: {selectedMeal?.quantity || 1}x</p>
                    </div>
                    </div>
                  )}

                  {selectedCarbs && selectedProtein && (
                    <div>
                      <h4>{selectedCarbs.name} + {selectedProtein.name}</h4>
                      <p>Calories: {selectedCarbs.calories} + {selectedProtein.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus'onClick={decreaseCalories} />
                      </div>
                      <p>Grams: {selectedCarbs.grams} + {selectedProtein.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams} />
                      </div>
                      
                      <div className="quantity">
                      <h4>Carbs: {selectedCarbs.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedCarbs?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('carbs', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="quantity">
                      <h4>Protein: {selectedProtein.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedProtein?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('protein', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="bowl-display">
                        <p>Quantity: {selectedProtein.quantity || 1}x</p>
                      </div>
                    </div>
                  )}

                  {selectedMeal1 && selectedMeal2 && (
                    <div>
                      <h4>{selectedMeal1.name} + {selectedMeal2.name}</h4>
                      <p>Calories: {selectedMeal1.calories} + {selectedMeal2.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus' onClick={decreaseCalories} />
                      </div>
                      <p>Grams: {selectedMeal1.grams} + {selectedMeal2.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus' onClick={decreaseGrams} />
                      </div>
                      <div className="quantity">
                      <h4>Meal1: {selectedMeal1.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal1?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal1', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="quantity">
                      <h4>Meal2: {selectedMeal2.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal2?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal2', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="bowl-display">
                        <p>Quantity: {selectedMeal2.quantity || 1}x</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* snacks */}
          <div className="card">
            <h2 onClick={toggleSnacksMealOptions} >Snacks</h2>
            <img src="assets/images/fruitsalad.png" alt="not found" />
            <div className="meal-details" style={{ display: showSnacksMealDetails ? 'block' : 'none' }} >
                {filteredMeals.length > 0 ? (
                filteredMeals.map((meal, index) => (
                    <div key={index}>
                    <h3>{meal.name}</h3>
                    <div className="quantity-adjustment">
                        <div className="flex-bowl">
                            <img src="assets/images/bowl.png" alt="not found" className='bowl-img' />
                            <p>Grams:  {selectedMealInfo.grams || meal.details?.grams || 'N/A'}</p>
                        </div>
                        <div className="flex-quantity">
                            <p onClick={() => handleQuantityChange(1.5, meal)}>*1.5</p>
                            <p onClick={() => handleQuantityChange(2, meal)}>*2</p>
                            <p onClick={() => handleQuantityChange(3, meal)}>*3</p>
                        </div>
                     </div>
                     {/* Display the selected quantity at the bottom */}
                     {selectedMealInfo.quantity > 1 && (
                        <div className="quantity-display">
                            <p>Quantity: {selectedMealInfo.quantity}</p>
                        </div>
                     )}
                    </div>
                ))
                ) : searchQuery ? (
                <p>No meals found</p> // Show this message when no meals match the search query
                ) : (
                <p>Search for meals to see details.</p> // Show this message when search query is empty
                )}
            </div>
            <div className="search-box">
                <input type="text" value={snacksSearchQuery} onChange={handleSnacksSearchChange}  placeholder='Search meal..' />
            </div>
           

            {/* Dropdown options */}
            {snacksMeal && (
            <div className="meal-options" onClick={(e) => e.stopPropagation()}>
              <div className="options">
                
                {/* One Pot Meal */}
                <div className="onepotmeal">
                  <h3>One Pot Meal</h3>
                  <select onChange={(e) => handleOnePotMealSelect(e.target.value)}>
                    <option value="">Select a Meal</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Oats">Oats</option>
                  </select>
                </div>
               
              </div>

              {/* Display selected meal details */}

              <div className="select-meal">
                  {selectedMeal && (
                    <div>
                      <h4>{selectedMeal.name}</h4>
                      <p>Calories: {selectedMeal.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories}  />
                        <FaMinus className='minus' onClick={decreaseCalories}  />
                      </div>
                      <p>Grams: {selectedMeal.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams}  />
                      </div>
                      <div className="quantity">
                      <h4>One Pot Meal: {selectedMeal.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>

                    {/* Display quantity in bowl for selectedMeal */}
                    <div className="bowl-display">
                        <p>Quantity: {selectedMeal?.quantity || 1}x</p>
                    </div>
                    </div>
                  )}
                 
                </div>
              </div>
            )}
          </div>

          {/* lunch */}
          <div className="card">
            <h2 onClick={toggleLunchMealOptions} >Lunch</h2>
            <img src="assets/images/paneertikka.png" alt="not found" />
            <div className="meal-details" style={{ display: showLunchMealDetails ? 'block' : 'none' }} >
                {filteredMeals.length > 0 ? (
                filteredMeals.map((meal, index) => (
                    <div key={index}>
                    <h3>{meal.name}</h3>
                    <div className="quantity-adjustment">
                        <div className="flex-bowl">
                            <img src="assets/images/bowl.png" alt="not found" className='bowl-img' />
                            <p>Grams:  {selectedMealInfo.grams || meal.details?.grams || 'N/A'}</p>
                        </div>
                        <div className="flex-quantity">
                            <p onClick={() => handleQuantityChange(1.5, meal)}>*1.5</p>
                            <p onClick={() => handleQuantityChange(2, meal)}>*2</p>
                            <p onClick={() => handleQuantityChange(3, meal)}>*3</p>
                        </div>
                     </div>
                     {/* Display the selected quantity at the bottom */}
                     {selectedMealInfo.quantity > 1 && (
                        <div className="quantity-display">
                            <p>Quantity: {selectedMealInfo.quantity}</p>
                        </div>
                     )}
                    </div>
                ))
                ) : searchQuery ? (
                <p>No meals found</p> // Show this message when no meals match the search query
                ) : (
                <p>Search for meals to see details.</p> // Show this message when search query is empty
                )}
            </div>
            <div className="search-box">
                <input type="text" value={lunchSearchQuery} onChange={handleLunchSearchChange}  placeholder='Search meal..' />
            </div>
           

            {/* Dropdown options */}
            {LunchMeal && (
            <div className="meal-options" onClick={(e) => e.stopPropagation()}>
              <div className="options">
                
                {/* One Pot Meal */}
                <div className="onepotmeal">
                  <h3>One Pot Meal</h3>
                  <select onChange={(e) => handleOnePotMealSelect(e.target.value)}>
                    <option value="">Select a Meal</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Oats">Oats</option>
                  </select>
                </div>
                
                {/* Separate Meal */}
                <div className="sepratemeal">
                  <div className="carbs">
                    <h3>Carbs</h3>
                    <select  onChange={(e) => handleCarbsSelect(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Rice">Rice</option>
                      <option value="Pasta">Pasta</option>
                    </select>
                  </div>
                  <div className="protien">
                    <h3>Protein</h3>
                    <select  onChange={(e) => handleProteinSelect(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Yogurt">Yogurt</option>
                    </select>
                  </div>
                </div>

                {/* Paratha Meal */}
                <div className="parathameal">
                  <div className="meal1">
                    <h3>Meal1</h3>
                    <select onChange={(e) => handleMeal1Select(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Aloo Paratha">Aloo Paratha</option>
                      <option value="Salad">Salad</option>
                    </select>
                  </div>
                  <div className="meal2">
                    <h3>Meal2</h3>
                    <select onChange={(e) => handleMeal2Select(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Methi Paratha">Methi Paratha</option>
                      <option value="Paneer Bhurji">Paneer Bhurji</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Display selected meal details */}

              <div className="select-meal">
                  {selectedMeal && (
                    <div>
                      <h4>{selectedMeal.name}</h4>
                      <p>Calories: {selectedMeal.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories}  />
                        <FaMinus className='minus' onClick={decreaseCalories}  />
                      </div>
                      <p>Grams: {selectedMeal.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams}  />
                      </div>
                      <div className="quantity">
                      <h4>One Pot Meal: {selectedMeal.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>

                    {/* Display quantity in bowl for selectedMeal */}
                    <div className="bowl-display">
                        <p>Quantity: {selectedMeal?.quantity || 1}x</p>
                    </div>
                    </div>
                  )}

                  {selectedCarbs && selectedProtein && (
                    <div>
                      <h4>{selectedCarbs.name} + {selectedProtein.name}</h4>
                      <p>Calories: {selectedCarbs.calories} + {selectedProtein.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus'onClick={decreaseCalories} />
                      </div>
                      <p>Grams: {selectedCarbs.grams} + {selectedProtein.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams} />
                      </div>
                      
                      <div className="quantity">
                      <h4>Carbs: {selectedCarbs.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedCarbs?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('carbs', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="quantity">
                      <h4>Protein: {selectedProtein.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedProtein?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('protein', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="bowl-display">
                        <p>Quantity: {selectedProtein.quantity || 1}x</p>
                      </div>
                    </div>
                  )}

                  {selectedMeal1 && selectedMeal2 && (
                    <div>
                      <h4>{selectedMeal1.name} + {selectedMeal2.name}</h4>
                      <p>Calories: {selectedMeal1.calories} + {selectedMeal2.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus' onClick={decreaseCalories} />
                      </div>
                      <p>Grams: {selectedMeal1.grams} + {selectedMeal2.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus' onClick={decreaseGrams} />
                      </div>
                      <div className="quantity">
                      <h4>Meal1: {selectedMeal1.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal1?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal1', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="quantity">
                      <h4>Meal2: {selectedMeal2.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal2?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal2', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="bowl-display">
                        <p>Quantity: {selectedMeal2.quantity || 1}x</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

           {/* evening snacks */}
           <div className="card">
            <h2 onClick={toggleEveningSnacksMealOptions} >Snacks</h2>
            <img src="assets/images/smoothie-3193660_1280.jpg" alt="not found" />
            <div className="meal-details" style={{ display: showEveningSnacksMealDetails ? 'block' : 'none' }} >
                {filteredMeals.length > 0 ? (
                filteredMeals.map((meal, index) => (
                    <div key={index}>
                    <h3>{meal.name}</h3>
                    <div className="quantity-adjustment">
                        <div className="flex-bowl">
                            <img src="assets/images/bowl.png" alt="not found" className='bowl-img' />
                            <p>Grams:  {selectedMealInfo.grams || meal.details?.grams || 'N/A'}</p>
                        </div>
                        <div className="flex-quantity">
                            <p onClick={() => handleQuantityChange(1.5, meal)}>*1.5</p>
                            <p onClick={() => handleQuantityChange(2, meal)}>*2</p>
                            <p onClick={() => handleQuantityChange(3, meal)}>*3</p>
                        </div>
                     </div>
                     {/* Display the selected quantity at the bottom */}
                     {selectedMealInfo.quantity > 1 && (
                        <div className="quantity-display">
                            <p>Quantity: {selectedMealInfo.quantity}</p>
                        </div>
                     )}
                    </div>
                ))
                ) : searchQuery ? (
                <p>No meals found</p> // Show this message when no meals match the search query
                ) : (
                <p>Search for meals to see details.</p> // Show this message when search query is empty
                )}
            </div>
            <div className="search-box">
                <input type="text" value={eveningsnacksSearchQuery} onChange={handleEveningSnacksSearchChange}  placeholder='Search meal..' />
            </div>
           

            {/* Dropdown options */}
            {eveningsnacksMeal && (
            <div className="meal-options" onClick={(e) => e.stopPropagation()}>
              <div className="options">
                
                {/* One Pot Meal */}
                <div className="onepotmeal">
                  <h3>One Pot Meal</h3>
                  <select onChange={(e) => handleOnePotMealSelect(e.target.value)}>
                    <option value="">Select a Meal</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Oats">Oats</option>
                  </select>
                </div>
               
              </div>

              {/* Display selected meal details */}

              <div className="select-meal">
                  {selectedMeal && (
                    <div>
                      <h4>{selectedMeal.name}</h4>
                      <p>Calories: {selectedMeal.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories}  />
                        <FaMinus className='minus' onClick={decreaseCalories}  />
                      </div>
                      <p>Grams: {selectedMeal.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams}  />
                      </div>
                      <div className="quantity">
                      <h4>One Pot Meal: {selectedMeal.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>

                    {/* Display quantity in bowl for selectedMeal */}
                    <div className="bowl-display">
                        <p>Quantity: {selectedMeal?.quantity || 1}x</p>
                    </div>
                    </div>
                  )}
                 
                </div>
              </div>
            )}
          </div>

           {/* lunch */}
           <div className="card">
            <h2 onClick={toggleDinnerMealOptions} >Dinner</h2>
            <img src="assets/images/vegetable-skewer-3317060_1280.jpg" alt="not found" />
            <div className="meal-details" style={{ display: showDinnerMealDetails ? 'block' : 'none' }} >
                {filteredMeals.length > 0 ? (
                filteredMeals.map((meal, index) => (
                    <div key={index}>
                    <h3>{meal.name}</h3>
                    <div className="quantity-adjustment">
                        <div className="flex-bowl">
                            <img src="assets/images/bowl.png" alt="not found" className='bowl-img' />
                            <p>Grams:  {selectedMealInfo.grams || meal.details?.grams || 'N/A'}</p>
                        </div>
                        <div className="flex-quantity">
                            <p onClick={() => handleQuantityChange(1.5, meal)}>*1.5</p>
                            <p onClick={() => handleQuantityChange(2, meal)}>*2</p>
                            <p onClick={() => handleQuantityChange(3, meal)}>*3</p>
                        </div>
                     </div>
                     {/* Display the selected quantity at the bottom */}
                     {selectedMealInfo.quantity > 1 && (
                        <div className="quantity-display">
                            <p>Quantity: {selectedMealInfo.quantity}</p>
                        </div>
                     )}
                    </div>
                ))
                ) : searchQuery ? (
                <p>No meals found</p> // Show this message when no meals match the search query
                ) : (
                <p>Search for meals to see details.</p> // Show this message when search query is empty
                )}
            </div>
            <div className="search-box">
                <input type="text" value={dinnerSearchQuery} onChange={handleDinnerSearchChange}  placeholder='Search meal..' />
            </div>
           

            {/* Dropdown options */}
            {dinnerMeal && (
            <div className="meal-options" onClick={(e) => e.stopPropagation()}>
              <div className="options">
                
                {/* One Pot Meal */}
                <div className="onepotmeal">
                  <h3>One Pot Meal</h3>
                  <select onChange={(e) => handleOnePotMealSelect(e.target.value)}>
                    <option value="">Select a Meal</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Oats">Oats</option>
                  </select>
                </div>
                
                {/* Separate Meal */}
                <div className="sepratemeal">
                  <div className="carbs">
                    <h3>Carbs</h3>
                    <select  onChange={(e) => handleCarbsSelect(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Rice">Rice</option>
                      <option value="Pasta">Pasta</option>
                    </select>
                  </div>
                  <div className="protien">
                    <h3>Protein</h3>
                    <select  onChange={(e) => handleProteinSelect(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Yogurt">Yogurt</option>
                    </select>
                  </div>
                </div>

                {/* Paratha Meal */}
                <div className="parathameal">
                  <div className="meal1">
                    <h3>Meal1</h3>
                    <select onChange={(e) => handleMeal1Select(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Aloo Paratha">Aloo Paratha</option>
                      <option value="Salad">Salad</option>
                    </select>
                  </div>
                  <div className="meal2">
                    <h3>Meal2</h3>
                    <select onChange={(e) => handleMeal2Select(e.target.value)}>
                      <option value="">Select a Meal</option>
                      <option value="Methi Paratha">Methi Paratha</option>
                      <option value="Paneer Bhurji">Paneer Bhurji</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Display selected meal details */}

              <div className="select-meal">
                  {selectedMeal && (
                    <div>
                      <h4>{selectedMeal.name}</h4>
                      <p>Calories: {selectedMeal.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories}  />
                        <FaMinus className='minus' onClick={decreaseCalories}  />
                      </div>
                      <p>Grams: {selectedMeal.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams}  />
                      </div>
                      <div className="quantity">
                      <h4>One Pot Meal: {selectedMeal.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>

                    {/* Display quantity in bowl for selectedMeal */}
                    <div className="bowl-display">
                        <p>Quantity: {selectedMeal?.quantity || 1}x</p>
                    </div>
                    </div>
                  )}

                  {selectedCarbs && selectedProtein && (
                    <div>
                      <h4>{selectedCarbs.name} + {selectedProtein.name}</h4>
                      <p>Calories: {selectedCarbs.calories} + {selectedProtein.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus'onClick={decreaseCalories} />
                      </div>
                      <p>Grams: {selectedCarbs.grams} + {selectedProtein.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseGrams} />
                        <FaMinus className='minus' onClick={decreaseGrams} />
                      </div>
                      
                      <div className="quantity">
                      <h4>Carbs: {selectedCarbs.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedCarbs?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('carbs', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="quantity">
                      <h4>Protein: {selectedProtein.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedProtein?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('protein', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="bowl-display">
                        <p>Quantity: {selectedProtein.quantity || 1}x</p>
                      </div>
                    </div>
                  )}

                  {selectedMeal1 && selectedMeal2 && (
                    <div>
                      <h4>{selectedMeal1.name} + {selectedMeal2.name}</h4>
                      <p>Calories: {selectedMeal1.calories} + {selectedMeal2.calories}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus' onClick={decreaseCalories} />
                      </div>
                      <p>Grams: {selectedMeal1.grams} + {selectedMeal2.grams}</p>
                      <div className="icons-action">
                        <FaPlus className='plus' onClick={increaseCalories} />
                        <FaMinus className='minus' onClick={decreaseGrams} />
                      </div>
                      <div className="quantity">
                      <h4>Meal1: {selectedMeal1.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal1?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal1', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="quantity">
                      <h4>Meal2: {selectedMeal2.name}</h4>
                      <img src="assets/images/line.png" alt="not found" className='line-img' />
                      <div className="flex-bowl">
                        <img src="assets/images/bowl.png" alt="not found" className='img-bowl' />
                        <input
                        type="number"
                        value={selectedMeal2?.quantity || 1} // Dynamically set the correct meal quantity
                        onChange={(e) => updateQuantity('meal2', e.target.value)} // Pass the correct mealType
                        min="1"
                        />
                        </div>
                      </div>
                      <div className="bowl-display">
                        <p>Quantity: {selectedMeal2.quantity || 1}x</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
