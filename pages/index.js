import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/components/layout";

export default function Home() {
  return <Layout title={"Home page"}>
    <h1 className="bg-dark text-light">Index file</h1>

  </Layout>;
}
