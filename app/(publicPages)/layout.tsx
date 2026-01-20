import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ButtonW from "@/components/ButtonW";                       
import React from "react";

export const metadata = {
  title: "SuperGYMAX - El Mejor Gimnasio de Buenos Aires",
  description:
    "Entrená con la mejor tecnología y ambiente. Abierto 24hs. Convertite en tu mejor versión en SuperGYMAX.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ButtonW/>
    </>
  );
}
