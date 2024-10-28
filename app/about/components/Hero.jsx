import { Stack, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Stack>
      <Stack
        width={"100%"}
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
          height={"60vh"}
          minHeight={"600px"}
          justifyContent={"center"}
        >
          <Typography
            fontSize={{
              xs: 48,
              sm: 64,
            }}
            fontWeight={500}
          >
            We&apos;re built for creating!
          </Typography>
          <Typography
            fontSize={{
              xs: 18,
              sm: 24,
            }}
            fontWeight={500}
          >
            At Incrix, we&apos;re the architects of possibility, the dreamers
            who code reality, and the alchemists turning ideas into innovation.
            Welcome to our universe of technologies.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
