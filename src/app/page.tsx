import Welcome from "@/components/Welcome";
import PickYourTrip from "@/components/pickYourTrip/PickYourTrip";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Welcome />
      <PickYourTrip />
      <Welcome />
      <Welcome />
    </main>
  );
}
