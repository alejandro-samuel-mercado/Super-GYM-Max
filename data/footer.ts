import { IFooter } from "@/types";

export const footerData: IFooter[] = [
  {
    title: "Gimnasio",
    links: [
      { name: "Inicio", href: "#" },
      { name: "Sedes", href: "/sedes" },
      { name: "Empresas", href: "#empresas" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      { name: "Sobre SuperGYMAX", href: "#about" },
      { name: "Blog", href: "/blog" },
      { name: "Eventos", href: "#" },
    ],
  },
  {
    title: "Legales",
    links: [
      { name: "Privacidad", href: "/privacidad" },
      { name: "Términos y Condiciones", href: "#" },
    ],
  },
];
