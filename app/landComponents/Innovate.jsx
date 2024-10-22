import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import matrix from "@/public/assets/matrix.svg";

export default function Innovate() {
  return (
    <Stack>
      <Stack
        width={"100%"}
        position={"relative"}
        bgcolor={"black"}
        color={"white"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        mb={10}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          maxWidth={"var(--max-width)"}
          m={"150px 0"}
        >
          <Typography
            fontSize={80}
            fontWeight={500}
            lineHeight={"120%"}
            letterSpacing={"0"}
          >
            WE INNOVATE WITH
            <br />
            HUMANITY&apos;S POTENTIAL
            <br />
            AND TECHNOLOGY,
            <br />
            REDEFINING POSSIBILITIES
            <br />
            FOR A BETTER WORLD.
          </Typography>
        </Stack>
        <Stack
          position={"absolute"}
          width={"100%"}
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={matrix}
            alt={"innovate"}
            style={{
              width: "100%",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
