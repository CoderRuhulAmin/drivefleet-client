import AvailableCars from "@/components/AvailableCars";
import Banner from "@/components/Banner";
import FeaturedCars from "@/components/FeaturedCars";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedCars />
      <AvailableCars />
    </main>
  );
}