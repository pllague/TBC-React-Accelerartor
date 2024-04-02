import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TBC React Accelerator",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-primary text-white min-h-screen flex flex-col justify-between">
          <Header />
          <main>
          {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}