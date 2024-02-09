import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import HomePage from "./components/HomePage";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <HomePage>
          {children}
        </HomePage>
      </body>
    </html>
  );
}
