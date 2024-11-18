import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import integration from "@/public/assets/integration.png";
import SecurityIcon from "@mui/icons-material/Security";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import SimCardIcon from "@mui/icons-material/SimCard";

export default function Integrations() {
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
          maxWidth={"1200px"}
          width={"100%"}
          mb={20}
          gap={3}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack maxWidth={900} gap={3}>
            <Stack maxWidth={600}>
              <Typography
                variant={"h3"}
                fontSize={16}
                fontWeight={300}
                textTransform={"uppercase"}
              >
                Integrations
              </Typography>
              <Typography variant={"h2"} fontSize={48} fontWeight={500}>
                Powerful designs for working smarter
              </Typography>
              <Typography variant={"p"} fontSize={20} mt={5} color="#999">
                Our smart home solutions are designed to seamlessly integrate
                with your existing systems, ensuring a hassle-free experience.
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
              <Card
                icon={<SimCardIcon sx={{ fill: "var(--primary)" }} />}
                title="Integration"
                description="Seamlessly linking every device for an effortless lifestyle"
              />
              <Card
                icon={<WifiTetheringIcon sx={{ fill: "var(--primary)" }} />}
                title="Connectivity"
                description="Control and monitor your smart world instantly."
              />
              <Card
                icon={<SecurityIcon sx={{ fill: "var(--primary)" }} />}
                title="Security"
                description="Keeping your connected ecosystem secure and protected."
              />
            </Stack>
          </Stack>
          <Image src={integration} alt="Integration" />
        </Stack>
      </Stack>
    </Stack>
  );
}

const Card = ({ icon, title, description }) => {
  return (
    <Stack
      gap={2}
      direction={"row"}
      alignItems={"flex-start"}
      width={"250px"}
      height={"100px"}
    >
      <Stack>{icon}</Stack>
      <Stack>
        {/* <Typography variant={"h4"} fontSize={24} fontWeight={500}>
          {title}
        </Typography> */}
        <Typography variant={"p"} fontSize={16} color="#999">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};
