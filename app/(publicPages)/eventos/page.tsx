"use client";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const events = [
  {
    title: "Summer Challenge 2026",
    date: "15 FEB",
    type: "Competencia",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
    description: "Desafía tus límites en nuestra competencia anual de Crossfit.",
  },
  {
    title: "Masterclass Yoga",
    date: "28 FEB",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop",
    description: "Una sesión intensiva para perfeccionar tu técnica y encontrar tu centro.",
  },
  {
    title: "Powerlifting Meet",
    date: "10 MAR",
    type: "Torneo",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=2070&auto=format&fit=crop",
    description: "Demostrá tu fuerza en nuestro torneo oficial de levantamiento.",
  },
];

export default function EventosPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Calendario</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic mt-4 mb-4">
            Próximos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Eventos</span>
          </h1>
          <p className="text-gray-400">Sumate a nuestras actividades exclusivas para miembros.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-pink-600/50 transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-pink-500 font-bold mb-2">
                  <Calendar size={18} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase italic mb-3">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-pink-600 hover:text-white transition font-bold uppercase text-sm tracking-wider">
                  Inscribirse
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
