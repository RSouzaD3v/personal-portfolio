import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header";
import Techs from "@/components/Techs/Techs";

export default function Home() {
  return (
    <div>
      <Header />
  
      <Banner />

      <Techs />

      <About />
    </div>
  );
}