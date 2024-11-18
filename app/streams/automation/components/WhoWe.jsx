import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import whowe from "@/public/assets/whowe.png";

export default function WhoWe() {
  return (
    <Stack>
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
          mb={20}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={whowe}
            alt="Who We Are"
            // layout="responsive"
            quality={100}
            height={500}
          />
          <Stack
            gap={2}
            width={"100%"}
            maxWidth={"800px"}
            height={"600px"}
            p={"30px 50px"}
            sx={{
              background: "linear-gradient(0deg, #F7F7F7, #fff)",
              border: "2px solid #FFF6F3",
              borderRadius: "20px 0px 50px 20px",
            }}
            justifyContent={"center"}
          >
            <Typography variant="h1" fontSize={16} fontWeight={400}>
              Who We Are
            </Typography>
            <Typography variant="p" fontSize={48} fontWeight={500}>
              Delivering <font style={{
                color: "var(--primary)",
              }}>Automation Excellence</font> with Expert Solutions
            </Typography>

            <Typography variant="p" fontSize={16} lineHeight={2}>
              Incrix Automation is a pioneering product-based company from South
              Tamil Nadu, specializing in delivering cutting-edge automation
              solutions. Our expertise spans custom microcontroller development,
              PCB fabrication, and intelligent automation systems that improve
              lives and optimize business operations. We’re committed to
              quality, innovation, and customer satisfaction.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
