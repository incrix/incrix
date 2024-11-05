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
          gap={15}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={10}
        //   mt={20}
        >
          <Stack>
            <Typography
              variant={"h1"}
              fontSize={50}
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
              fontSize={22}
              fontWeight={700}
              color="var(--text-color)"
            >
              Students
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant={"h1"}
              fontSize={50}
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
              fontSize={22}
              fontWeight={700}
              color="var(--text-color)"
            >
              Courses
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant={"h1"}
              fontSize={50}
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
              fontSize={22}
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
