import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import avinash from "@/public/member/avinash.png";
import abishek from "@/public/member/abishek.png";
import jegan from "@/public/member/jegan.png";

export default function Mavericks() {
  return (
    <Stack>
      <Stack
        width={"100%"}
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
          m={"40px 0"}
        >
          <Typography
            fontSize={{
              xs: 32,
              sm: 64,
            }}
            whiteSpace={"nowrap"}
            fontWeight={500}
          >
            Meet the Mavericks!
          </Typography>
          <Typography
            fontSize={{
              xs: 16,
              sm: 24,
            }}
            fontWeight={500}
          >
            Welcome to our vibrant team—youthful, energetic, and ready to
            redefine possibilities. With passion as our compass, we navigate
            innovation, transforming ideas into exciting realities
          </Typography>
          <Stack
            gap={{
              xs: 2,
              sm: 2,
              md: 2,
              lg: 4,
            }}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            <MemberCard
              name={"Avinash"}
              role={"Director & CEO"}
              responsibility={"Designer, Developer, Engineer"}
              image={avinash}
            />
            <MemberCard
              name={"Abishek"}
              role={"C.I.O & Product Designer"}
              responsibility={"Product Designer, Brand Consultant"}
              image={abishek}
            />
            <MemberCard
              name={"Jegannath"}
              role={"Embedded Architect"}
              responsibility={"PCB, Embedded, IOT"}
              image={jegan}
            />
          </Stack>
          <hr />
        </Stack>
      </Stack>
    </Stack>
  );
}

const MemberCard = ({ name, role, responsibility, image }) => {
  return (
    <Stack
      width={{
        xs: "150px",
        sm: "220px",
      }}
    >
      <Image src={image} alt={name} style={{
        width: "100%",
        height: "auto",
      }}/>
      <Typography
        fontSize={20}
        width={{
          xs: "100%",
          sm: "220px",
        }}
        fontWeight={600}
        mt={1}
      >
        {name}
      </Typography>
      <Typography
        fontSize={16}
        width={{
          xs: "100%",
          sm: "220px",
        }}
        fontWeight={500}
      >
        {role}
      </Typography>
      <Typography
        fontSize={14}
        width={{
          xs: "100%",
          sm: "220px",
        }}
        fontWeight={400}
      >
        {responsibility}
      </Typography>
    </Stack>
  );
};
