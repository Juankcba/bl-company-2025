import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import BannerContact from "@/components/home/BannerContact"
export default function Home() {
  return (
    <section className="w-full">
      <h2 className="text-white text-center my-10 text-7xl">Sitio en renovación</h2>
      <BannerContact />
      
    </section>
  );
}
