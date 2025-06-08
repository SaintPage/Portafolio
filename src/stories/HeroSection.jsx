import React from "react";
import HeroSection from "../components/HeroSection";

export default {
  title: "Componentes/HeroSection",
  component: HeroSection,
};

const Template = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};
