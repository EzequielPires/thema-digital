import { BannerHome } from "@/components/banner_home";
import { BannerVideo } from "@/components/banner_video";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <BannerHome />
      {/* <BannerHomeSecondary /> */}

      <About />

      <Projects />

      <Services />

      {/* <BannerVideo /> */}

      {/* <Comments /> */}

      {/* <Notices /> */}

      <Clients />

      <Contact />

      <Footer />
    </main>
  )
}
