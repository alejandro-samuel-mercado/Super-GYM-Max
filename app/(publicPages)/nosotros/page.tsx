"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function SobreNosotrosPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Nuestra Historia</span>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic mt-4 mb-8 leading-[0.9]">
              Más que un <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Gimnasio</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Nacimos en 2015 con una misión clara: democratizar el fitness de alto rendimiento. 
              Lo que empezó como un pequeño garage en Palermo hoy es la red de gimnasios 
              de mayor crecimiento en Argentina.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
              alt="Gym Interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
          {[
            { number: "10+", label: "Sedes" },
            { number: "50k+", label: "Miembros" },
            { number: "200+", label: "Trainers" },
            { number: "24/7", label: "Abierto" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl md:text-6xl font-black italic text-white mb-2">{stat.number}</h3>
              <p className="text-pink-600 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-12">Filosofía <span className="text-pink-600">SuperGYM</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Comunidad</h3>
              <p className="text-gray-400 text-sm">Somos una familia que se apoya mutuamente para alcanzar metas.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Tecnología</h3>
              <p className="text-gray-400 text-sm">Equipamiento de última generación y seguimiento digital.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-4">Pasión</h3>
              <p className="text-gray-400 text-sm">Vivimos el entrenamiento con intensidad y compromiso.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
