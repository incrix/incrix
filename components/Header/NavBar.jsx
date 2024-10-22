import { Stack } from "@mui/material";
import Link from "next/link";
import styles from "./header.module.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  useGSAP(() => {
    gsap.set(".nav-item-holder", { y: 100, opacity: 0 });
    gsap.to(".nav-item-holder", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    });
  });
  return (
    <Stack
      justifyContent={"center"}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <nav className={styles.nav}>
        <div className="nav-item-holder"></div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"#"}>
            Home
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"#"}>
            About
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"#"}>
            Software
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"#"}>
            Branding
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"#"}>
            Automation
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"#"}>
            Education
          </Link>
        </div>
        <Stack marginTop={"40px"} direction={"row"} gap={2}>
          <div className="nav-item-holder">
            <Link className={styles.btnLink} href={"#"}>Contact</Link>
          </div>
          <div className="nav-item-holder">
            <Link className={styles.btnLink} href={"#"}>Career</Link>
          </div>
        </Stack>
      </nav>
    </Stack>
  );
}
