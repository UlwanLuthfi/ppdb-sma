import NavigationBar from "@/components/NavigationBar";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Quicksand } from "next/font/google";
import Footer from "@/components/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "PPDB SMA",
  description: "Website PPBD SMA 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`d-flex flex-column min-vh-100 ${quicksand.className}`}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
