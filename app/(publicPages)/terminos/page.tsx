"use client";

export default function TerminosPage() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black uppercase italic mb-12">
          Términos y <span className="text-pink-600">Condiciones</span>
        </h1>
        
        <div className="space-y-12 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">1. Membresía y Acceso</h2>
            <p>
              La membresía de Super-GYM-Max es personal e intransferible. El acceso a las instalaciones
              requiere la presentación de la credencial digital o biométrica. Nos reservamos el derecho
              de admisión y permanencia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">2. Pagos y Cancelaciones</h2>
            <p>
              Los pagos se realizan por adelantado mediante débito automático. Las cancelaciones deben
              notificarse con 10 días de antelación al cierre del ciclo de facturación. No se realizan
              reembolsos parciales por mes en curso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">3. Normas de Convivencia</h2>
            <p>
              Es obligatorio el uso de toalla y ropa deportiva adecuada. Los usuarios deben higienizar
              los equipos luego de su uso. Se prohíbe el comportamiento agresivo, discriminatorio o
              que perturbe la tranquilidad de otros socios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white uppercase mb-4">4. Responsabilidad Civil</h2>
            <p>
              La empresa no se responsabiliza por la pérdida o hurto de objetos personales no guardados
              en los lockers asignados. La práctica deportiva conlleva riesgos físicos; el usuario declara
              estar apto físicamente para realizar actividad física.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
