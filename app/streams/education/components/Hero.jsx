import { Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import eduBg from "@/public/assets/edu-bg.png";
import Stat from "./Stat";

export default function Hero() {
  return (
    <Stack height={"calc(100vh - 140px)"}>
      <Image
        src={eduBg}
        alt="edu-bg"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: -1,
          width: "100%",
          objectFit: "cover",
          height: "100vh",
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
          gap={4}
          alignItems={{
            xs: "flex-start",
            md: "center",
          }}
          mb={20}
          mt={30}
        >
          <Typography
            variant={"p"}
            fontSize={14}
            textAlign={{
              xs: "left",
              md: "center",
            }}
          >
            Invest in your growth🔓—join a program that prepares you for the
            future of your industry.
          </Typography>
          <Typography
            variant={"h1"}
            fontSize={{
              xs: "48px",
              sm: "52px",
              md: "52px",
              lg: "62px",
              xl: "80px",
            }}
            fontWeight={500}
            textAlign={{
              xs: "left",
              md: "center",
            }}
          >
            Invest in Tomorrow with{" "}
            <Stack
              display={{
                xs: "none",
                md: "block",
              }}
            ></Stack>
            <font style={{ color: "var(--education)", fontWeight: 600 }}>
              Future
            </font>{" "}
            Technologies
          </Typography>
          <Typography
            variant={"body"}
            fontSize={16}
            fontWeight={500}
            textAlign={{
              xs: "left",
              md: "center",
            }}
            maxWidth={"700px"}
          >
            Our education solutions are meticulously designed to meet your
            industry&apos;s unique requirements, ensuring you achieve excellence
            at every step.
          </Typography>
          <Typography variant={"p"} fontSize={14} textAlign={"center"}>
            🚀 Summer Internship Training Program 2024
          </Typography>
          <Button
            sx={{
              bgcolor: "var(--education)",
              padding: "12px 24px",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant={"p"}
              fontSize={14}
              color="white"
              textTransform={"none"}
            >
              Apply now
            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Stat />
      {/* <hr
        style={{
          backgroundColor: "none",
          border: "1px solid #EDEDED",
        }}
      /> */}
    </Stack>
  );
}
