import { Inter, Onest } from "next/font/google";
import "./globals.css";
import ParticleBg from "@/components/particleBg/ParticleBg";
import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import ToastContext from "@/context/ToastContext";
import AuthProvider from "@/context/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FirebaseAuthProvider from "@/context/FirebaseAuthProvider";

const inter = Inter({ subsets: ["latin"] });
const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: 'Nexus',
  description: 'Nexus is the new way of chats',
}

export default async function RootLayout({ children }) {
  const session = getServerSession(authOptions);
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} ${onest.className}`} suppressHydrationWarning={true}>
          <FirebaseAuthProvider>
            <ToastContext>
              <ParticleBg>
                {children}
                </ParticleBg>
            </ToastContext>
          </FirebaseAuthProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
