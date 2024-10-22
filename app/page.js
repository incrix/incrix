import { Stack } from "@mui/material";
import Hero from "./landComponents/Hero";
import StartupIndia from "./landComponents/StartupIndia";
import Innovate from "./landComponents/Innovate";
import Streams from "./landComponents/Streams";
import Marquee from "./landComponents/Marquee";
import styles from "./landComponents/landing.module.css";
import WhyUs from "./landComponents/WhyUs";
import SuperPower from "./landComponents/SuperPower";

export default function Home() {
  return (
    <Stack spacing={2} position={"relative"}>
      <Hero />
      <Streams />
      <Marquee />
      <WhyUs />
      <Innovate />
      <SuperPower />
      <StartupIndia />
    </Stack>
  );
}
