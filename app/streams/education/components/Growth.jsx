import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import cube from "@/public/icons/cube.svg";
import education from "@/public/icons/education.svg";
import creti from "@/public/icons/education/certi.svg";
import live from "@/public/icons/education/live.svg";
import learn from "@/public/icons/education/learn.svg";
import level from "@/public/icons/education/level.svg";
import mat from "@/public/icons/education/mat.svg";
import price from "@/public/icons/education/price.svg";

export default function Growth() {
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
        <Stack maxWidth={"var(--max-width)"} width={"100%"} gap={4} mb={20}>
          <Stack
            bgcolor={"#EFF9FF"}
            p={"40px 80px"}
            borderRadius={"20px"}
            width={"100%"}
            alignItems={"center"}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              gap={10}
              width={"100%"}
              maxWidth={"1200px"}
            >
              <Stack
                alignItems={"flex-start"}
                gap={2}
                maxWidth={550}
                zIndex={1}
              >
                <Stack
                  bgcolor={"#E8F4FC"}
                  p={2}
                  direction={"row"}
                  gap={1}
                  alignItems={"center"}
                  borderRadius={2}
                >
                  <Image src={cube} alt="cube" />
                  <Typography
                    variant={"p"}
                    color="var(--education)"
                    fontSize={16}
                    fontWeight={500}
                  >
                    Essentials
                  </Typography>
                </Stack>
                <Typography variant={"h2"} fontSize={40} fontWeight={700}>
                  Customized guidance for your professional growth.
                </Typography>
                <Typography
                  variant={"p"}
                  fontSize={18}
                  fontWeight={400}
                  color="#6E6E6E"
                >
                  Transform your future with Incrix Education—where anticipation
                  meets action
                </Typography>
                <Stack color={"#6E6E6E"}>
                  <Typography>✓ Tailored resources for your needs</Typography>
                  <Typography>✓ Designed for your tech success</Typography>
                </Stack>
              </Stack>
              <Stack
                width={"100%"}
                height={"100%"}
                direction={{
                  xs: "column",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                alignItems={"center"}
                justifyContent={"center"}
                gap={{
                  xs: 10,
                  sm: "250px",
                }}
              >
                <Stack
                  zIndex={0}
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"100px"}
                  height={"100px"}
                  position={"relative"}
                >
                  <Stack
                    bgcolor={"var(--education)"}
                    p={2}
                    borderRadius={2}
                    zIndex={1}
                    position={"relative"}
                  >
                    <Image src={education} alt="education" />
                    <Stack
                      position={"absolute"}
                      sx={{
                        top: "100%",
                        left: "50%",
                      }}
                      display={{
                        xs: "block",
                        sm: "none",
                      }}
                    >
                      <hr
                        style={{
                          width: "1px",
                          height: "100px",
                          borderTop: "2px dashed #D6DAE4 !important",
                        }}
                      />
                    </Stack>
                    <Stack
                      zIndex={10}
                      direction={"row"}
                      alignItems={"center"}
                      position={"absolute"}
                      // display={{
                      //   xs: "none",
                      //   sm: "inline",
                      // }}
                      visibility={{
                        xs: "hidden",
                        sm: "visible",
                      }}
                      sx={{
                        top: "50%",
                        right: 0,
                        transform: "translate(100%, -50%)",
                      }}
                    >
                      <hr
                        style={{
                          width: "125px",
                          borderTop: "2px dashed #D6DAE4 !important",
                        }}
                      />
                      <hr
                        style={{
                          height: "340px",
                          borderRight: "2px dashed #D6DAE4 !important",
                          border: "none",
                        }}
                      />
                    </Stack>
                  </Stack>
                  <Stack
                    width={"400px"}
                    height={"400px"}
                    position={"absolute"}
                    bgcolor={"#EBF5FF"}
                    display={{
                      xs: "none",
                      md: "block",
                    }}
                    borderRadius={"50%"}
                    zIndex={-1}
                    sx={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></Stack>
                  <Stack
                    width={"220px"}
                    height={"220px"}
                    position={"absolute"}
                    bgcolor={"#DFEFFF"}
                    borderRadius={"50%"}
                    display={{
                      xs: "none",
                      md: "block",
                    }}
                    sx={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></Stack>
                  <Stack
                    width={"150px"}
                    height={"150px"}
                    position={"absolute"}
                    bgcolor={"#EFF9FF"}
                    display={{
                      xs: "none",
                      md: "block",
                    }}
                    borderRadius={"50%"}
                    sx={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></Stack>
                </Stack>
                <Stack gap={2}>
                  <GrowCard title={"Certification"} icon={creti} />
                  <GrowCard title={"Live master Class"} icon={live} />
                  <GrowCard title={"Practical learning"} icon={learn} />
                  <GrowCard title={"Beginner Level "} icon={level} />
                  <GrowCard title={"Materials provided"} icon={mat} />
                  <GrowCard title={"Affordable Price"} icon={price} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const GrowCard = ({ title, icon }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      gap={1}
      width={"220px"}
      bgcolor={"white"}
      p={2}
      borderRadius={"5px"}
      boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
      position={"relative"}
    >
      <Image src={icon} alt="level" />
      <Typography variant={"p"} color="#6E6E6E" fontSize={16} fontWeight={500}>
        {title}
      </Typography>
      <Stack
        position={"absolute"}
        display={{
          xs: "none",
          md: "block",
        }}
        sx={{
          top: "50%",
          left: 0,
          transform: "translate(-110%, -50%)",
        }}
      >
        <hr
          style={{
            width: "125px",
            borderTop: "2px dashed #D6DAE4 !important",
          }}
        />
      </Stack>
    </Stack>
  );
};
