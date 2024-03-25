import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const COM = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default COM;




// Next.js supports storing application code (including app) in an optional src directory
// Keep the app directory purely for routing purposes. 


// [xx]  dynamic routing
// [...xx]  optional catch-all
// ()  routing group
// @  parallel routing
// (..)
