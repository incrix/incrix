import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Funnel({isEdu}) {
  return (
    <Stack
      width={"100%"}
      padding={{
        xs: "var(--md-side-padding)",
        md: "var(--md-side-padding)",
        lg: "var(--dd-side-padding)",
        xl: "var(--dd-side-padding)",
      }}
      bgcolor={ isEdu ? "white" : "black"}
      alignItems={"center"}
    >
      <Stack
        maxWidth={"var(--max-width)"}
        width={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={4}
        margin={"60px 0"}
      >
        <Stack color={isEdu ? "black" : "white"} gap={4}>
          <Typography
            variant="h2"
            fontWeight={700}
            fontSize={{
              xs: "48px",
              sm: "60px",
              md: "60px",
              lg: "60px",
              xl: "60px",
            }}
          >
            Let&apos;s make your
            <br />
            dreams reality
            <br />
            together.
          </Typography>
          <Typography
            variant="body1"
            fontSize={{
              xs: "16px",
              sm: "20px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            }}
            maxWidth={"800px"}
          >
            Join us in our lively workspace, complete with a range of enjoyable
            activities. Contact us for any assistance you need, except
            telemarketing, and let&apos;s create something amazing together!
          </Typography>
        </Stack>
        <Link
          href="/contact"
          style={{
            display: "inline",
            "-webkit-touch-callout": "none",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
            "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
            marginRight: "40px",
            padding: "20px 40px",
            backgroundColor: isEdu ? "var(--education)" : "white",
            borderRadius: "80px",
          }}
        >
          <Typography
            variant="h5"
            fontSize={{
              xs: "46px",
              sm: "52px",
              md: "52px",
              lg: "52px",
              xl: "52px",
            }}
            alignItems="flex-start"
            whiteSpace="nowrap"
            color={isEdu ? "white" : "black"}
          >
            Let&apos;s work!
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
