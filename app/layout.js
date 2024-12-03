import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/components/Theme";
import Footer from "@/components/Footer/Footer";

const centraleSans = localFont({
  src: [
    {
      path: "../public/fonts/Centrale Sans Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Centrale Sans Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Centrale Sans Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Centrale Sans Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Centrale Sans Bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-centrale-sans",
  weight: "200 300 400 500",
});

const smooch = localFont({
  src: [
    {
      path: "../public/fonts/Smooch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-smooch",
  weight: "400",
});

export const metadata = {
  title: {
    default: "Incrix",
    template: "%s | Incrix",
  },
  description:
    "Incrix Techlutions is a multi-field technology based company offers both software and hardware solutions for complex solutions in our society using futuristic technologies like Blockchain, Edge Computing, AI, IoT etc. We also expand our service to various verticals such as Branding, Automations, Education etc,.",
  twitter: {
    card: "summary_large_image",
    site: "@incrix",
    creator: "@incrix",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${centraleSans.variable} ${smooch.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
