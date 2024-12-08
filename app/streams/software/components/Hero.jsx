import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import softwareBg from "@/public/assets/software-bg.png";
import softwareBg1 from "@/public/assets/software-bg1.png";
import softwareHero from "@/public/assets/software-hero.png";

export default function Hero() {
  return (
    <Stack width={"100vw"} height={"calc(100vh - 140px)"}>
      <Stack
        position={"absolute"}
        top={0}
        width={"100%"}
        height={"100vh"}
        maxHeight={{
          xs: "100vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        }}
        zIndex={-1}
        style={{
          backgroundImage: `url(${softwareBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      ></Stack>
      <Stack
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        alignItems={"center"}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "flex-start",
          lg: "flex-start",
          xl: "flex-start",
        }}
        // width={"100%"}
        height={"calc(100% -  60px)"}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          height={"60%"}
          alignItems={"center"}
          gap={2}
        >
          <Typography
            variant={"h1"}
            textAlign={{
              xs: "start",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
            width={"100%"}
            fontSize={{
              xs: 58,
              sm: 58,
              md: 64,
              lg: 64,
              xl: 64,
            }}
            fontWeight={600}
            color="white"
          >
            Shaping future on every <br />
            <Stack
              textAlign={{
                xs: "start",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "center",
              }}
              sx={{
                background: "var(--software-gradient)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              line of code
            </Stack>
          </Typography>
          <Stack width={"100%"}>
            <img
              src={softwareHero.src}
              alt="software"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "1200px",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
