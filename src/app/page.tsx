import Welcome from "@/components/Welcome";
import PickYourTrip from "@/components/pickYourTrip/PickYourTrip";
import AboutUs from "@/components/aboutUs/AboutUs";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Welcome />
      <PickYourTrip />
      <AboutUs />
      <Footer />
    </main>
  );
}
