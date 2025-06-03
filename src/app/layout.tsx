'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const StyledBody = styled.body `
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
margin: 0;`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledBody className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header background="/wavebg3.png"/>
        {children}
        <Footer background={true} title="&copy; Bushra Rauf 2025"/>
      </StyledBody>
    </html>
  );
}
