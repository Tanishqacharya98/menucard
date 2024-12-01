import React, { useState, useEffect, useRef } from "react";
import Breakfast from "./Breakfast";
import Snacks from "./Snacks";
import Lunch from "./Lunch";
import EveningSnacks from "./EveningSnacks";
import Dinner from "./Dinner";
import './Menu.css'

const Menu = () => {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  const debounceTimeout = useRef(null);

  const sections = [
    { id: "Breakfast", Component: <Breakfast /> },
    { id: "Snacks", Component: <Snacks /> },
    { id: "Lunch", Component: <Lunch /> },
    { id: "EveningSnacks", Component: <EveningSnacks /> },
    { id: "Dinner", Component: <Dinner /> },
  ];

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
          }, 100); // Debounce to prevent too many updates
        }
      },
      { threshold: 0.9 }
    );

    const sectionElements = document.querySelectorAll("[data-section]");
    sectionElements.forEach((section) => observer.current.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.current.unobserve(section));
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", overflowX: "hidden" }}>
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: "#282c34",
          padding: "15px 0",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            gap: "15px",
          }}
        >
          {sections.map((section) => (
            <li
              key={section.id}
              style={{
                fontSize: "16px",
                fontFamily: 'Arial',
                transform: activeSection === section.id ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease, color 0.3s ease",
                cursor: "pointer",
                textAlign: "center",
                // border: "3px solid #fff",  // White border

              }}
            >
              <a
                href={`#${section.id}`}
                style={{
                  color: activeSection === section.id ? "#61dafb" : "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  textShadow: activeSection === section.id ? "0 0 0px #61dafb, 0 0 0px #61dafb" : "none",
                  letterSpacing: "0.6px",
                  transform: activeSection === section.id ? "rotateY(10deg)" : "none",
                  transition: "all 0.3s ease",
                  // border: "3px solid #fff",  // White border
//
                }}
              >
                {section.id}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div
        style={{
          marginTop: "60px",
          padding: "20px",
          backgroundColor: "#f0f0f5",
          scrollBehavior: "smooth",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // border: "3px solid #fff",  // White border

        }}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            data-section
            style={{
              minHeight: "350px",
              width: "80%",
              maxWidth: "fit-content",
              borderRadius: "15px",
              margin: "30px 0",
              padding: "40px",
              background: activeSection === section.id ? "#093414" : "linear-gradient(145deg, #a8e6cf, #dcedc1)",
              boxShadow: activeSection === section.id
                ? "0px 10px 30px rgba(0, 0, 0, 0.3)"
                : "10px 10px 20px #c6c6c6, -10px -10px 20px #ffffff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
              transform: activeSection === section.id ? "scale(1.05)" : "scale(1)",
              color: activeSection === section.id ? "#fff" : "#282c34",
              textAlign: "center",
              fontSize: "18px",
              border: "3px solid #fff",  // White border
            }}
          >
            <h1
              style={{
                marginBottom: "25px",
                fontSize: "28px",
                fontFamily: 'Open sans',
                fontWeight: "bold",
                color: activeSection === section.id ? "#fff" : "#282c34",
                textShadow: activeSection === section.id ? "0 0 10px #61dafb, 0 0 0px #7ad1f7, 0 0 0px #a1e0f7"  : "none",
                letterSpacing: "2px",
                transform: activeSection === section.id ? "rotateY(10deg)" : "none",
                transition: "all 0.3s ease",
                // border: "3px solid #fff",  // White border

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
