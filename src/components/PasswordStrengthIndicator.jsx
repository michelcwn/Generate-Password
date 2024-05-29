import React from "react";

const PasswordStrengthIndicator = ({ password }) => {
  const calculateStrength = () => {
    if (!password || password.length < 6) {
      return "tooweek";
    }

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLowercase && hasUppercase && hasNumbers && hasSymbols) {
      return "strong";
    } else if (hasLowercase && hasUppercase && hasNumbers) {
      return "medium";
    } else if (hasLowercase && hasUppercase) {
      return "weak";
    } else {
      return "tooweek";
    }
  };

  const strengthLevels = {
    tooweek: { text: "too weak!", bars: 1, color: "bg-customRed" },
    weak: { text: "weak", bars: 2, color: "bg-customOrange" },
    medium: { text: "medium", bars: 3, color: "bg-customYellow" },
    strong: { text: "strong", bars: 4, color: "bg-customGreen" },
  };

  const currentStrength = calculateStrength();
  const currentLevel =
    strengthLevels[currentStrength] || strengthLevels.tooweek;

  return (
    <div className="flex items-center justify-between my-4 p-4 bg-customDarkerGray">
      <span className="text-gray-500 uppercase">Strength</span>
      <div className="flex">
        <span className="text-white font-bold uppercase mr-4">
          {currentLevel.text}
        </span>
        <div className="flex space-x-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-6 border-2 border-white ${
                index < currentLevel.bars
                  ? currentLevel.color
                  : "bg-transparent"
              }`}
            ></div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
