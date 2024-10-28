import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import brandingBg from "@/public/assets/branding-bg.png";

export default function Hero() {
  return (
    <Stack position={"relative"} height={"calc(100vh - 140px)"} zIndex={0}>
      <Image
        src={brandingBg}
        alt="branding-bg"
        width={"100vw"}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1,
        }}
      />
      <Stack
        width={"100%"}
        height={"100%"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={8}
          alignItems={"center"}
          mb={20}
        >
          <Typography
            variant={"h1"}
            fontSize={80}
            color="#282828"
            fontWeight={600}
            textAlign={"center"}
          >
            We build <font style={{ color: "var(--primary)" }}>Brands</font>{" "}
            that
            <br /> builds History
          </Typography>
          <Typography variant={"h3"} fontSize={20} fontWeight={500}>
            Your trusted partner for all your business solutions.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
