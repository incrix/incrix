import { Stack, Typography } from "@mui/material";

export default function Core() {
  return (
    <Stack>
      <Stack
        width={"100%"}
        color={"white"}
        bgcolor={"black"}
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
          direction={{
            sm: "column",
            md: "row",
          }}
          justifyContent={"space-between"}
          gap={4}
          m={"80px 0"}
        >
          <Typography fontSize={48} fontWeight={500} whiteSpace={"nowrap"}>
            The Core
          </Typography>
          <Stack gap={4}>
            <Stack
              direction={"row"}
              width={"100%"}
              gap={4}
              flexWrap={{
                xs: "wrap",
                sm: "nowrap",
              }}
            >
              <Stack
                width={{
                  xs: "100%",
                  sm: "50%",
                }}
                maxWidth={{
                  xs: "100%",
                  sm: "400px",
                }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color="var(--primary)"
                >
                  What is incrix
                </Typography>
                <Typography fontSize={20} fontWeight={400}>
                  Incrix, a versatile technology-based company, specializes in
                  providing futuristic solutions for complex societal challenges
                  through innovative technologies.
                </Typography>
              </Stack>
              <Stack
                width={{
                  xs: "100%",
                  sm: "50%",
                }}
                maxWidth={{
                  xs: "100%",
                  sm: "400px",
                }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color="var(--primary)"
                >
                  When we started
                </Typography>
                <Typography fontSize={20} fontWeight={400}>
                  In 2019, fueled by passion and vision, Incrix Techlutions
                  emerged—a nexus of innovation, where tech meets purpose.
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              gap={4}
              flexWrap={{
                xs: "wrap",
                sm: "nowrap",
              }}
            >
              <Stack
                width={{
                  xs: "100%",
                  sm: "50%",
                }}
                maxWidth={{
                  xs: "100%",
                  sm: "400px",
                }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color="var(--primary)"
                >
                  Who we are
                </Typography>
                <Typography fontSize={20} fontWeight={400}>
                  A group of like-minded enthusiasts whose beliefs are Equity in
                  mind, Dignity in action and putting forth quality solutions
                  for your problems in a reasonable way.
                </Typography>
              </Stack>
              <Stack
                width={{
                  xs: "100%",
                  sm: "50%",
                }}
                maxWidth={{
                  xs: "100%",
                  sm: "400px",
                }}
              >
                <Typography
                  fontSize={18}
                  fontWeight={600}
                  color="var(--primary)"
                >
                  What we do
                </Typography>
                <Typography fontSize={20} fontWeight={400}>
                  We trust self-belief, prioritize science and technology for
                  human enrichment, and work tirelessly to deliver intelligent
                  solutions aligned with our vision.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
