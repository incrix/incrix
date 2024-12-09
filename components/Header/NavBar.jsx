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
          <Link className={styles.link} href={"/"}>
            Home
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"/about"}>
            About
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"/streams/software"}>
            Software
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"/streams/branding"}>
            Branding
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"/streams/automation"}>
            Automation
          </Link>
        </div>
        <div className="nav-item-holder">
          <Link className={styles.link} href={"/streams/education"}>
            Education
          </Link>
        </div>
        <Stack marginTop={"40px"} direction={"row"} gap={2}>
          <div className="nav-item-holder">
            <Link className={styles.btnLink} href={"/contact"}>
              Contact
            </Link>
          </div>
          {/* <div className="nav-item-holder">
            <Link className={styles.btnLink} href={"/career"}>
              Career
            </Link>
          </div> */}
        </Stack>
      </nav>
    </Stack>
  );
}
