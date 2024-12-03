import { Stack, Typography } from "@mui/material";

export default function Stat() {
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
          width={"100%"}
          gap={{
            xs: 4,
            md: 15,
          }}
          direction={"row"}
          // flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={10}
          mt={{
            xs: "40px",
            md: "0"
          }}
        >
          <Stack>
            <Typography
              variant={"h1"}
              fontSize={{
                xs: 28,
                sm: 50,
              }}
              fontWeight={600}
              color="var(--education)"
            >
              10
              <font
                style={{
                  color: "var(--text-color)",
                  //   fontWeight: 600,
                }}
              >
                K+
              </font>
            </Typography>
            <Typography
              variant={"p"}
              fontSize={{
                xs: 20,
                sm: 22,
              }}
              fontWeight={700}
              color="var(--text-color)"
            >
              Students
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant={"h1"}
              fontSize={{
                xs: 28,
                sm: 50,
              }}
              fontWeight={600}
              color="var(--education)"
            >
              50
              <font
                style={{
                  color: "var(--text-color)",
                }}
              >
                +
              </font>
            </Typography>
            <Typography
              variant={"p"}
              fontSize={{
                xs: 20,
                sm: 22,
              }}
              fontWeight={700}
              color="var(--text-color)"
            >
              Courses
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant={"h1"}
              fontSize={{
                xs: 28,
                sm: 50,
              }}
              fontWeight={600}
              color="var(--education)"
            >
              10
              <font
                style={{
                  color: "var(--text-color)",
                }}
              >
                +
              </font>
            </Typography>
            <Typography
              variant={"p"}
              fontSize={{
                xs: 20,
                sm: 22,
              }}
              fontWeight={700}
              color="var(--text-color)"
            >
              Institutions
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
