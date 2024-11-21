import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import brandingBg from "@/public/assets/branding-bg.png";
import style from "./branding.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Hero() {
  return (
    <Stack position={"relative"} height={"calc(100vh - 140px)"} zIndex={0}>
      <Image
        src={brandingBg}
        alt="branding-bg"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1,
          width: "100%",
          minWidth: "1000px",
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
          gap={{
            xs: 2,
            sm: 4,
            md: 8,
            lg: 8,
            xl: 8,
          }}
          alignItems={{
            xs: "start",
            sm: "start",
            md: "center",
            lg: "center",
            xl: "center",
          }}
          mb={20}
        >
          <Typography
            variant={"h1"}
            fontSize={{
              xs: 40,
              sm: 60,
              md: 60,
              lg: 70,
              xl: 80,
            }}
            color="#282828"
            fontWeight={600}
            textAlign={{
              xs: "start",
              sm: "start",
              md: "center",
              lg: "center",
              xl: "center",
            }}
          >
            We build{" "}
            <font
              style={{
                color: "var(--branding-gradient)",
                background:
                  "-webkit-linear-gradient(180deg, #580FE4 0%, #EE4B2B 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Brands
            </font>{" "}
            that{" "}
            <Stack
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              }}
            ></Stack>
            builds History
          </Typography>
          <Typography
            variant={"h3"}
            fontSize={20}
            fontWeight={500}
            textAlign={{
              xs: "start",
              sm: "start",
              md: "center",
              lg: "center",
              xl: "center",
            }}
          >
            Your trusted partner for all your business solutions.
          </Typography>
        </Stack>
      </Stack>
      <Stack className={style.floating} alignItems={"center"}>
        <Typography>Scroll</Typography>
        <KeyboardArrowDownIcon />
      </Stack>
    </Stack>
  );
}
