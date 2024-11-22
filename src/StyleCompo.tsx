import React from "react";
import StyledText from "./StyledText";

// Define a list of colors based on the Tulip Method
type TulipColor = "red" | "yellow" | "pink" | "purple";

const StyleCompo: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Tulip Method - Passing Styles as Props</h1>
      <StyledText color="red">This text is red like a tulip.</StyledText>
      <StyledText color="yellow">This text is yellow like a tulip.</StyledText>
      <StyledText color="pink">This text is pink like a tulip.</StyledText>
      <StyledText color="purple">This text is purple like a tulip.</StyledText>
    </div>
  );
};

export default StyleCompo;
