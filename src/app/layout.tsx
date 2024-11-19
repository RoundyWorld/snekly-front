import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme, theme } from "@/theme";
import { useColorScheme } from "@mui/material/styles";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import useMediaQuery from "@mui/material/useMediaQuery";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

const pages = ["about", "profile", "resume"];

// const geistSans = localFont({
//   src: "../theme/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../theme/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Snekly",
  description: "Portfolio and Games by Snekly",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const { mode } = useColorScheme(); // Get the user's color scheme preference [5, 6, 7]
  // const mode = "light";
  // const theme = mode === "light" ? lightTheme : darkTheme; // Select the appropriate theme

  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <header>
              <NavBar pages={pages} />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
