import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Hero() {
  return (
    <Stack
      bgcolor={"black"}
      color={"white"}
      sx={{
        height: "calc(100vh - 10px)",
        "& a": {
          color: "white",
          textDecoration: "underline",
        },
      }}
    >
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
        <Stack maxWidth={"var(--max-width)"} width={"100%"} gap={{
          xs: 2,
          md: 4,
        }} mb={20}>
          <Typography variant={"h1"} color={"#999999"} fontSize={24}>
            Contact
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 24,
              md: 40,
            }}
          >
            Want to partner with us or have a question?
            <br />
            Feel free to reach out
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 18,
              md: 24,
            }}
          >
            Drop us a line on&nbsp;
            <Link href={"mailto:info@incrix.com"} passHref>
              info@incrix.com
            </Link>
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 18,
              md: 24,
            }}
          >
            Share your&nbsp;
            <Link href={"#project"} passHref>
              project requirements
            </Link>
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 18,
              md: 24,
            }}
          >
            Call us on&nbsp;
            <Link href={"tel:+919999999999"} passHref>
              +91 93587 81566
            </Link>
            &nbsp;between 9 - 6 IST
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 18,
              md: 24,
            }}
          >
            Get <Link href={"/"}>directions</Link> to our office
          </Typography>
          <Typography
            variant={"p"}
            fontSize={{
              xs: 18,
              md: 24,
            }}
          >
            Or reach,
            <br />
            <br />
            697G/33/6, Annai Therasa Nagar, Manthithoppu Rd,
            <br />
            Kovilpatti - 628501
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
