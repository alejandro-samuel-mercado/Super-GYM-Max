"use client";
import { motion } from "motion/react";
import Image from "next/image";

const posts = [
  {
    title: "Nutrición para Hipertrofia",
    category: "Nutrición",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    link:"https://www.clarasancheznutricionista.com/alimentacion-para-la-hipertrofia-muscular/",
    excerpt: "Descubrí qué comer antes y después de entrenar para maximizar tus ganancias musculares.",
  },
  {
    title: "Beneficios del HIIT",
    category: "Entrenamiento",
    image: "https://images.unsplash.com/photo-1517963879466-e925ac3ed21f?q=80&w=2014&auto=format&fit=crop",
    link:"https://etenonfitness.com/es/blog/10-beneficios-entrenamiento-hiit/",
    excerpt: "Por qué el entrenamiento interválico de alta intensidad es clave para quemar grasa.",
  },
  {
    title: "Recuperación Muscular",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    link:"https://farmalastic.cinfa.com/blog/recuperacion-muscular-post-entrenamiento",
    excerpt: "La importancia del sueño y el descanso activo para evitar lesiones y progresar.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Super Blog</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic mt-4 mb-4">
            Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">News</span>
            </h1>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => window.open(post.link, "_blank")}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase border border-white/10">
                  {post.category}
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase italic mb-3 group-hover:text-pink-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
