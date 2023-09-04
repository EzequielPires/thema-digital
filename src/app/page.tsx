import { BannerHome } from "@/components/banner_home";
import { BannerVideo } from "@/components/banner_video";
import { Clients } from "@/components/clients";
import { Comments } from "@/components/comments";
import { Contact } from "@/components/contact";
import { Notices } from "@/components/notices";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Clock, Hexagon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <BannerHome />

      <About />

      <Projects />

      <Services />

      <BannerVideo />

      <Comments />

      <Notices />

      <Clients />

      <Contact />

      <Footer />
    </main>
  )
}
