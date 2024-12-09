import Image from "next/image";
import LogoLight from "@/public/assets/logo-light.svg";
import LogoDark from "@/public/assets/logo-dark.svg";
import HamMenu from "./HamMenu";
import styles from "./header.module.css";
import { Stack } from "@mui/material";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import eduLogo from "@/public/assets/edu-logo.svg"

export default function Header({ isLight, isEdu }) {
  return (
    <Stack
      position={"relative"}
      padding={{
        xs: "var(--md-side-padding)",
        md: "var(--md-side-padding)",
        lg: "var(--dd-side-padding)",
        xl: "var(--dd-side-padding)",
      }}
      zIndex={1000}
    >
      <header className={styles.header}>
        <Link href={"/"}>
          <Image
            src={isEdu && eduLogo || (isLight && LogoLight) || LogoDark}
            alt="Logo"
            height={isEdu ? 30 : 25}
          />
        </Link>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ gap: "20px" }}
          flexDirection="row-reverse"
        >
          <Stack
            display={{
              xs: "none",
              sm: "flex",
            }}
          >
            <Link
              href={"/contact#project"}
              style={{
                marginRight: "80px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "500",
                fontSize: "18px",
                color: isLight ? "black" : "white",
              }}
            >
              Get a quote <EastIcon />
            </Link>
          </Stack>
          <HamMenu isLight={isLight} isEdu={isEdu} />
        </Stack>
      </header>
    </Stack>
  );
}
