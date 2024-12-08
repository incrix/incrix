import { Stack, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Header from "@/components/Header/Header";
import Funnel from "@/components/Funnel/Funnel";
import GetStarted from "./components/GetStarted";
import OurExpertise from "./components/OurExpertise";
import Approach from "./components/Approach";
import ToolTech from "./components/ToolTech";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Software",
  description:
    "All the power you need, just get started, Enhance your software solutions with advanced coding practices, robust performance optimization, and adaptable management tools.",
};

export default function Page() {
  return (
    <Stack>
      <Header isLight={false} />
      <Hero />
      <GetStarted />
      <OurExpertise />
      <Approach />
      <ToolTech />
      <Funnel />
      <Footer isGradient={"var(--software-gradient)"} />
    </Stack>
  );
}
