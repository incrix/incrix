import { Stack, Typography } from "@mui/material";
import Header from "@/components/Header/Header";
import Hero from "./components/Hero";
import Colab from "./components/Colab";
import AboutEducation from "./components/AboutEducation";
import Succeed from "./components/Succeed";
import TechCourse from "./components/TechCourse";
import Growth from "./components/Growth";
import Funnel from "@/components/Funnel/Funnel";

export default function EducationPage() {
  return (
    <Stack>
      <Header isLight={true} isEducation={true} />
      <Hero />
      <Colab />
      <AboutEducation />
      <Succeed />
      <TechCourse />
      <Growth />
      <Funnel />
    </Stack>
  );
}
