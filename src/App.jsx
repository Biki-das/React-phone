import React, { useState } from "react";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (event) => {
    const input = event.target.value;
    let formattedNumber = "";

    // Remove all non-digit characters from the input
    const digitsOnly = input.replace(/\D/g, "");

    // Apply formatting based on the number of digits
    if (digitsOnly.length > 0) {
      formattedNumber += "(" + digitsOnly.slice(0, 3) + ")";
    }
    if (digitsOnly.length > 3) {
      formattedNumber += " " + digitsOnly.slice(3, 6);
    }
    if (digitsOnly.length > 6) {
      formattedNumber += "-" + digitsOnly.slice(6, 10);
    }

    setPhoneNumber(formattedNumber);
  };

  const handleBackspace = (event) => {
    if (event.key === "Backspace") {
      // Remove the last character from the formatted number
      setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
    }
  };

  return (
    <input
      type="tel"
      maxLength={14}
      placeholder="Mobile Number"
      value={phoneNumber}
      onChange={formatPhoneNumber}
      onKeyDown={handleBackspace}
    />
  );
};

export default App;
