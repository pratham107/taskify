import React from 'react';

const Card = () => {
  const tasks = ["Lunch", "Dinner", "Breakfast", "Snacks"];
  return (
   
      <div className="cardContainer bg-white shadow-xl rounded-lg w-96">
        <div className="cardHeader bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl font-bold py-4 px-6 rounded-t-lg">
          Task List
        </div>
        <div className="cardContent p-4 space-y-4">
          {tasks.map((item, index) => (
            <div
              className="task bg-gray-50 border border-gray-200 shadow-sm px-4 py-3 rounded-md flex justify-between items-center transition-transform hover:scale-105"
              key={index}
            >
              <span className="text-gray-800 font-medium">{item}</span>
              <div className="space-x-3">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-3 py-1 rounded-md">
                  Complete
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Card;

