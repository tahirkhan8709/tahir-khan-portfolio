import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer
import CustomCursor from "@/components/CustomCursor"; // Import Cursor
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased overflow-x-hidden">
         <div className="noise" />
        <CustomCursor /> {/* Glass cursor effect */}
        <Navbar />
        {children}
        <Footer /> {/* Social and info footer */}
      </body>
    </html>
  );
}