import { Inter,Onest } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar/Topbar";
import ParticleBg from "@/components/particleBg/ParticleBg";

const inter = Inter({ subsets: ["latin"] });
const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${onest.className}`}>
        <ParticleBg>
        <Topbar />
        {children}
        </ParticleBg>
        </body>
    </html>
  );
}
