import Topbar1 from "@/components/topbar/Topbar1";


export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col relative">
      <Topbar1 />
      {children}
    </div>
  );
}
