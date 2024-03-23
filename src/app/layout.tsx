import type { Metadata } from "next";
import Header from "./Header/page";
import Footer from "./Footer/page";
import Link from 'next/link';



export const metadata: Metadata = {
  title: "Sales Force"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      <head>
        <Link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></Link>
        </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
