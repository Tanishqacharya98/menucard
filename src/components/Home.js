import React, { useEffect, useRef, useState } from 'react';
import './mix.css';

function Home() {
  // State for One-Pot Meal
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDayMeal, setSelectedDayMeal] = useState('null'); // Track the meal for the selected day


  const [onePotMeal, setOnePotMeal] = useState("");
  const[selectMeal,setSelectMeal]=useState('')
  const[lunchOnePotMeal,setLunchOnePotMeal]=useState("")
  const[eveningSelectMeal,setEveningSelectMeal]=useState('')
  const[dinnerOnePotMeal,setDinnerOnePotMeal]=useState("")

  
  // State for Separate Meal selections
  const [separateCarb, setSeparateCarb] = useState("");
  const [separateProtein, setSeparateProtein] = useState("");

  const [lunchSeparateCarb, setLunchSeparateCarb] = useState("");
  const [lunchSeparateProtein, setLunchSeparateProtein] = useState("");

  const [dinnerSeparateCarb, setDinnerSeparateCarb] = useState("");
  const [dinnerSeparateProtein, setDinnerSeparateProtein] = useState("");

  // State for Paratha & Greens selections
  const [parathaCarb, setParathaCarb] = useState("");
  const [parathaProtein, setParathaProtein] = useState("");

  const [lunchParathaCarb, setLunchParathaCarb] = useState("");
  const [lunchParathaProtein, setLunchParathaProtein] = useState("");

  const [dinnerParathaCarb, setDinnerParathaCarb] = useState("");
  const [dinnerParathaProtein, setDinnerParathaProtein] = useState("");
  
  // State to track active tab
  const [activeTab, setActiveTab] = useState("onePotMeal");

  const days = Array.from({ length: 30 }, (_, i) => i + 1);


  const [showAllMeals, setShowAllMeals] = useState(false);

  // scroll start
  const mealListRef = useRef(null);

  const [activeMealCategory, setActiveMealCategory] = useState(null);

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

const handleToggleAllMeals = () => {
  setShowAllMeals((prevShowAllMeals) => !prevShowAllMeals);
  setActiveMealCategory("breakfast");  // set active to breakfast when clicked
  setActiveTab('');
};
const [showSnacksMeal, setShowSnacksMeal] = useState(false);

const handleToggleSnacksMeal = () => {
  setShowSnacksMeal((prevShowSnacksMeal) => !prevShowSnacksMeal);
  setActiveMealCategory("selectMeal");  // set active to breakfast when clicked
  setActiveTab('');
};

const [showLunchMeals, setShowLunchMeals] = useState(false);

const handleToggleLunchMeals = () => {
  setShowLunchMeals((prevShowLunchMeals) => !prevShowLunchMeals);
  setActiveMealCategory("lunch");  // set active to breakfast when clicked
  setActiveTab('');
};

const [showEveningSnacks, setShowEveningSnacks] = useState(false);

const handleToggleEveningSnacks = () => {
  setShowEveningSnacks((prevShowEveningSnacks) => !prevShowEveningSnacks);
  setActiveMealCategory("eveningsnacks");  // set active to breakfast when clicked
  setActiveTab('');
};

const [showDinner, setShowDinner] = useState(false);

const handleToggleDinner = () => {
  setShowDinner((prevShowDinner) => !prevShowDinner);
  setActiveMealCategory("dinner");  // set active to breakfast when clicked
  setActiveTab('');
};


  // Handlers for each section with tab activation
  const handleOnePotMealChange = (event) => {
    setOnePotMeal(event.target.value);
    setActiveTab("onePotMeal");
  };

const handleLunchOnePotMeal=(event)=>{
  setLunchOnePotMeal(event.target.value)
  setActiveTab("lunchOnePotMeal")
}

const handleSelectMealChange = (event)=>{
  setSelectMeal(event.target.value)
  setActiveTab("selectMeal")
}

const handleSelectEveningMealChange = (event)=>{
  setEveningSelectMeal(event.target.value)
  setActiveTab("eveningSelectMeal")
}

const handleDinnerOnePotMeal=(event)=>{
  setDinnerOnePotMeal(event.target.value)
  setActiveTab("dinnerOnePotMeal")
}

  const handleSeparateCarbChange = (event) => {
    setSeparateCarb(event.target.value);
    setActiveTab("separateMeal");
  };

  const handleSeparateProteinChange = (event) => {
    setSeparateProtein(event.target.value);
    setActiveTab("separateMeal");
  };


  const handleLunchSeparateCarbChange = (event) => {
    setLunchSeparateCarb(event.target.value);
    setActiveTab("lunchSeparateMeal");
  };

  const handleLunchSeparateProteinChange = (event) => {
    setLunchSeparateProtein(event.target.value);
    setActiveTab("lunchSeparateMeal");
  };

  const handleDinnerSeparateCarbChange = (event) => {
    setDinnerSeparateCarb(event.target.value);
    setActiveTab("lunchSeparateMeal");
  };

  const handleDinnerSeparateProteinChange = (event) => {
    setDinnerSeparateProtein(event.target.value);
    setActiveTab("dinnerSeparateMeal");
  };


  const handleParathaCarbChange = (event) => {
    setParathaCarb(event.target.value);
    setActiveTab("parathaAndGreens");
  };

  const handleParathaProteinChange = (event) => {
    setParathaProtein(event.target.value);
    setActiveTab("parathaAndGreens");
  };

  const handleLunchParathaCarbChange = (event) => {
    setLunchParathaCarb(event.target.value);
    setActiveTab("lunchparathaAndGreens");
  };

  const handleLunchParathaProteinChange = (event) => {
    setLunchParathaProtein(event.target.value);
    setActiveTab("lunchparathaAndGreens");
  };

  const handleDinnerParathaCarbChange = (event) => {
    setDinnerParathaCarb(event.target.value);
    setActiveTab("dinnerparathaAndGreens");
  };

  const handleDinnerParathaProteinChange = (event) => {
    setDinnerParathaProtein(event.target.value);
    setActiveTab("dinnerparathaAndGreens");
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  
    // Logic for assigning a meal from one of the three categories
    const randomMealType = Math.floor(Math.random() * 3);  // Randomly select one of the three meal types (0, 1, or 2)
  
    let meal;
  
    switch (randomMealType) {
      case 0:
        // One-Pot Meal
        meal = "Rice"; // Default meal, you can change this as per your logic
        break;
      case 1:
        // Separate Meal (Carb + Protein)
        meal = "Rice + Chicken"; // Example combo, adjust according to your logic
        break;
      case 2:
        // Paratha & Greens (Carb + Protein)
        meal = "Idli + Paneer"; // Example combo, adjust according to your logic
        break;
      default:
        meal = "Rice"; // Default meal
        break;
    }
  
    setSelectedDayMeal(meal); // Assign meal for the selected day
  };

    // Define calories and grams for each meal type
    const mealDetails = {
      onePotMeal: {
        name: "Rice",
        calories: 200,
        grams: 150,
      },
      separateMeal: {
        rice: {
          name: "Rice",
          calories: 200,
          grams: 150,
        },
        chicken: {
          name: "Chicken",
          calories: 300,
          grams: 200,
        },
      },
      parathaAndGreens: {
        paratha: {
          name: "Paratha",
          calories: 150,
          grams: 100,
        },
        paneer: {
          name: "Paneer",
          calories: 250,
          grams: 150,
        },
        dosa: {
          name: "Dosa",
          calories: 150,
          grams: 150,
        },
      },
    };
// calories and grams end  /
  
  return (

    <>
    <div className="main-container">
    <div className="title">
      <h1>Fitness</h1>
    </div>
<div className="day-selector">
  <div className="days-container">
    {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
      <button
        key={day}
        onClick={() => handleDayClick(day)}
        className={`day-button ${selectedDay === day ? 'active' : ''}`}
      >
        Day {day}
      </button>
    ))}
  </div>
</div>

        <br/>
        <br/>
        <br/>
    <div className='allmeal'  ref={mealListRef}  style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>



      <div className='breakfast'>
      <h1 onClick={handleToggleAllMeals} style={{ cursor: 'pointer' }} >
      Breakfast {showAllMeals}
      <img src="assets/images/breakfast-1804457_1280.jpg" alt="not found" className='main-img'  />
    </h1>
      <br/>
      {activeMealCategory === "breakfast" && showAllMeals && (
        <div className="tabs-container">
  <div className='tabs'>
    {/* One-Pot Meal Section */}
    <div className='one-pot-meal'>
      <h2>One-Pot Meal</h2>
      <div>
        <label>Select meal: </label>
        <select value={onePotMeal} onChange={handleOnePotMealChange}>
          <option value="Rice">Rice</option>
          <option value="Idli">Idli</option>
          <option value="Dosa">Dosa</option>
        </select>
      </div>
    </div>

    {/* Separate Meal Section */}
    <div className='separate-meal'>
      <h2>Separate Meal</h2>
      <div>
        <label>Carbs: </label>
        <select value={separateCarb} onChange={handleSeparateCarbChange}>
          <option value="">Select Carb</option>
          <option value="Rice">Rice</option>
          <option value="Idli">Idli</option>
          <option value="Dosa">Dosa</option>
        </select>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>Protein: </label>
        <select value={separateProtein} onChange={handleSeparateProteinChange}>
          <option value="">Select Protein</option>
          <option value="Chicken">Chicken</option>
          <option value="Paneer">Paneer</option>
          <option value="Sambhar">Sambhar</option>
        </select>
      </div>
    </div>

    {/* Paratha & Greens Section */}
    <div className='paratha-and-greens'>
      <h2>Paratha & Greens</h2>
      <div>
        <label>Carbs: </label>
        <select value={parathaCarb} onChange={handleParathaCarbChange}>
          <option value="">Select Carb</option>
          <option value="Rice">Rice</option>
          <option value="Idli">Idli</option>
          <option value="Dosa">Dosa</option>
        </select>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>Protein: </label>
        <select value={parathaProtein} onChange={handleParathaProteinChange}>
          <option value="">Select Protein</option>
          <option value="Chicken">Chicken</option>
          <option value="Paneer">Paneer</option>
          <option value="Sambhar">Sambhar</option>
        </select>
      </div>
    </div>
  </div>

              
  <div className="active-meal">
    {activeTab === "onePotMeal" && onePotMeal && (
      <div>
        <p>One-Pot Meal: {onePotMeal}</p>
        <p>Calories: {mealDetails.onePotMeal.calories} kcal</p>
        <p>Grams: {mealDetails.onePotMeal.grams} g</p>
      </div>
    )}

    {activeTab === "separateMeal" && separateCarb && separateProtein && (
      <div>
        <p>Separate Meal: {separateCarb} and {separateProtein}</p>
        <p>Calories: {mealDetails.separateMeal[separateCarb.toLowerCase()].calories + mealDetails.separateMeal[separateProtein.toLowerCase()].calories} kcal</p>
        <p>Grams: {mealDetails.separateMeal[separateCarb.toLowerCase()].grams + mealDetails.separateMeal[separateProtein.toLowerCase()].grams} g</p>
      </div>
    )}

    {activeTab === "parathaAndGreens" && parathaCarb && parathaProtein && (
  <div>
    <p>Paratha & Greens: {parathaCarb} and {parathaProtein}</p>
    <p>
      Calories: {
        (mealDetails.parathaAndGreens[parathaCarb.toLowerCase()]?.calories || 0) + 
        (mealDetails.parathaAndGreens[parathaProtein.toLowerCase()]?.calories || 0)
      } kcal
    </p>
    <p>
      Grams: {
        (mealDetails.parathaAndGreens[parathaCarb.toLowerCase()]?.grams || 0) + 
        (mealDetails.parathaAndGreens[parathaProtein.toLowerCase()]?.grams || 0)
      } g
    </p>
  </div>
)}


    {!activeTab && (
      <p>Please select a meal to see details</p>
    )}
  </div>
                 
</div>

)}

      {/* Unified Display for Selected Meals - Shows only one section's details at a time */}
     
    </div>
<br/>
    {/* snacks section */}

    <div className="snacks">
      {/* Make the Snacks header clickable */}
      <h1 onClick={handleToggleSnacksMeal} style={{ cursor: 'pointer' }}>
        Snacks {showSnacksMeal}
        <img
          src="assets/images/sandwich-932646_1280.jpg"
          alt="Snacks"
          className="main-img"
        />
      </h1>
      <br />

      {activeMealCategory === 'selectMeal' && showSnacksMeal && (
        <div className="tabs-container">
          <div className="tabs">
            {/* Snacks Meal Section */}
            {showSnacksMeal && (
              <div className="one-pot-meal">
                <h2>Snacks Meals</h2>
                <div>
                  <label>Select meal: </label>
                  <select value={selectMeal} onChange={handleSelectMealChange}>
                    <option value="Rice">Rice</option>
                    <option value="Idli">Idli</option>
                    <option value="Dosa">Dosa</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Unified Display for Selected Meals - Shows only one section's details at a time */}
          <div className="active-meal">
            {/* Display the details of the selected meal */}
            {activeTab === 'selectMeal' && selectMeal && (
              <p>Snacks Meal: {selectMeal}</p>
            )}

            {!activeTab && <p>Please select a meal to see details</p>}
          </div>
        </div>
      )}
    </div>
<br/>
             {/* Lunch section */}

             
             <div className='lunch'>
      {/* Make the Lunch header clickable */}
      <h1 onClick={handleToggleLunchMeals} style={{ cursor: 'pointer' }}>
        Lunch {showLunchMeals}
        <img src="assets/images/vegetable-skewer-3317060_1280.jpg" alt="not found" className='main-img' />
      </h1>
      <br />

      {activeMealCategory === "lunch" && showLunchMeals && (
        <div className="tabs-container">
          <div className='tabs'>
            {/* One-Pot Meal Section */}
            {showLunchMeals && (
              <div className='one-pot-meal'>
                <h2>One-Pot Meal</h2>
                <div>
                  <label>Select meal: </label>
                  <select value={onePotMeal} onChange={handleLunchOnePotMeal}>
                    <option value="Rice">Rice</option>
                    <option value="Idli">Idli</option>
                    <option value="Dosa">Dosa</option>
                  </select>
                </div>
              </div>
            )}

            {/* Separate Meal Section */}
            {showLunchMeals && (
              <div className='separate-meal'>
                <h2>Separate Meal</h2>
                <div>
                  <label>Carbs: </label>
                  <select value={separateCarb} onChange={handleLunchSeparateCarbChange}>
                    <option value="">--Select Carb--</option>
                    <option value="Rice">Rice</option>
                    <option value="Idli">Idli</option>
                    <option value="Dosa">Dosa</option>
                  </select>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <label>Protein: </label>
                  <select value={separateProtein} onChange={handleLunchSeparateProteinChange}>
                    <option value="">--Select Protein--</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Paneer">Paneer</option>
                    <option value="Sambhar">Sambhar</option>
                  </select>
                </div>
              </div>
            )}

            {/* Paratha & Greens Section */}
            {showLunchMeals && (
              <div className='paratha-and-greens'>
                <h2>Paratha & Greens</h2>
                <div>
                  <label>Paratha: </label>
                  <select value={parathaCarb} onChange={handleLunchParathaCarbChange}>
                    <option value="">--Select Carb--</option>
                    <option value="Rice">Rice</option>
                    <option value="Idli">Idli</option>
                    <option value="Dosa">Dosa</option>
                  </select>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <label>Green veg: </label>
                  <select value={parathaProtein} onChange={handleLunchParathaProteinChange}>
                    <option value="">--Select Protein--</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Paneer">Paneer</option>
                    <option value="Sambhar">Sambhar</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Unified Display for Selected Meals */}
          <div className="active-meal">
            {/* One-Pot Meal */}
            {activeTab === "onePotMeal" && onePotMeal && (
              <div>
                <p>One-Pot Meal: {onePotMeal}</p>
                <p>Calories: {mealDetails.onePotMeal[onePotMeal.toLowerCase()]?.calories} kcal</p>
                <p>Grams: {mealDetails.onePotMeal[onePotMeal.toLowerCase()]?.grams} g</p>
              </div>
            )}

            {/* Separate Meal */}
            {activeTab === "separateMeal" && separateCarb && separateProtein && (
              <div>
                <p>Separate Meal: {separateCarb} and {separateProtein}</p>
                <p>
                  Calories: {mealDetails.separateMeal[separateCarb.toLowerCase()]?.calories + mealDetails.separateMeal[separateProtein.toLowerCase()]?.calories} kcal
                </p>
                <p>
                  Grams: {mealDetails.separateMeal[separateCarb.toLowerCase()]?.grams + mealDetails.separateMeal[separateProtein.toLowerCase()]?.grams} g
                </p>
              </div>
            )}

            {/* Paratha & Greens */}
            {activeTab === "parathaAndGreens" && parathaCarb && parathaProtein && (
              <div>
                <p>Paratha & Greens: {parathaCarb} and {parathaProtein}</p>
                <p>
                  Calories: {(mealDetails.parathaAndGreens[parathaCarb.toLowerCase()]?.calories || 0) + (mealDetails.parathaAndGreens[parathaProtein.toLowerCase()]?.calories || 0)} kcal
                </p>
                <p>
                  Grams: {(mealDetails.parathaAndGreens[parathaCarb.toLowerCase()]?.grams || 0) + (mealDetails.parathaAndGreens[parathaProtein.toLowerCase()]?.grams || 0)} g
                </p>
              </div>
            )}

            {/* Default message */}
            {!activeTab && <p>Please select a meal to see details</p>}
          </div>
        </div>
      )}
    </div>

<br/>


 {/* Evening snacks */}

 <div className='evening-snacks'>
      {/* Make the Evening Snacks header clickable */}
      <h1 onClick={handleToggleEveningSnacks} style={{ cursor: 'pointer' }}>
        Evening Snacks {showEveningSnacks}
        <img src="assets/images/ai-generated-8790363_1280.jpg" alt="not found" className='main-img' />
      </h1>
      <br />

      {activeMealCategory === "eveningsnacks" && showAllMeals && showEveningSnacks && (
        <div className="tabs-container">
          <div className='tabs'>
            {/* Evening Snacks Meal Section */}
            {showEveningSnacks && (
              <div className='one-pot-meal'>
                <h2>Evening Snacks Meals</h2>
                <div>
                  <label>Select meal: </label>
                  <select value={eveningSelectMeal} onChange={handleSelectEveningMealChange}>
                    <option value="Rice">Rice</option>
                    <option value="Idli">Idli</option>
                    <option value="Dosa">Dosa</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Unified Display for Selected Meals */}
          <div className='active-meal'>
            {activeTab === "eveningSelectMeal" && eveningSelectMeal && (
              <p>Meal: {eveningSelectMeal}</p>
            )}
            {!activeTab && (
              <p>Please select a meal to see details</p>
            )}
          </div>
        </div>
      )}
    </div>
    <br/>     

{/* Dinner */}
           
<div className='dinner'>
      {/* Make the Dinner header clickable */}
      <h1 onClick={handleToggleDinner} style={{ cursor: 'pointer' }}>
        Dinner {showDinner}
        <img src="assets/images/paneertikka.png" alt="not found" className='main-img' />
      </h1>
      <br />

      {activeMealCategory === 'dinner' && showDinner && (
        <div className="tabs-container">
          <div className='tabs'>
            {/* Dinner Meal Sections */}
            {showDinner && (
              <>
                {/* One-Pot Meal Section */}
                <div className='one-pot-meal'>
                  <h2>One-Pot Meal</h2>
                  <div>
                    <label>Select meal: </label>
                    <select value={dinnerOnePotMeal} onChange={handleDinnerOnePotMeal}>
                      <option value="Rice">Rice</option>
                      <option value="Idli">Idli</option>
                      <option value="Dosa">Dosa</option>
                    </select>
                  </div>
                </div>

                {/* Separate Meal Section */}
                <div className='separate-meal'>
                  <h2>Separate Meal</h2>
                  <div>
                    <label>Carbs: </label>
                    <select value={dinnerSeparateCarb} onChange={handleDinnerSeparateCarbChange}>
                      <option value="">--Select Carb--</option>
                      <option value="Rice">Rice</option>
                      <option value="Idli">Idli</option>
                      <option value="Dosa">Dosa</option>
                    </select>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <label>Protein: </label>
                    <select value={dinnerSeparateProtein} onChange={handleDinnerSeparateProteinChange}>
                      <option value="">--Select Protein--</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Paneer">Paneer</option>
                      <option value="Sambhar">Sambhar</option>
                    </select>
                  </div>
                </div>

                {/* Paratha & Greens Section */}
                <div className='paratha-and-greens'>
                  <h2>Paratha & Greens</h2>
                  <div>
                    <label>Paratha: </label>
                    <select value={dinnerParathaCarb} onChange={handleDinnerParathaCarbChange}>
                      <option value="">--Select Carb--</option>
                      <option value="Rice">Rice</option>
                      <option value="Idli">Idli</option>
                      <option value="Dosa">Dosa</option>
                    </select>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <label>Green veg: </label>
                    <select value={dinnerParathaProtein} onChange={handleDinnerParathaProteinChange}>
                      <option value="">--Select Protein--</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Paneer">Paneer</option>
                      <option value="Sambhar">Sambhar</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Unified Display for Selected Meals */}
          <div className='Select-meal-details active-meal'>
            {activeTab === "dinnerOnePotMeal" && dinnerOnePotMeal && (
              <p>One-Pot Meal: {dinnerOnePotMeal}</p>
            )}
            {activeTab === "dinnerSeparateMeal" && (
              dinnerSeparateCarb && dinnerSeparateProtein ? (
                <p>Separate Meal: {dinnerSeparateCarb} and {dinnerSeparateProtein}</p>
              ) : (
                <p>Please select both carb and protein for the separate meal</p>
              )
            )}
            {activeTab === "dinnerparathaAndGreens" && (
              dinnerParathaCarb && dinnerParathaProtein ? (
                <p>Paratha & Greens: {dinnerParathaCarb} and {dinnerParathaProtein}</p>
              ) : (
                <p>Please select both carb and protein for Paratha & Greens</p>
              )
            )}
            {!activeTab && (
              <p>Please select a meal to see details</p>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;
