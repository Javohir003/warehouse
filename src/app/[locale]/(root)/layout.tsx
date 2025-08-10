import "../../globals.css";
import Navbar from '@/components/Navbar/NavbarLayout'
import Footer from "@/components/Footer/Footer"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </>
  );
}