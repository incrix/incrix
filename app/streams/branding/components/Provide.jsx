import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import provide from "@/public/assets/provide.svg";
import provideBg from "@/public/assets/provide-bg.png";

export default function Provide() {
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
          gap={8}
          mb={20}
          bgcolor={"#E6E6E6"}
          p={{
            xs: 4,
            sm: 8,
            md: 8,
            lg: 10,
            xl: 10,
          }}
          borderRadius={"30px"}
          position={"relative"}
          zIndex={0}
          alignItems={"center"}
        >
          <Image
            src={provideBg}
            alt="provide-bg"
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              height: "100%",
              width: "100%",
              maxWidth: "500px"
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "space-between",
              xl: "space-between",
            }}
            gap={4}
            width={"100%"}
            maxWidth={"1300px"}
            flexWrap={"wrap"}
            zIndex={1}
          >
            <Stack gap={1}>
              <Typography fontSize={25}>What we provide,</Typography>
              <Typography
                fontSize={{
                  xs: 16,
                  sm: 18,
                  md: 20,
                  lg: 20,
                  xl: 20,
                }}
                maxWidth={{
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: 500,
                  xl: 500,
                }}
              >
                From strategic brand development to advanced digital marketing
                solutions, we amplify your presence across all platforms. Let us
                craft your brand&apos;s story, engage your audience, and elevate
                your brand to new heights. Combining creativity with data-driven
                strategies, our expert team delivers impactful results. Partner
                with us to transform your vision into a powerful brand.
              </Typography>
            </Stack>
            <Stack maxWidth={600}>
              <Image
                src={provide}
                alt="provide"
                style={{
                  width: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
