import React, { useState, useEffect, useRef } from "react";
import Breakfast from "./Breakfast";
import Snacks from "./Snacks";
import Lunch from "./Lunch";
import EveningSnacks from "./EveningSnacks";
import Dinner from "./Dinner";
import './Menu.css';
import './Rough.css';
import { FaLock } from "react-icons/fa";
import FooterHeader from "../FooterHeader";

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null); // Tracks active section
  const observer = useRef(null); // Reference for IntersectionObserver
  const debounceTimeout = useRef(null); // For debouncing scroll events
  const [activeIndex, setActiveIndex] = useState(0); // State to track active link index

  const [unlockedDays, setUnlockedDays] = useState([0]); // Start with Day 1 unlocked
  const [activeDay, setActiveDay] = useState(null); // Track the active day
  const [dayUnlocked, setDayUnlocked] = useState([...unlockedDays]);

  const sections = [
    { id: "Breakfast", Component: <Breakfast />, icon: "assets/images/churros.mp4" },
    { id: "Snacks", Component: <Snacks />, icon: "assets/images/snack.mp4"  },
    { id: "Lunch", Component: <Lunch />, icon: "assets/images/food-delivery.mp4"  },
    { id: "EveningSnacks", Component: <EveningSnacks />, icon: "assets/images/hummus.mp4"  },
    { id: "Dinner", Component: <Dinner />, icon: "assets/images/dinner.mp4"  },
  ];

  // IntersectionObserver to detect which section is currently visible
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
        if (visibleSection) {
          if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current); // Clear previous timeout
          }
          debounceTimeout.current = setTimeout(() => {
            setActiveSection(visibleSection.id);
            const index = sections.findIndex(section => section.id === visibleSection.id);
            setActiveIndex(index); // Update active index when section becomes visible
          }, 100); // Debounce to avoid too many updates
        }
      },
      { threshold: 0.9 } // Trigger when 90% of the section is in view
    );

    const sectionElements = document.querySelectorAll("[data-section]");
    sectionElements.forEach((section) => observer.current.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.current.unobserve(section));
    };
  }, []);

  // Handle click on navbar items
  const handleClick = (index) => {
    setActiveIndex(index); // Update the active link index on click
    setActiveSection(sections[index].id); // Also update active section when navbar item is clicked
    document.getElementById(sections[index].id).scrollIntoView({
      behavior: "smooth",
    });
  };
  
   const days = Array.from({ length: 31 }, (_, index) => `Day ${index + 1}`);

   const handleDayClick = (index) => {
    if (dayUnlocked.includes(index)) {
      setActiveDay(index); // Sirf unlocked din ko active karenge
    }
  };

  const unlockNextDay = () => {
    if (activeDay !== null && activeDay + 1 < days.length) {
      setDayUnlocked((prev) => [...prev, activeDay + 1]); // Next din unlock karein
      setActiveDay(activeDay + 1); // Next day ko active karein
    }
  };

  const handleNextDay = () => {
    if (activeDay !== null && unlockedDays.includes(activeDay + 1)) {
      setActiveDay(activeDay + 1); // Next unlocked din par move karenge
    }
  };


  return (
    <div  style={{
      marginTop: "0px",
      backgroundColor: "#f0f0f5",
      alignItems: "center",
      overflowX: "hidden",
    }}>
    

     {/* Sidebar Navigation */}
     <div className="nav-bar">
        <div className="navigation">
          <ul>
            {sections.map((section, index) => (
              <li
                key={section.id}
                className={`list ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                <a href={`#${section.id}`}>
                  <span className="icon">
                  <video
                    src={section.icon}
                    className="nav-icon"
                    muted
                    loop
                    autoPlay
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      marginTop: "12px",
                      marginBottom: "24px",
                      objectFit: "cover",
                    }}
                  />
                  </span>
                  <span className="text">{section.id}</span>
                  <span className="circle"></span>
                </a>
              </li>
            ))}
            <div className="indicator"></div>
          </ul>
        </div>
     </div>  

            <div className="days">
        <div className="days-container">
          {days.map((day, index) => (
            <div
              key={index}
              className={`day-btn ${
                activeDay === index
                  ? "active"
                  : dayUnlocked.includes(index)
                  ? ""
                  : "locked"
              }`}
              onClick={() => handleDayClick(index)}
            >
              {/* Front side content */}
              <div className="front">
                <h4>{day}</h4>
                {!dayUnlocked.includes(index) && <span>🔒</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

     


      {/* Sections */}
      <div
      className="res-break"
        style={{
          marginTop: "180px",
          padding: "20px",
          backgroundColor: "#f0f0f5",
          scrollBehavior: "smooth",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

 {/* Day Details Section */}
 {activeDay !== null && (
        <div className="day-meal">
          <h1>{days[activeDay]}</h1>
          {dayUnlocked.includes(activeDay + 1) ? (
            <button onClick={unlockNextDay}>Next Day</button>
          ) : (
            <p>Next day locked hai.</p>
          )}
        </div>
      )}

      
{/* {activeDay !== null && (
  <div className="day-meal">
    <h1>{days[activeDay]}</h1>
    {dayUnlocked.includes(activeDay + 1) ? (
      <button onClick={unlockNextDay}>Next Day</button>
    ) : (
      <p>Next day locked hai.</p>
    )}
  </div>
)} */}


        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            data-section
            style={{
              minHeight: "350px",
              width: "100%",
              maxWidth: "fit-content",
              borderRadius: "15px",
              margin: "30px 0",
              padding: "40px",
              background: activeSection === section.id ? "linear-gradient(145deg, #239eab, #74deee)" : "linear-gradient(145deg, #a8e6cf, #dcedc1)",
              boxShadow: activeSection === section.id
                ? "0px 10px 30px rgba(0, 0, 0, 0.3)"
                : "10px 10px 20px #c6c6c6, -10px -10px 20px #ffffff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              transform: activeSection === section.id ? "scale(1.05)" : "scale(1)",
              color: activeSection === section.id ? "#fff" : "#282c34",
              textAlign: "center",
              fontSize: "18px",
              border: "3px solid #fff",
            }}
          >
            <h1
              style={{
                marginBottom: "25px",
                fontSize: "28px",
                fontFamily: 'Open sans',
                fontWeight: "bold",
                color: activeSection === section.id ? "#fff" : "#282c34",
                textShadow: activeSection === section.id ? "0 0 10px #61dafb, 0 0 0px #7ad1f7, 0 0 0px #a1e0f7" : "none",
                letterSpacing: "2px",
                transform: activeSection === section.id ? "rotateY(10deg)" : "none",
                transition: "all 0.3s ease",
              }}
            >
              {section.id}
            </h1>
            {section.Component}
          </div>
        ))}
      </div>

      <FooterHeader />
    </div>
  );
};

export default Menu;