import { Stack, Typography } from "@mui/material";

export default function Metrics() {
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
      >
        <Stack
          maxWidth={"var(--max-width)"}
          width={"100%"}
          gap={4}
          alignItems={"center"}
          mb={20}
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <MetricCard
            title={"Year in the Field"}
            description={
              "Guiding future endeavors and fostering continuous improvement."
            }
            years={5}
          />
          <MetricCard
            title={"Projects Finalized"}
            description={
              "Bringing together innovation and dedication to achieve our goals."
            }
            years={15}
          />
          <MetricCard
            title={"Regular Rating"}
            description={
              "Dependable measure of the overall quality or performance."
            }
            years={4.9}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

const MetricCard = ({ title, description, years }) => {
  return (
    <Stack gap={4} width={300}>
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Typography fontSize={{
          xs: 60,
          sm: 60,
          md: 90,
          lg: 90,
          xl: 90,
        }}>{years}+</Typography>
        <Typography fontSize={{
          xs: 20,
          sm: 20,
          md: 25,
          lg: 25,
          xl: 25,
        }} maxWidth={"600px"}>
          {title}
        </Typography>
      </Stack>
      <Typography fontSize={{
        xs: 18,
        sm: 18,
        md: 20,
        lg: 20,
        xl: 20,
      }} maxWidth={"600px"}>
        {description}
      </Typography>
    </Stack>
  );
};
