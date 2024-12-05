import React, { useState, useEffect, useRef } from "react";
import Breakfast from "./Breakfast";
import Snacks from "./Snacks";
import Lunch from "./Lunch";
import EveningSnacks from "./EveningSnacks";
import Dinner from "./Dinner";
import './Menu.css';
import './Rough.css';

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null); // Tracks active section
  const observer = useRef(null); // Reference for IntersectionObserver
  const debounceTimeout = useRef(null); // For debouncing scroll events
  const [activeIndex, setActiveIndex] = useState(0); // State to track active link index

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


      {/* Sections */}
      <div
      className="res-break"
        style={{
          marginTop: "100px",
          padding: "20px",
          backgroundColor: "#f0f0f5",
          scrollBehavior: "smooth",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

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
    </div>
  );
};

export default Menu;