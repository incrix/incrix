import { Stack, Typography } from "@mui/material";
import styles from "./landing.module.css";

export default function Marquee() {
  return (
    <Stack>
      <Stack className={styles.marquee}>
        <Stack
          className={styles.track}
          direction="row"
          alignItems="center"
          gap={1}
        >
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Logo Design</CustomTypo>
          <CustomTypo>UI & UX</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>React</CustomTypo>
          <CustomTypo>Node.js</CustomTypo>
          <CustomTypo>Next.js</CustomTypo>
          <CustomTypo>Figma</CustomTypo>
          <CustomTypo>App Development</CustomTypo>
          <CustomTypo>Ideation</CustomTypo>
          <CustomTypo>Concept Design</CustomTypo>
          <CustomTypo>Artificial Intelligence</CustomTypo>
          <CustomTypo>IoT</CustomTypo>
          <CustomTypo>Mesh Networks</CustomTypo>
          <CustomTypo>Edge Computing</CustomTypo>
          <CustomTypo>AR & VR</CustomTypo>
          <CustomTypo>Blockchain</CustomTypo>
          <CustomTypo>DApp</CustomTypo>
          <CustomTypo>Ecommerce</CustomTypo>
          <CustomTypo>E-learning</CustomTypo>
          <CustomTypo>Flutter</CustomTypo>
          <CustomTypo>Innovation</CustomTypo>
          <CustomTypo>Prototyping</CustomTypo>
          <CustomTypo>Web Development</CustomTypo>
          <CustomTypo>Smart Contracts</CustomTypo>
          <CustomTypo>Digital Marketing</CustomTypo>
          <CustomTypo>Cybersecurity</CustomTypo>
          <CustomTypo>Cloud Solutions</CustomTypo>
          <CustomTypo>Data Analysis</CustomTypo>
          <CustomTypo>Machine Learning</CustomTypo>
          <CustomTypo>Mobile Apps</CustomTypo>
        </Stack>
      </Stack>
      <Stack className={styles.marquee}>
        <Stack
          className={styles.trackReverse}
          direction="row"
          alignItems="center"
          gap={1}
        >
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>Software</CustomTypo>
          <CustomTypo>Education</CustomTypo>
          <CustomTypo>Studio</CustomTypo>
        </Stack>
      </Stack>
      <Stack className={styles.marquee}>
        <Stack
          className={styles.track}
          direction="row"
          alignItems="center"
          gap={1}
        >
          <CustomTypo>Branding</CustomTypo>
          <CustomTypo>Logo Design</CustomTypo>
          <CustomTypo>UI & UX</CustomTypo>
          <CustomTypo>Automation</CustomTypo>
          <CustomTypo>React</CustomTypo>
          <CustomTypo>Node.js</CustomTypo>
          <CustomTypo>Next.js</CustomTypo>
          <CustomTypo>Figma</CustomTypo>
          <CustomTypo>App Development</CustomTypo>
          <CustomTypo>Ideation</CustomTypo>
          <CustomTypo>Concept Design</CustomTypo>
          <CustomTypo>Artificial Intelligence</CustomTypo>
          <CustomTypo>IoT</CustomTypo>
          <CustomTypo>Mesh Networks</CustomTypo>
          <CustomTypo>Edge Computing</CustomTypo>
          <CustomTypo>AR & VR</CustomTypo>
          <CustomTypo>Blockchain</CustomTypo>
          <CustomTypo>DApp</CustomTypo>
          <CustomTypo>Ecommerce</CustomTypo>
          <CustomTypo>E-learning</CustomTypo>
          <CustomTypo>Flutter</CustomTypo>
          <CustomTypo>Innovation</CustomTypo>
          <CustomTypo>Prototyping</CustomTypo>
          <CustomTypo>Web Development</CustomTypo>
          <CustomTypo>Smart Contracts</CustomTypo>
          <CustomTypo>Digital Marketing</CustomTypo>
          <CustomTypo>Cybersecurity</CustomTypo>
          <CustomTypo>Cloud Solutions</CustomTypo>
          <CustomTypo>Data Analysis</CustomTypo>
          <CustomTypo>Machine Learning</CustomTypo>
          <CustomTypo>Mobile Apps</CustomTypo>
        </Stack>
      </Stack>
    </Stack>
  );
}

function CustomTypo({ children }) {
  return (
    <Typography className={styles.loopText} fontWeight={500} fontSize={28}>
      {children}
    </Typography>
  );
}
