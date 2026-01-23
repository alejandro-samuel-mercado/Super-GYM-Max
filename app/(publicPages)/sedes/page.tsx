"use client";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const sedes = [
  {
    name: "Sede Centro",
    address: "Av. Corrientes 1234, CABA",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    features: ["24hs", "Pileta", "Sauna"],
  },
  {
    name: "Sede Belgrano",
    address: "Av. Cabildo 2500, CABA",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    features: ["Crossfit", "Estacionamiento", "Bar"],
  },
  {
    name: "Sede Palermo",
    address: "Av. Santa Fe 3500, CABA",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    features: ["Yoga Studio", "Musculación", "Shop"],
  },
];

export default function SedesPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
            Nuestras <span className="text-pink-600">Sedes</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entrená cerca de tu casa o trabajo. Accedé a cualquiera de nuestras sucursales con tu pase Full.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sedes.map((sede, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-pink-600/50 transition-colors group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={sede.image}
                  alt={sede.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold uppercase italic">{sede.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4 text-gray-400">
                  <MapPin className="text-pink-600 shrink-0" size={20} />
                  <p>{sede.address}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sede.features.map((feature, i) => (
                    <span key={i} className="text-xs font-bold bg-white/5 px-3 py-1 rounded-full text-pink-500 uppercase">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
