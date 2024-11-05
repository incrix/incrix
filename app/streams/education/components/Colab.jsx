import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import mapBg from "@/public/assets/map-bg.png";
import inst1 from "@/public/assets/inst-1.png";
import inst2 from "@/public/assets/inst-2.png";
import inst3 from "@/public/assets/inst-3.png";
import inst4 from "@/public/assets/inst-4.png";
import inst5 from "@/public/assets/inst-5.png";
import inst6 from "@/public/assets/inst-6.png";

export default function Colab() {
  const instImages = [inst1, inst2, inst3, inst4, inst5, inst6];
  return (
    <Stack position={"relative"}>
      <Image
        src={mapBg}
        alt="map-bg"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          width: "100%",
          height: "95%",
          objectFit: "contain",
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
          mb={20}
          mt={20}
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Typography variant="h3" fontWeight={500} maxWidth={"600px"}>
            We collaborate with leading{" "}
            <font style={{ color: "var(--education)", fontWeight: 600 }}>
              Institutions
            </font>
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            maxWidth={"500px"}
            justifyContent={"center"}
          >
            {instImages.map((img, index) => {
              return (
                <Stack
                  key={index}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    bgcolor: " white",
                    borderRadius: "10px",
                    width: "150px",
                    height: "150px",
                    padding: "10px",
                    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
                  }}
                >
                  <Image
                    src={img}
                    alt="inst-1"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      margin: "10px",
                    }}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
