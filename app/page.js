import { Stack } from "@mui/material";
import Hero from "./landComponents/Hero";
import StartupIndia from "./landComponents/StartupIndia";
import Innovate from "./landComponents/Innovate";
import Streams from "./landComponents/Streams";
import Marquee from "./landComponents/Marquee";
import WhyUs from "./landComponents/WhyUs";
import SuperPower from "./landComponents/SuperPower";
import Funnel from "@/components/Funnel/Funnel";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Stack  position={"relative"}>
      <Header isLight={true} />
      <Hero />
      <Streams />
      <Marquee />
      <WhyUs />
      <Innovate />
      <SuperPower />
      <StartupIndia />
      <Funnel />
      <Footer />
    </Stack>
  );
}
