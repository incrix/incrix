import { Stack, Typography, Input, IconButton, Grid2 } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import Image from "next/image";
import LogoLight from "@/public/assets/logo-light.svg";
import LogoDark from "@/public/assets/logo-dark.svg";

export default function Footer() {
  return (
    <Stack
      width={"100%"}
      height={"auto"}
      alignItems={"center"}
      sx={{
        backgroundColor: "black",
      }}
      padding={{
          xs: "var(--md-side-padding)",
          md: "var(--md-side-padding)",
          lg: "var(--dd-side-padding)",
          xl: "var(--dd-side-padding)",
        }}
    >
      <Stack
        maxWidth={"var(--max-width)"}
        width={"100%"}
        
      >
        <footer style={{ width: "100%" }}>
          <Stack spacing={4}>
            <hr
              style={{
                borderColor: "var(--primary)",
              }}
            />
            {/* <Stack
              direction={"row"}
              flexWrap={"wrap"}
              gap={2}
              justifyContent={"space-between"}
            > */}
            <Grid2 container spacing={10}>
              <Grid2 size={{
                xs: 12,
                sm:12,
                md: 12,
                lg: 5,
                xl: 5,
              }}>
                <Stack gap={2}>
                  <Typography variant="h6" sx={{ color: "var(--primary)" }}>
                    SUBSCRIBE TO THE NEWSLETTER
                  </Typography>
                  <Typography variant="body" sx={{ color: "white" }}>
                    Dive into our office life with captivating blog articles and
                    playlists <br /> no spam, just delightful content on the
                    horizon! 🎉
                  </Typography>
                  <Input
                    placeholder="Your email"
                    disableUnderline={true}
                    startAdornment={
                      <MailIcon sx={{ fill: "var(--text-color)" }} />
                    }
                    endAdornment={
                      <IconButton
                        sx={{
                          color: "white",
                          borderRadius: "50%",
                        }}
                      >
                        <SendIcon sx={{ fill: "var(--text-color)" }} />
                      </IconButton>
                    }
                    sx={{
                      color: "white",
                      width: "100%",
                      maxWidth: "490px",
                      mt: 2,
                      padding: "10px 20px",
                      borderColor: "var(--foot-tf)",
                      borderRadius: "50px",
                      backgroundColor: "var(--foot-tf)",
                      "&.MuiInput-input": {
                        border: "none",
                      },
                    }}
                    inputProps={{
                      style: {
                        marginLeft: "10px",
                      },
                    }}
                  />
                </Stack>
              </Grid2>
              <Grid2 size={{
                xs: 12,
                sm: 12,
                md: 12,
                lg: 7,
                xl: 7,
              }}>
                <Stack
                  gap={4}
                  direction={"row"}
                  // width={"100%"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                >
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ color: "var(--primary)" }}>
                      COMPANY
                    </Typography>
                    <Stack color={"white"} spacing={2}>
                      <Link style={{
                        fontSize: "16px",
                      }} href="/">Home</Link>
                      <Link href="/about">About</Link>
                      <Link href="/services">Services</Link>
                      <Link href="/portfolio">Life @ Incrix</Link>
                      <Link href="/career">Career</Link>
                      <Link href="/contact">Contacts</Link>
                    </Stack>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ color: "var(--primary)" }}>
                      STREAMS
                    </Typography>
                    <Stack color={"white"} spacing={2}>
                      <Link href="/automation">Automation</Link>
                      <Link href="/branding">Branding</Link>
                      <Link href="/software">Software</Link>
                      <Link href="/education">Education</Link>
                    </Stack>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ color: "var(--primary)" }}>
                      FOLLOW US
                    </Typography>
                    <Stack color={"white"} spacing={2}>
                      <Link href="/automation">Instagram</Link>
                      <Link href="/branding">LinkedIn</Link>
                      <Link href="/software">Facebook</Link>
                      <Link href="/education">X</Link>
                    </Stack>
                  </Stack>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ color: "var(--primary)" }}>
                      GET IN TOUCH
                    </Typography>
                    <Stack color={"white"} spacing={2}>
                      <Link href="/automation">info@incrix.com</Link>
                      <Link href="/branding">+91 9786799765</Link>
                    </Stack>
                    <Typography variant="h6" sx={{ color: "var(--primary)" }}>
                      WHERE WE ARE
                    </Typography>
                    <Typography
                      variant="body"
                      sx={{
                        color: "white",
                        lineHeight: "18px",
                        letterSpacing: "2px",
                        fontSize: "16px",
                      }}
                    >
                      697G/33/6,
                      <br /> Manthithoppu Rd,
                      <br /> Kovilpatti,
                      <br />
                      Tamil Nadu - 628502
                    </Typography>
                  </Stack>
                </Stack>
              </Grid2>
            </Grid2>
            {/* </Stack> */}
            <hr
              style={{
                borderColor: "var(--primary)",
              }}
            />
            <Stack>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                justifyContent="space-between"
                gap={2}
                fontSize="12px"
              >
                <Typography variant="body" sx={{ color: "white" }}>
                  COPYRIGHT {new Date().getFullYear()} - INCRIX TECHLUTIONS LLP
                  - CIN AAX-3668
                  <Link href="/privacy-policy">PRIVACY POLICY</Link> .
                  <Link href="/terms-of-service">COOKIES POLICY</Link>
                </Typography>
                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  gap={2}
                >
                  <Typography variant="body" sx={{ color: "white" }}>
                    CRAFTED BY{" "}
                    <font
                      style={{ color: "var(--primary)", fontWeight: "600" }}
                    >
                      INCRIX
                    </font>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack height={"60px"}></Stack>
            <Stack width={"100%"} height={"150px"} alignItems={"center"} position={"relative"}>
              <Image src={LogoDark} alt="" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }} />
            </Stack>
          </Stack>
        </footer>
      </Stack>
    </Stack>
  );
}
