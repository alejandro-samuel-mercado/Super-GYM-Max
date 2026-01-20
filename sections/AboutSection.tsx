"use client";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div id="about" className="pt-24 mb-20">
      <SectionTitle
        text1="Nuestra Historia"
        text2="Pasión por el Hierro"
        text3="Desde Buenos Aires, redefiniendo el concepto de gimnasio premium."
      />

      <div className="mt-20 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto px-6">
        <div className="w-full md:w-1/2 h-96 bg-slate-800 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <Image
            src={
              "https://d2567ph5zp6ttk.cloudfront.net/public/storage/us/Blog_Images/October-2025/Kari-C/Kari%207%20Team.jpg?_t=1761316816"
            }
            className="object-cover"
            width={600}
            height={500}
            alt="owner"
          />
          <div className="w-full h-full flex items-center justify-center text-slate-600 font-bold italic text-3xl">
            ORIGINS
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold">
            Más que un gimnasio, una comunidad.
          </h3>
          <p className="text-slate-400">
            SuperGYMAX nació de la necesidad de un espacio donde la tecnología y
            el entrenamiento duro coexistan. No solo ofrecemos máquinas,
            ofrecemos un sistema de transformación personal.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="text-4xl font-bold text-pink-600">+10k</p>
              <p className="text-sm text-slate-500">Socios Activos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-pink-600">15</p>
              <p className="text-sm text-slate-500">Sedes en CABA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
