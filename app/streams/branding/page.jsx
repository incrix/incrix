import { Stack } from "@mui/material";
import Header from "@/components/Header/Header";
import Hero from "./components/Hero";
import Provide from "./components/Provide";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import Studio from "./components/Studio";
import LetsBuild from "./components/LetsBuild";
import DigitalMarketing from "./components/DigitalMarketing";

export default function Page() {
  return (
    <Stack>
      <Header isLight={true} />
      <Hero />
      <Provide />
      <Metrics />
      <Services />
      <Studio />
      <DigitalMarketing />
      <LetsBuild />
    </Stack>
  );
}
