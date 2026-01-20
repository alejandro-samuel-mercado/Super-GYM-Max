"use client";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "5403883118692";
  const message =
    "¡Hola SuperGYMAX! Quiero más información sobre los planes de entrenamiento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex items-center group">
      <motion.span
        className="mr-4 px-4 py-2 bg-slate-900 border border-slate-800 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block shadow-2xl"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        ¿Tenés dudas?{" "}
        <span className="text-green-400 font-bold">Chateá con nosotros</span>
      </motion.span>

      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping"></span>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center size-14 md:size-16 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-shadow duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          aria-label="Contactar por WhatsApp"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-white fill-white"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.4 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
