import { IPricing } from "@/types";

export const pricingData: IPricing[] = [
  {
    name: "Pase Diario",
    price: 5000,
    period: "día",
    features: [
      "Acceso libre a máquinas",
      "Duchas y vestuarios",
      "Sin matrícula",
    ],
    mostPopular: false,
  },
  {
    name: "Mensual Pro",
    price: 35000,
    period: "mes",
    features: [
      "Acceso ilimitado",
      "Clases grupales incluidas",
      "Evaluación física inicial",
      "Plan de entrenamiento app",
      "Acceso a lockers",
    ],
    mostPopular: true,
  },
  {
    name: "Anual VIP",
    price: 300000,
    period: "año",
    features: [
      "Todo lo del plan Pro",
      "Acceso a sedes partner",
      "Toallas incluidas",
      "Bebidas isotónicas gratis",
      "Nutricionista mensual",
      "Merchandising de regalo",
    ],
    mostPopular: false,
  },
];
