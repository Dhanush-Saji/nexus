import Topbar from "@/components/topbar/Topbar";

export default function RootLayout({ children }) {
    return (
      <>
        <Topbar />
        {children}
        </>
    )
  }