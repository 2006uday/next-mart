import Navbar from "@/components/top_navbar";
import MiddleNavbar from "@/components/middle_navbar";
import LastNavbar from "@/components/last_navvbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <MiddleNavbar />
      <LastNavbar />
    </>
  );
}
