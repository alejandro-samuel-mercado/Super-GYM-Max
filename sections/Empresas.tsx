"use client";
import SectionTitle from "@/components/SectionTitle";
import { Heart, TrendingUp, Users } from "lucide-react";

export default function EmpresasPage() {
  return (
    <div id="empresas" className="pt-24 pb-20">
      <SectionTitle
        text1="Corporativo"
        text2="SuperGYMAX for Business"
        text3="Mejorá la productividad y salud de tu equipo con nuestros planes corporativos."
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mt-20">
        {[
          {
            icon: <Users />,
            title: "Planes Grupales",
            desc: "Descuentos exclusivos para equipos de más de 10 personas.",
          },
          {
            icon: <TrendingUp />,
            title: "Productividad",
            desc: "El ejercicio reduce el estrés y mejora el enfoque laboral.",
          },
          {
            icon: <Heart />,
            title: "Bienestar",
            desc: "Acceso total a todas nuestras sedes y clases especiales.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center p-8 bg-pink-950/20 rounded-3xl border border-pink-900/50"
          >
            <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p className="text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
