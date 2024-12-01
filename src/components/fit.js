import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoIosFitness, IoIosCalendar } from "react-icons/io";
import styled, { keyframes } from 'styled-components';
import { flipInX, slideInLeft, slideInRight } from 'react-animations';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaPlus } from 'react-icons/fa';
import { ImMinus } from 'react-icons/im';

const flipInXAnimation = keyframes`${flipInX}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;

const FlipInXDiv = styled.div`
  animation: 1s ${flipInXAnimation};
`;
const SlideInRightDiv = styled.div`
  animation: 1s ${slideInRightAnimation};
`;
const SlideInLeftDiv = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;

const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${(props) => (props.isActive ? '1' : '0.5')};
  transform: ${(props) => (props.isActive ? 'scale(1.05)' : 'scale(1)')}; &:hover {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    transform: scale(1.10);
  }
`;

const CardContent = styled.div`
  padding: 10px;
  padding-top: 20px;
  font-family: 'Merienda';
  text-align: center;
`;

const CardImage = styled.img`
  width: 150px;
  border-radius: 8px;
  margin: auto;
  margin-top: 20px;
`;

const CardDetails = styled.div`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: ${(props) => (props.isActive ? '10px' : '0')};
  overflow-x: auto;
`;

const MealOptionDetails = styled.div`
  width: 100%;
  padding: 10px;
  ${'' /* background: linear-gradient(135deg, #f6d365 0%, #fda085 25%, #ff77ff 50%, #7a4e7f 75%, #2c3e50 100%); */}
  background: rgb(251,149,149);
  background: linear-gradient(90deg, rgba(251,149,149,0.4963235294117647) 12%, rgba(225,247,142,0.8016456582633054) 86%);
  border-top: 1px solid #ddd;
  text-align: center;
  margin-top: 20px;
`;

const CounterButton = styled.button`
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50px;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 10px;
`;

const Home = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeCard, setActiveCard] = useState(null); 
  const [selectedMeals, setSelectedMeals] = useState({
    breakfast: { meal1: "", meal2: "" },
    lunch: { meal1: "", meal2: "" },
    dinner: { meal1: "", meal2: "" },
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCard(parseInt(entry.target.dataset.index));  // Active card set
          }
        });
      },
      { threshold: 0.5 }  // Card becomes active when half-visible
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const [mealDetails, setMealDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [meals, setMeals] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);
  const [mealPlan, setMealPlan] = useState({});
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const mealTypes = ['breakfast', 'snacks', 'lunch', 'eveningsnacks', 'dinner'];

  // Naya state banayein jo selected meal type ko track karega
const [selectedMealType, setSelectedMealType] = useState(null);

// Jab user ek meal type select kare toh selectedMealType update karein
const handleMealTypeSelect = (mealType) => {
  setSelectedMealType(mealType); // Ab sirf yahi meal type show hoga
};


  useEffect(() => {
    fetchMeals(); 
  }, [page]);


  const containerRef = useRef(null);

  
  

  const fetchMeals = async () => {
    // setLoading(true);
    setTimeout(() => {
      const newMeals = [
        { type: 'Breakfast', onePotMeal: ['Egg', 'Sandwich', 'Oatmeal'], img: 'assets/images/breakfast-1804457_1280.jpg', separateMeal: ['Fruit', 'Yogurt'], paratha_Greens: ['Aloo Paratha', 'Paneer Paratha'] }, 
        { type: 'Snacks', onePotMeal: ['Chips', 'drinks'], img: 'assets/images/drink.png' },
        { type: 'Lunch', onePotMeal: ['Salad', 'Pasta', 'Rice'], img: 'assets/images/fruitsalad.png', separateMeal: ['Chicken', 'Tofu'], paratha_Greens: ['Missi Roti', 'Gobi Paratha'] },
        { type: 'Evening Snacks', onePotMeal: ['Tea'], img: 'assets/images/pancakes-2291908_1280.jpg' },
        { type: 'Dinner', onePotMeal: ['Pizza', 'Burger', 'Pasta'], img: 'assets/images/burger-8933592_1280.jpg', separateMeal: ['Steak', 'Fish'], paratha_Greens: ['Plain Roti', 'Methi Paratha'] },
      ];
      setMeals(newMeals); 
      // setLoading(false);
    }, 1000); 
};


  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const toggleDetails = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleMealSelect = (index, meal, mealType) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [mealType]: meal,
      },
    }));
    setSelectedMealType(mealType);

    const calorieInfo = {
      Egg: { name: 'Egg', calories: 78, protein: 6 },
      Sandwich: { name: 'Sandwich', calories: 300, protein: 12 },
      Oatmeal: { name: 'Oatmeal', calories: 150, protein: 5 },
      Salad: { name: 'Salad', calories: 150, protein: 5 },
      Pasta: { name: 'Pasta', calories: 400, protein: 15 },
      Rice: { name: 'Rice', calories: 215, protein: 4 },
      Pizza: { name: 'Pizza', calories: 285, protein: 12 },
      Burger: { name: 'Burger', calories: 350, protein: 18 },
      Fruit: { name: 'Fruit', calories: 100, protein: 1 },
      Yogurt: { name: 'Yogurt', calories: 150, protein: 10 },
      Chips: { name: 'Chips', calories: 100, protein: 1 },
      Drinks: { name: 'Drinks', calories: 150, protein: 10 },
      AlooParatha: { name: 'Aloo Paratha', calories: 100, protein: 1 },
      PaneerParatha: { name: 'Paneer Paratha', calories: 150, protein: 10 },
      Chiken: { name: 'Chiken', calories: 100, protein: 1 },
      Tofu: { name: 'Tofu', calories: 150, protein: 10 },
      Steak: { name: 'Steak', calories: 100, protein: 1 },
      Fish: { name: 'Fish', calories: 150, protein: 10 },
      MissiRoti: { name: 'Missi Roti', calories: 150, protein: 10 },
      GobiParatha: { name: 'Gobi Paratha', calories: 150, protein: 10 },
      PlainRoti: { name: 'Plain Roti', calories: 100, protein: 10 },
      MethiParatha: { name: 'Methi Paratha', calories: 80, protein: 10 },
    }[meal] || null;

    setMealDetails((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [mealType]: calorieInfo,
      },
    }));

    if (activeCard !== index) {
      setActiveCard(index);
    }
  };

  const changeValue = (index, mealType, operation) => {
    setMealDetails((prev) => {
      const currentMealDetails = prev[index]?.[mealType] || { calories: 0, protein: 0 };
      const newCalories = operation === 'increment'
        ? currentMealDetails.calories + 10
        : Math.max(0, currentMealDetails.calories - 10);
      const newProtein = operation === 'increment'
        ? currentMealDetails.protein + 1
        : Math.max(0, currentMealDetails.protein - 1);

      return {
        ...prev,
        [index]: {
          ...prev[index],
          [mealType]: { calories: newCalories, protein: newProtein }
        }
      };
    });
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  
    const newMealMeal = mealPlan[`Day ${day}`];
    if (newMealMeal) {
      setSelectedMeals({
        breakfast: {
          onePotMeals: newMealMeal.breakfast?.onePotMeals || "",
          carbsMeal: newMealMeal.breakfast?.separateMeals?.carbsMeal || "",
          proteinMeal: newMealMeal.breakfast?.separateMeals?.proteinMeal || "",
          meal1: newMealMeal.breakfast?.parathaandgreens?.meal1 || "",
          meal2: newMealMeal.breakfast?.parathaandgreens?.meal2 || "",
        },
        lunch: {
          onePotMeals: newMealMeal.lunch?.onePotMeals || "",
          carbsMeal: newMealMeal.lunch?.separateMeals?.carbsMeal || "",
          proteinMeal: newMealMeal.lunch?.separateMeals?.proteinMeal || "",
          meal1: newMealMeal.lunch?.parathaandgreens?.meal1 || "",
          meal2: newMealMeal.lunch?.parathaandgreens?.meal2 || "",
        },
        dinner: {
          onePotMeals: newMealMeal.dinner?.onePotMeals || "",
          carbsMeal: newMealMeal.dinner?.separateMeals?.carbsMeal || "",
          proteinMeal: newMealMeal.dinner?.separateMeals?.proteinMeal || "",
          meal1: newMealMeal.dinner?.parathaandgreens?.meal1 || "",
          meal2: newMealMeal.dinner?.parathaandgreens?.meal2 || "",
        },
      });
    } else {
      console.warn(`No meal plan found for Day ${day}`);
    }
  };
  
  const getMeal2Options = (mealType) => {
    const meal1Value = selectedMeals[mealType]?.meal1;
    
    if (mealType === 'onePotMeal') {
      return meal1Value === 'Poha' ? ['Poha'] : [];
    } else if (mealType === 'separateMeal') {
      // Yahan carbs aur protein dono options ko combine kar rahe hain
      const carbsOptions = meal1Value === 'Chicken' ? ['Salad'] : ['Fruit'];
      const proteinOptions = meal1Value === 'Chicken' ? ['Pasta'] : ['Yogurt'];
      return [...carbsOptions, ...proteinOptions];
    } else if (mealType === 'paratha_Greens') {
      return meal1Value === 'Aloo Paratha' ? ['Methi Paratha'] : ['Plain Roti', 'Gobi Paratha'];
    }
    
    return [];
  };
  

  return (
    <div>
      <div className="main-container">
        <FlipInXDiv>
          <div className="logo">
            <IoIosFitness />
          </div>
        </FlipInXDiv>
        <div className="title"> 
          <h1><span>Fit</span><span>ness</span></h1>
        </div>

        <div className="day-selector">
          <div className="days-container">
            {days.map((day) => (
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

        
        <div className="cards">
        {meals.map((meal, index) => (
          <CardContainer 
  ref={el => cardRefs.current[index] = el} 
  key={index} 
  onMouseEnter={() => handleMouseEnter(index)}
  onMouseLeave={handleMouseLeave}
  isActive={hoveredCard === index}
  style={{
    opacity: hoveredCard === index ? '1' : '0.5',
    transform: hoveredCard === index ? 'scale(1.10)' : 'scale(1)',
  }} >
    <CardContent onClick={() => toggleDetails(index)}>
      <h2>{meal.type}</h2>
      <CardImage src={meal.img} alt={`${meal.type} image`} />
    </CardContent>

    {activeCard === index && (
      <CardDetails isActive={activeCard === index}>
        <div className="meal-options">
          {['onePotMeal', 'separateMeal', 'paratha_Greens'].map((mealType) => (
            <div key={mealType}>
  <h3>{mealType.replace(/([A-Z])/g, ' $1').toUpperCase()}</h3>
  {meal[mealType] && meal[mealType].length > 0 ? (
    <>
      {mealType === 'onePotMeal' ? (
        <>
          {/* <label>One Pot Meal</label> */}
          <select
            onChange={(e) => handleMealSelect(index, e.target.value, mealType, 'meal1')}
            value={selectedMeals[mealType]?.meal1 || ""}
          >
            <option value="">Select a Meal</option>
            {meal.onePotMeal.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>{option}</option>
            ))}
          </select>
        </>
      ) : mealType === 'separateMeal' ? (
        <>
          <label>Carbs</label>
          <select
            onChange={(e) => handleMealSelect(index, e.target.value, mealType, 'meal1')}
            value={selectedMeals[mealType]?.meal1 || ""}
          >
            <option value="">Select a Meal</option>
            {meal[mealType].map((option, optionIndex) => (
              <option key={optionIndex} value={option}>{option}</option>
            ))}
          </select>

          <label>Protein</label>
          <select
            onChange={(e) => handleMealSelect(index, e.target.value, mealType, 'meal2')}
            value={selectedMeals[mealType]?.meal2 || ""}
          >
            <option value="">Select a Meal</option>
            {getMeal2Options(mealType).map((option, optionIndex) => (
              <option key={optionIndex} value={option}>{option}</option>
            ))}
          </select>
        </>
      ) : mealType === 'paratha_Greens' ? (
        <>
    <label>Meal 1</label>
    <select
      onChange={(e) => handleMealSelect(index, e.target.value, mealType, 'meal1')}
      value={selectedMeals[mealType]?.meal1 || ""}
    >
      <option value="">Select a Meal</option>
      {meal[mealType].map((option, optionIndex) => (
        <option key={optionIndex} value={option}>{option}</option>
      ))}
    </select>

    <label>Meal 2</label>
    <select
      onChange={(e) => handleMealSelect(index, e.target.value, mealType, 'meal2')}
      value={selectedMeals[mealType]?.meal2 || ""}
    >
      <option value="">Select a Meal</option>
      {meal[mealType].map((option, optionIndex) => (
        <option key={optionIndex} value={option}>{option}</option>
      ))}
    </select>
        </>
      ) : (
        <>
         

        
        </>
      )}
    </>
  ) : (
    <p>No options available</p>
  )}
            </div>

          ))}
        </div>

        {/* // MealOptionDetails mein selectedMealType ko render condition mein use karein */}
<MealOptionDetails>
  {['onePotMeal', 'separateMeal', 'paratha_Greens'].map((mealType) => (
    selectedMealType === mealType && selectedMeals[index]?.[mealType] && (
      <div key={mealType}>
        <h4>
          {mealType === 'separateMeal' ? (
            <>
              {selectedMeals[index][mealType].carbsOptions} + {selectedMeals[index][mealType].proteinOptions}
            </>
          ) : (
            mealDetails[index]?.[mealType]?.name || mealType.toUpperCase()
          )}
        </h4>
        <p>Calories: 
          {mealType === 'separateMeal' ? (
            (mealDetails[index]?.[mealType]?.calories || 0) + (mealDetails[index]?.[mealType]?.calories || 0)
          ) : (
            mealDetails[index]?.[mealType]?.calories || 0
          )}
        </p>
        <p>Protein: 
          {mealType === 'separateMeal' ? (
            (mealDetails[index]?.[mealType]?.protein || 0) + (mealDetails[index]?.[mealType]?.protein || 0)
          ) : (
            mealDetails[index]?.[mealType]?.protein || 0
          )}
          g
        </p>
        <CounterButton onClick={() => changeValue(index, mealType, 'increment')}>
          <FaPlus />
        </CounterButton>
        <CounterButton onClick={() => changeValue(index, mealType, 'decrement')}>
          <ImMinus />
        </CounterButton>
      </div>
    )
  ))}
</MealOptionDetails>


      </CardDetails>
    )}
  </CardContainer>
))}

      </div>

      </div>
    </div>
  );
};

export default Home;
