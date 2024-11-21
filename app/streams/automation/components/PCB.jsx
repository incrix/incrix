"use client";
import { Stack, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import TWIN from "@/public/3d/TWIN1";
import { useEffect } from "react";

export default function PCB() {
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
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography
            variant={"h3"}
            fontSize={20}
            fontWeight={600}
            textAlign={"center"}
            color={"var(--primary)"}
          >
            Our Works
          </Typography>
          <Typography
            variant={"h5"}
            fontSize={48}
            fontWeight={500}
            textAlign={"center"}
          >
            Our Innovation Journey
          </Typography>
          <Stack  gap={4} flexWrap={"wrap"} alignItems={"center"}>
            <Stack
              width={"1200px"}
              height={500}
              position={"relative"}
              margin={"30px"}
            >
              <TwinEdge />
                <Typography fontSize={162} sx={{
                  position: "absolute",
                  top: "30%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#EEEEEE",
                  fontWeight: 600,
                  zIndex: -1,
                  textWrap: "nowrap",
                }}>Twin Edge Dev v1</Typography>
            </Stack>

            <Stack
              gap={2}
              bgcolor={"#FFF8F5"}
              p={4}
              sx={{
                width: "500px",
                height: "600px",
                borderRadius: "10px",
              }}
            >
              <Typography variant={"h5"} fontSize={24} fontWeight={600}>
                Twin Edge
              </Typography>
              <ul>
                <li>
                  <Typography>
                    A powerful ESP32-S3 multifunctional board crafted for IoT,
                    prototyping, and automation.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Combines Wi-Fi, Bluetooth, and high-performance processing
                    for limitless possibilities.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Built with flexibility and efficiency, perfect for
                    developers and engineers pushing boundaries.
                  </Typography>
                </li>
              </ul>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const TwinEdge = () => {
  const [cameraPosition, setCameraPosition] = useState([0, 30, 0]);
  useEffect(() => {
    setInterval(() => {
      setCameraPosition((prev) => {
        if (prev[0] > 10) {
          return prev;
        }
        return [prev[0] + 0.0333, prev[1], prev[2] + 0.1];
      });
    }
    , 10);
  }, []);

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        backgroundColor: "transparent",
      }}
    >
      <PerspectiveCamera makeDefault position={cameraPosition} fov={15} />
      <ambientLight intensity={1.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <TWIN />
      </Suspense>
      <Environment preset="sunset" />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -0.9, 0]}
        color={"black"}
        opacity={1}
        width={10}
        height={10}
        blur={0.8}
        far={1}
      />
    </Canvas>
  );
};
