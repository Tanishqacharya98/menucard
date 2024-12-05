import React, { useState } from 'react';
import './Rough.css';

const Rough = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of active link

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active link index on click
  };

  const links1 = [
    { name: 'Home', icon: 'home-outline' },
    { name: 'Profile', icon: 'person-outline' },
    { name: 'Message', icon: 'chatbubble-outline' },
    { name: 'Photos', icon: 'camera-outline' },
    { name: 'Settings', icon: 'settings-outline' },
  ];

  const links = [
    { id: "Breakfast", icon: 'home-outline'  },
    { id: "Snacks",icon: 'home-outline' },
    { id: "Lunch",icon: 'home-outline' },
    { id: "EveningSnacks",icon: 'home-outline'  },
    { id: "Dinner",icon: 'home-outline' },
  ];

  return (
    <div>
      <div className="navigation">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)} // Add onClick to handle active class change
            >
              <a href="#">
                <span className="icon">
                  <ion-icon name={link.icon}></ion-icon>
                </span>
                <span className="text">{link.id}</span>
                <span className="circle"></span>
              </a>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default Rough;

//  <div className="box w-auto m-auto mt-4 justify-between items-center">
//                   {/* <img src="assets/images/bowl.png" alt="not found" className='w-16 animate-slideInTop' /> */}
//                   <select className='text-black'  value={selectedOption} onChange={handleSelectChange}>
//                      {options.map((option, index) => (
//                       <option key={index} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                     <option value="add new">Add new</option>
//                   </select>

//                   {showPopup && (
//         <div
//           className="fixed top-0 left-24 w-full h-full bg-transparent bg-opacity-50 flex justify-center items-center"
//         >
//           <div className="bg-white p-4 rounded shadow-md w-96">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-lg font-bold  text-black">Add Grams</h2>
//             <button
//                 className="px-2 py-2 text-red-500 text-md rounded mr-2"
//                 onClick={closePopup}
//               >
//                 <ImCross />
//               </button>
//               </div>
//             <input
//               type="text"
//               className="border p-2 w-full mb-4 text-black"
//               placeholder="Enter Gram"
//               value={newOption}
//               onChange={(e) => setNewOption(e.target.value)}
//             />
            
//               <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={addNewOption}>
//                 Add
//               </button>
//             </div>
//           </div>
//       )}

//       {/* grams  popup end */}
//       </div> 