import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return <Layout>
    <h1>Index file</h1>

  </Layout>;
}
