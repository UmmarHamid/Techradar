import React from "react";
import Radar from "../components/Radar/Radar";

export default {
  title: "Radar",
  Component: Radar,
  args: {
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
    width: 600,
    colorScaleIndex: 0,
    fontSize: 12,
    itemFontSize: 12,
  },
};

const Template = (args) => <Radar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: 600,
};
export const FiveQuadrants = Template.bind({});
FiveQuadrants.args = {
  quadrants: ["tools", "techniques", "platforms", "languages", "frameworks"],
};
export const CustomFont = Template.bind({});
CustomFont.args = {
  fontSize: 18,
  itemFontSize: 12,
  fontFamily: "fantasy",
};
export const CustomMargin = Template.bind({});
CustomMargin.args = {
  width: 700,
  margin: 10,
};
export const CustomQuadrantConfig = Template.bind({});
CustomQuadrantConfig.args = {
  quadrantsConfig: {
    showOnlyFirstQuadrantLabels: true,
    textMargin: 0,
    textYOffset: -5,
  },
};
export const NoData = Template.bind({});
NoData.args = {
  data: null,
};
