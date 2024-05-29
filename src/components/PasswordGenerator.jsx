import React, { useState } from "react";
import PasswordOptions from "./PasswordOptions";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    length: 12,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const length = options.length; // Longueur du mot de passe
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (options.includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.includeNumbers) characters += "0123456789";
    if (options.includeSymbols) characters += "!@#$%^&*()";
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center w-96 h-auto">
      <h1 className="mb-6">Password Generator</h1>
      <div className="flex justify-between  bg-customDarkGray w-full mb-6 p-4">
        <p>{password}</p>
        <div className="flex items-center">
          {copied && (
            <span className="text-customGreen uppercase text-sm mr-2">
              copied
            </span>
          )}
          <svg
            onClick={handleCopyClick}
            className="cursor-pointer fill-current text-customGreen hover:text-white transition-all duration-300"
            width="21"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
      </div>
      <div className="bg-customDarkGray w-full p-6">
        <PasswordOptions options={options} setOptions={setOptions} />
        <PasswordStrengthIndicator password={password} />
        <button
          className="flex items-center mt-4 justify-center w-full bg-customGreen text-customDarkerGray p-4 font-bold hover:bg-customDarkGray border border-customGreen hover:text-customGreen group transition-all duration-300"
          onClick={generatePassword}
        >
          <span className="mr-4">Generate</span>
          <svg
            className="fill-current text-gray-900 group-hover:text-customGreen hover:text-customGreen"
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
