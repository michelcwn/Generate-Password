import React, { useEffect, useState } from "react";

function PasswordOptions({ options, setOptions }) {
  const [displayLength, setDisplayLength] = useState(options.length);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "length") {
      setDisplayLength(Number(value)); // Mettre à jour la valeur d'affichage
    } else {
      setOptions((prevOptions) => ({
        ...prevOptions,
        [name]: type === "checkbox" ? checked : Number(value),
      }));
    }
  };

  const calculateBackgroundSize = () => {
    const min = 6;
    const max = 18;
    const percentage = ((displayLength - min) / (max - min)) * 100;
    return `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;
  };

  useEffect(() => {
    // Synchroniser la valeur affichée avec la valeur réelle arrondie
    setOptions((prevOptions) => ({
      ...prevOptions,
      length: Math.round(displayLength),
    }));
  }, [displayLength, setOptions]);

  return (
    <div className=" flex flex-col w-full">
      <div className="flex justify-between items-center mb-4">
        <span>Character Length</span>
        <span className="text-xl">{options.length}</span>
      </div>
      <input
        type="range"
        name="length"
        min="6"
        max="18"
        value={displayLength}
        onChange={handleChange}
        className="w-full mb-4 range-input"
        step="0.1"
        style={{
          background: calculateBackgroundSize(),
        }}
      />
      <label className="flex items-center mb-2 text-sm">
        <input
          type="checkbox"
          name="includeUppercase"
          checked={options.includeUppercase}
          onChange={handleChange}
          className="mr-4  checkbox-custom"
        />
        Include Uppercase Letters
      </label>
      <label className="flex items-center mb-2 text-sm">
        <input
          type="checkbox"
          name="includeLowercase"
          checked={true}
          onChange={handleChange}
          className="mr-4 checkbox-custom"
        />
        Include Lowercase Letters
      </label>
      <label className="flex items-center mb-2 text-sm">
        <input
          type="checkbox"
          name="includeNumbers"
          checked={options.includeNumbers}
          onChange={handleChange}
          className="mr-4 checkbox-custom"
        />
        Include Numbers
      </label>
      <label className="flex items-center text-sm">
        <input
          type="checkbox"
          name="includeSymbols"
          checked={options.includeSymbols}
          onChange={handleChange}
          className="mr-4 checkbox-custom"
        />
        Include Symbols
      </label>
    </div>
  );
}

export default PasswordOptions;
