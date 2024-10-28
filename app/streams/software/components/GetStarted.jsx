import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import gridCircle from "@/public/assets/grid-circle.svg";
import astro from "@/public/icons/astro.png";
import next from "@/public/icons/next.png";
import cSharp from "@/public/icons/c-sharp.png";
import mui from "@/public/icons/mui.png";
import tailwind from "@/public/icons/tailwind.png";
import vercel from "@/public/icons/vercel.png";
import savlet from "@/public/icons/savlet.png";
import styles from "./software.module.css";

export default function GetStarted() {
  return (
    <Stack bgcolor={"black"} color={"white"} position={"relative"} zIndex={0}>
      <Image
        src={gridCircle}
        alt="grid-circle"
        width={750}
        style={{
          position: "absolute",
          top: "53%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      />
      <Stack
        width={"100%"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        alignItems={"center"}
        mt={20}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={8}
          m={"200px 0"}
          alignItems={"center"}
          position={"relative"}
        >
          <Typography
            variant="h2"
            fontSize={50}
            fontWeight={700}
            textAlign={"center"}
            zIndex={1}
          >
            All the power you need,
            <br /> just get started
          </Typography>
          <Typography
            variant="p"
            fontSize={18}
            fontWeight={500}
            textAlign={"center"}
            maxWidth={"400px"}
            zIndex={1}
          >
            Enhance your software solutions with advanced coding practices,
            robust performance optimization, and adaptable management tools.
          </Typography>
          <Stack
            position={"absolute"}
            width={{
              xs: "180%",
              sm: "150%",
              md: "100%",
              lg: "100%",
              xl: "100%",
            }}
            height={750}
            sx={{
              top: {
                xs: "20%",
                sm: "50%",
                md: "50%",
                lg: "50%",
                xl: "50%",
              },
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={astro}
              alt="astro"
              width={60}
              style={{
                zIndex: -1,
                position: "absolute",
                top: "180px",
                left: "27%",
              }}
            />
            <Image
              src={next}
              alt="next"
              width={75}
              style={{
                zIndex: -2,
                position: "absolute",
                top: "360px",
                left: "20%",
              }}
            />
            <Image
              src={tailwind}
              alt="tailwind"
              width={51}
              style={{
                zIndex: -2,
                position: "absolute",
                bottom: "180px",
                left: "33%",
              }}
            />
            <Image
              src={savlet}
              alt="savlet"
              width={67}
              style={{
                zIndex: -2,
                position: "absolute",
                top: "80px",
                left: "45%",
              }}
            />
            <Image
              src={mui}
              alt="mui"
              width={74}
              style={{
                zIndex: -2,
                position: "absolute",
                top: "160px",
                left: "70%",
              }}
            />
            <Image
              src={vercel}
              alt="vercel"
              width={76}
              style={{
                zIndex: -2,
                position: "absolute",
                top: "360px",
                left: "75%",
              }}
            />
            <Image
              src={cSharp}
              alt="cSharp"
              width={53}
              style={{
                zIndex: -2,
                position: "absolute",
                bottom: "80px",
                left: "55%",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
