import Header from "@/components/Header/Header";
import { Stack, Typography } from "@mui/material";
import Hero from "./components/Hero";
import Form from "./components/Form";
import FAQ from "./components/FAQ";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <Stack bgcolor={"black"}>
      <Header />
      <Hero />
      <Form />
      <FAQ />
      <Footer />
    </Stack>
  );
}
