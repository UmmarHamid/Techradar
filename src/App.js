import React from "react";
import { LayoutWrapper } from "./components/Layout/layout";
import Radar from "./components/Radar/Radar";

function App() {
  const setup = {
    rings: ["adopt", "trial", "assess", "hold"],
    quadrants: ["tools", "techniques", "platforms", "languages"],
    data: [
      {
        name: "D3",
        quadrant: "tools",
        ring: "assess",
      },
      {
        name: "TypeScript",
        quadrant: "languages",
        ring: "trial",
      },
      {
        name: "Storybook",
        quadrant: "tools",
        ring: "adopt",
      },
    ],
    radiusDiminish: 1,
    width: 800,
    colorScaleIndex: 0,
    fontSize: 16,
    itemFontSize: 12,
  };

  return (
    <LayoutWrapper
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Radar {...setup} />
    </LayoutWrapper>
  );
}

export default App;
