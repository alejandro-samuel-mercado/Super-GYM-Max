"use client";
import SectionTitle from "@/components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Contacto"
        text2="Hablemos"
        text3="¿Listo para empezar tu cambio? Escribinos y te asesoramos."
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
        }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full"
      >
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium">Tu Nombre</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
            <UserIcon className="size-5" />
            <input
              name="name"
              type="text"
              placeholder="Ingresá tu nombre"
              className="w-full p-3 outline-none bg-transparent"
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium">Email</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
            <MailIcon className="size-5" />
            <input
              name="email"
              type="email"
              placeholder="Ingresá tu email"
              className="w-full p-3 outline-none bg-transparent"
              required
            />
          </div>
        </motion.div>

        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium">Mensaje</p>
          <textarea
            name="message"
            rows={8}
            placeholder="¿En qué podemos ayudarte?"
            className="focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 bg-transparent"
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-max flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 rounded-full"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Enviar Mensaje
          <ArrowRightIcon className="size-5" />
        </motion.button>
      </form>
    </div>
  );
}
