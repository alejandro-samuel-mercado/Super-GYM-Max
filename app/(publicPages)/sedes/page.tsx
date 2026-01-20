"use client";
import SectionTitle from "@/components/SectionTitle";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
const sedes = [
  {
    nombre: "Palermo Hollywood",
    direccion: "Humboldt 1550, CABA",
    imagen:
      "https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/filename/2953232/lg_Oq28kqke-KNhmdMIb_jFPJOPo2bS9R8M.jpeg",
    servicios: ["Abierto 24hs", "Estacionamiento", "Crossfit", "Sauna"],
  },
  {
    nombre: "Belgrano R",
    direccion: "Av. Cabildo 2200, CABA",
    imagen:
      "https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/filename/3839791/lg_-b6S3KZioig4BAJ2eP47Bl1CDlc2pqSi.jpg",
    servicios: ["Abierto 24hs", "Pileta Olímpica", "Yoga", "Cafetería"],
  },
  {
    nombre: "San Telmo",
    direccion: "Defensa 800, CABA",
    imagen:
      "https://ar.gimnasios.com/im/media/YTo0OntzOjI6ImlkIjtpOjE0MjM5MjtzOjE6InciO2k6MzAwO3M6MToiaCI7aTozMDA7czoxOiJ0IjtzOjE5OiJtYXAtY2Fyb3VzZWwtc2xpZGVyIjt9",
    servicios: ["Boxeo", "Funcional", "Duchas Pro", "Wifi"],
  },
];

export default function SedesPage() {
  return (
    <div className="pt-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Locaciones"
        text2="Nuestras Sedes"
        text3="Encontrá el SuperGYMAX más cercano a vos y empezá hoy mismo."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-20">
        {sedes.map((sede, index) => (
          <motion.div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="h-auto w-auto object-cover  bg-pink-900/20 relative">
              <Image
                src={sede.imagen}
                alt={sede.nombre}
                width={450}
                height={200}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{sede.nombre}</h3>
              <p className="text-slate-400 flex items-center gap-2 mb-4 text-sm">
                <MapPin size={16} className="text-pink-600" /> {sede.direccion}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {sede.servicios.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-widest bg-slate-800 px-2 py-1 rounded text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button className="w-full py-3 bg-pink-600 rounded-xl font-bold hover:bg-pink-700 transition">
                {" "}
                Ver Detalles{" "}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
