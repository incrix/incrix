import { Stack } from "@mui/material";
import Header from "@/components/Header/Header";
import Hero from "./components/Hero";
import WhoWe from "./components/WhoWe";
import Service from "./components/Service";
import WhyIncrix from "./components/WhyIncrix";
import HowWeWork from "./components/HowWeWork";
import PCB from "./components/PCB";
import Product from "./components/Product";
import Integrations from "./components/Integrations";
import Funnel from "./components/Funnel";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <Stack>
      <Header isLight />
      <Hero />
      <WhoWe />
      <Service />
      <WhyIncrix />
      <HowWeWork />
      <Product />
      <Integrations />
      <PCB />
      <Funnel />
      <Footer />
    </Stack>
  );
}
