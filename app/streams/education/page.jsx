import { Stack, Typography } from "@mui/material";
import Header from "@/components/Header/Header";
import Hero from "./components/Hero";
import Colab from "./components/Colab";
import AboutEducation from "./components/AboutEducation";
import Succeed from "./components/Succeed";
import TechCourse from "./components/TechCourse";
import Growth from "./components/Growth";
import Funnel from "@/components/Funnel/Funnel";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Education",
  description:
    "Invest in Tomorrow with Future Technologies. Our education solutions are meticulously designed to meet your industry's unique requirements, ensuring you achieve excellence at every step.",
};

export default function EducationPage() {
  return (
    <Stack>
      <Header isLight={true} isEdu={true} />
      <Hero />
      <Colab />
      <AboutEducation />
      <Succeed />
      <TechCourse />
      <Growth />
      <Funnel isEdu={true} />
      <Footer textColor={"var(--education)"} isLight />
    </Stack>
  );
}
