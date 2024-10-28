import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import teamBg from "@/public/assets/team-bg.png";
import Link from "next/link";

export default function TeamIncrix() {
  return (
    <Stack
      position={"relative"}
      sx={{
        backgroundImage: `url(${teamBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack
        width={"100%"}
        minHeight={"60vh"}
        padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
        alignItems={"center"}
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={4}
          m={"40px 0"}
          pt={8}
          color={"white"}
          direction={"column"}
          alignItems={"flex-start"}
        >
          <Typography
            fontSize={{
              xs: 32,
              sm: 64,
            }}
            fontWeight={500}
          >
            #teamincrix
          </Typography>
          <Typography
            variant={"h2"}
            fontSize={{
              xs: 18,
              sm: 24,
            }}
            fontWeight={500}
            maxWidth={"1000px"}
          >
            A diverse team of skilled professionals, excelling across multiple
            domains to bring your ideas to life with innovation and precision.
          </Typography>
          <Link
            href={"/careers"}
            passHref
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 20px",
              borderRadius: "50px",
              display: "inline",
            }}
          >
            Join Team{" "}
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
