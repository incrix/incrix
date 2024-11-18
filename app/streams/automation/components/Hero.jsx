import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import automationBg from "@/public/assets/automation-bg.svg";

export default function Hero() {
  return (
    <Stack
      sx={{
        height: "calc(100vh - 140px)",
      }}
      position={"relative"}
    >
      <Image
        src={automationBg}
        alt="Automation Background"
        layout="fill"
        objectFit="cover"
        quality={0}
      />
      <Stack
        position={"absolute"}
        top={"50%"}
        right={"50%"}
        sx={{
          transform: "translate(50%, -50%)",
          bgcolor: "var(--primary)",
          width: "200px",
          height: "200px",
          filter: "blur(100px)",
        }}
      ></Stack>
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
            md: 4,
          }}
          mb={20}
          textAlign={"center"}
          zIndex={1}
        >
          <Typography variant="p" fontSize={20}>
            With automation, the future is not just bright; it’s dazzling ⚡!
          </Typography>
          <Typography variant={"h1"} fontSize={64} fontWeight={500}>
            Where <font style={{ color: "var(--primary)" }}>Automation</font>{" "}
            Meets <br /> Innovative Solutions
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
