import React from "react";

// Define accepted colors based on the Tulip Method
type TulipColor = "red" | "yellow" | "pink" | "purple";

interface StyledTextProps {
  color: TulipColor;
  children: React.ReactNode;
}

// Reusable component that accepts a "color" prop
const StyledText: React.FC<StyledTextProps> = ({ color, children }) => {
  // Dynamic style object
  const style: React.CSSProperties = {
    color: color,
    fontSize: "18px",
    fontWeight: "bold",
  };

  return <p style={style}>{children}</p>;
};

export default StyledText;
