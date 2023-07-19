import Image from "next/image";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <main className=" bg-white px-10 min-h-screen">
      <NavBar />
      <HomePage />
    </main>
  );
}
