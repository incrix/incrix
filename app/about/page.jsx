import { Stack } from "@mui/material";
import Funnel from "@/components/Funnel/Funnel";
import Hero from "./components/Hero";
import Core from "./components/Core";
import Mavericks from "./components/Mavericks";
import TeamIncrix from "./components/TeamIncrix";
import Experience from "./components/Experience";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function AboutPage() {
  return (
    <Stack position={"relative"}>
      <Header isLight={true} />
      <Hero />
      <Core />
      <Mavericks />
      <Experience />
      <TeamIncrix />
      <Funnel />
      <Footer />
    </Stack>
  );
}
