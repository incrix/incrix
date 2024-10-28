import { Stack, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Header from "@/components/Header/Header";
import Funnel from "@/components/Funnel/Funnel";
import GetStarted from "./components/GetStarted";
import OurExpertise from "./components/OurExpertise";
import Approach from "./components/Approach";
import ToolTech from "./components/ToolTech";

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
    </Stack>
  );
}
