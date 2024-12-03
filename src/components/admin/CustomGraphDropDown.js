'use client';

import { useState } from 'react';

export default function CustomGraphDropDown({ onTimeIntervalChange }) {
  // Options for the dropdown
  const timeOptions = [
    { id: 1, label: '7 Days' },
    { id: 2, label: '4 Days' },
    { id: 3, label: '3 Days' },
    { id: 4, label: '2 Days' },
    { id: 5, label: '1 Day' },
    { id: 6, label: 'Live' },
  ];

  const [selectedOption, setSelectedOption] = useState('7 Days'); // Default option
  const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown visibility

  const handleOptionSelection = (option) => {
    setSelectedOption(option.label); // Update selected option
    setDropdownOpen(false); // Close the dropdown
    onTimeIntervalChange(option.label); // Notify parent component about the selection
  };

  return (
    <div className="relative w-[130px]">
      {/* Dropdown Trigger */}
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="rounded-xl border border-gray-500 px-2 py-1 cursor-pointer  relative"
      >
        <span className="text-gray-700 text-sm">{selectedOption}</span>
        <svg
          className="absolute top-[6px] right-1 w-5 h-5 text-gray-500  rounded-md"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {timeOptions.map((option) => (
            <label
              key={option.id}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-custom-headblue"
            >
              <input
                type="radio"
                name="timeOption" // Radio button group
                className="mr-2 absolute opacity-0 pointer-events-none"
                checked={selectedOption === option.label}
                onChange={() => handleOptionSelection(option)} // Update selection
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
