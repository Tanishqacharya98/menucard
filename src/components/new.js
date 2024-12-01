import React, { useState } from 'react';
import './mix.css';

function MealSelector() {
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

const handleToggleAllMeals = () => {
  setShowAllMeals((prevShowAllMeals) => !prevShowAllMeals);
};
const [showSnacksMeal, setShowSnacksMeal] = useState(false);

const handleToggleSnacksMeal = () => {
  setShowSnacksMeal((prevShowSnacksMeal) => !prevShowSnacksMeal);
};

const [showLunchMeals, setShowLunchMeals] = useState(false);

const handleToggleLunchMeals = () => {
  setShowLunchMeals((prevShowLunchMeals) => !prevShowLunchMeals);
};

const [showEveningSnacks, setShowEveningSnacks] = useState(false);

const handleToggleEveningSnacks = () => {
  setShowEveningSnacks((prevShowEveningSnacks) => !prevShowEveningSnacks);
};

const [showDinner, setShowDinner] = useState(false);

const handleToggleDinner = () => {
  setShowDinner((prevShowDinner) => !prevShowDinner);
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
    setActiveTab("lunchParathaAndGreens");
  };

  const handleLunchParathaProteinChange = (event) => {
    setLunchParathaProtein(event.target.value);
    setActiveTab("lunchParathaAndGreens");
  };

  const handleDinnerParathaCarbChange = (event) => {
    setDinnerParathaCarb(event.target.value);
    setActiveTab("dinnerParathaAndGreens");
  };

  const handleDinnerParathaProteinChange = (event) => {
    setDinnerParathaProtein(event.target.value);
    setActiveTab("dinnerParathaAndGreens");
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
  
  return (

    <>
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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>



      <div className='breakfast'>
      <h1 onClick={handleToggleAllMeals} style={{ cursor: 'pointer' }}>
      Breakfast {showAllMeals }
    </h1>
      <br/>
      <div className='tabs'>

        {/* One-Pot Meal Section */}
        {showAllMeals && (

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
        )}

        {/* Separate Meal Section */}
        {showAllMeals && (

        <div className='separate-meal'>
          <h2>Separate Meal</h2>
          <div>
            <label>Carbs: </label>
            <select value={separateCarb} onChange={handleSeparateCarbChange}>
              <option value="">--Select Carb--</option>
              <option value="Rice">Rice</option>
              <option value="Idli">Idli</option>
              <option value="Dosa">Dosa</option>
            </select>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Protein: </label>
            <select value={separateProtein} onChange={handleSeparateProteinChange}>
              <option value="">--Select Protein--</option>
              <option value="Chicken">Chicken</option>
              <option value="Paneer">Paneer</option>
              <option value="Sambhar">Sambhar</option>
            </select>
          </div>
        </div>
        )}
        {/* Paratha & Greens Section */}
        {showAllMeals && (

        <div className='paratha-and-greens'>
          <h2>Paratha & Greens</h2>
          <div>
            <label>Carbs: </label>
            <select value={parathaCarb} onChange={handleParathaCarbChange}>
              <option value="">--Select Carb--</option>
              <option value="Rice">Rice</option>
              <option value="Idli">Idli</option>
              <option value="Dosa">Dosa</option>
            </select>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Protein: </label>
            <select value={parathaProtein} onChange={handleParathaProteinChange}>
              <option value="">--Select Protein--</option>
              <option value="Chicken">Chicken</option>
              <option value="Paneer">Paneer</option>
              <option value="Sambhar">Sambhar</option>
            </select>
          </div>
        </div>
        )}
      </div>

      {/* Unified Display for Selected Meals - Shows only one section's details at a time */}
      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        <h2>Selected Meal Details</h2>
        {activeTab === "onePotMeal" && onePotMeal && (
          <p>One-Pot Meal: {onePotMeal}</p>
        )}
        {activeTab === "separateMeal" && (
          separateCarb && separateProtein ? (
            <p>Separate Meal: {separateCarb} and {separateProtein}</p>
          ) : (
            <p>Please select both carb and protein for the separate meal</p>
          )
        )}
        {activeTab === "parathaAndGreens" && (
          parathaCarb && parathaProtein ? (
            <p>Paratha & Greens: {parathaCarb} and {parathaProtein}</p>
          ) : (
            <p>Please select both carb and protein for Paratha & Greens</p>
          )
        )}
        {!activeTab && (
          <p>Please select a meal to see details</p>
        )}
      </div>
    </div>
<br/>
    {/* snacks section */}

    <div className='snacks'>
    {/* Make the Snacks header clickable */}
    <h1 onClick={handleToggleSnacksMeal} style={{ cursor: 'pointer' }}>
      Snacks {showSnacksMeal }
    </h1>
    <br />

    <div className='tabs'>
      {/* Snacks Meal Section */}
      {showSnacksMeal && (
        <div className='one-pot-meal'>
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
      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        <h2>Selected Meal Details</h2>
        {activeTab === "selectMeal" && selectMeal&& (
          <p>One-Pot Meal: {selectMeal}</p>
        )}
        {/* {activeTab === "separateMeal" && (
          separateCarb && separateProtein ? (
            <p>Separate Meal: {separateCarb} and {separateProtein}</p>
          ) : (
            <p>Please select both carb and protein for the separate meal</p>
          )
        )}
        {activeTab === "parathaAndGreens" && (
          parathaCarb && parathaProtein ? (
            <p>Paratha & Greens: {parathaCarb} and {parathaProtein}</p>
          ) : (
            <p>Please select both carb and protein for Paratha & Greens</p>
          )
        )} */}
        {!activeTab && (
          <p>Please select a meal to see details</p>
        )}
      </div>
    </div>
<br/>
             {/* Lunch section */}

             
  <div className='lunch'>
    {/* Make the Lunch header clickable */}
    <h1 onClick={handleToggleLunchMeals} style={{ cursor: 'pointer' }}>
      Lunch {showLunchMeals }
    </h1>
    <br />

    <div className='tabs'>
      {/* One-Pot Meal Section */}
      {showLunchMeals && (
        <div className='one-pot-meal'>
          <h2>OnePot Meal</h2>
          <div>
            <label>Select meal: </label>
            <select value={lunchOnePotMeal} onChange={handleLunchOnePotMeal}>
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
            <select value={lunchSeparateCarb} onChange={handleLunchSeparateCarbChange}>
              <option value="">--Select Carb--</option>
              <option value="Rice">Rice</option>
              <option value="Idli">Idli</option>
              <option value="Dosa">Dosa</option>
            </select>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Protein: </label>
            <select value={lunchSeparateProtein} onChange={handleLunchSeparateProteinChange}>
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
            <select value={lunchParathaCarb} onChange={handleLunchParathaCarbChange}>
              <option value="">--Select Carb--</option>
              <option value="Rice">Rice</option>
              <option value="Idli">Idli</option>
              <option value="Dosa">Dosa</option>
            </select>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Green veg: </label>
            <select value={lunchParathaProtein} onChange={handleLunchParathaProteinChange}>
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
    <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
      <h2>Selected Meal Details</h2>
      {activeTab === "lunchOnePotMeal" && lunchOnePotMeal && (
        <p>One-Pot Meal: {lunchOnePotMeal}</p>
      )}
      {activeTab === "lunchSeparateMeal" && (
        lunchSeparateCarb && lunchSeparateProtein ? (
          <p>Separate Meal: {lunchSeparateCarb} and {lunchSeparateProtein}</p>
        ) : (
          <p>Please select both carb and protein for the separate meal</p>
        )
      )}
      {activeTab === "lunchParathaAndGreens" && (
        lunchParathaCarb && lunchParathaProtein ? (
          <p>Paratha & Greens: {lunchParathaCarb} and {lunchParathaProtein}</p>
        ) : (
          <p>Please select both carb and protein for Paratha & Greens</p>
        )
      )}
      {!activeTab && (
        <p>Please select a meal to see details</p>
      )}
    </div>
  </div>

<br/>


                   {/* Evening snacks */}

                   <div className='evening-snacks'>
    {/* Make the Evening Snacks header clickable */}
    <h1 onClick={handleToggleEveningSnacks} style={{ cursor: 'pointer' }}>
      Evening Snacks {showEveningSnacks}
    </h1>
    <br />

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
    <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
      <h2>Selected Meal Details</h2>
      {activeTab === "eveningSelectMeal" && eveningSelectMeal && (
        <p>Meal: {eveningSelectMeal}</p>
      )}
      {!activeTab && (
        <p>Please select a meal to see details</p>
      )}
    </div>
  </div> 
    <br/>     

                     {/* Dinner */}
           
                     <div className='dinner'>
    {/* Make the Dinner header clickable */}
    <h1 onClick={handleToggleDinner} style={{ cursor: 'pointer' }}>
      Dinner {showDinner}
    </h1>
    <br />

    <div className='tabs'>
      {/* Dinner Meal Sections */}
      {showDinner && (
        <>
          {/* One-Pot Meal Section */}
          <div className='one-pot-meal'>
            <h2>OnePot Meal</h2>
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
    <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
      <h2>Selected Meal Details</h2>
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
      {activeTab === "dinnerParathaAndGreens" && (
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

    </div>
    </>
  );
}

export default MealSelector;
