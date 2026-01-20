"use client";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";

const posts = [
  {
    title: "5 Tips para hipertrofia",
    category: "Entrenamiento",
    date: "20 Jan, 2026",
  },
  {
    title: "Dietas cetogénicas: ¿Funcionan?",
    category: "Nutrición",
    date: "18 Jan, 2026",
  },
  {
    title: "Cómo evitar lesiones en el gym",
    category: "Salud",
    date: "15 Jan, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 px-6 md:px-32 mb-20">
      <SectionTitle
        text1="Contenido"
        text2="Blog de Fitness"
        text3="Aprendé de nuestros expertos."
      />
      <div className="mt-16 space-y-6 max-w-4xl mx-auto">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-pink-950/20 transition cursor-pointer"
            whileHover={{ x: 10 }}
          >
            <div>
              <span className="text-pink-500 text-xs font-bold uppercase">
                {post.category}
              </span>
              <h3 className="text-2xl font-bold mt-1 group-hover:text-pink-400 transition">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm mt-2">{post.date}</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 border border-pink-600 rounded-full text-sm">
              Leer más
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
