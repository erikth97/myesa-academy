import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "¿A qué hora empieza Myesa Academy?",
      answer: "El registro inicia a las 10 am donde obtendrás tu gafete de acceso, la última conferencia termina a las 7:30 pm"
    },
    {
      question: "¿Cómo puedo asistir a Myesa Academy?",
      answer: "Debes registrarte a través de este formulario. Una vez confirmado tu registro, recibirás un correo de confirmación con todos los detalles del evento."
    },
    {
      question: "¿Cuál es la fecha límite para registrarme?",
      answer: "Puedes registrarte hasta el 20 de noviembre de 2025, o hasta agotar cupo. Te recomendamos registrarte lo antes posible para asegurar tu lugar."
    },
    {
      question: "¿Puedo llevar acompañante al evento?",
      answer: "Cada persona debe registrarse individualmente. Si deseas asistir con un acompañante, este deberá completar su propio registro."
    },
    {
      question: "¿Habrá alimentos accesibles?",
      answer: "Sí, habrá servicio de coffee break y alimentos disponibles durante el evento para todos los asistentes registrados."
    },
    {
      question: "¿Tiene costo el evento?",
      answer: "No, el evento es completamente gratuito para clientes y socios comerciales de Myesa registrados."
    },
    {
      question: "¿Está permitido el acceso a niños?",
      answer: "Este es un evento profesional dirigido principalmente a adultos del sector. Para información específica sobre menores, contacta al organizador."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gradient-to-b from-myesa-gray-1 via-myesa-gray-1 to-myesa-gray-2 border-t border-myesa-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-11 h-11">
            <img
              src="https://www.figma.com/api/mcp/asset/4df7d091-fbcf-42d8-ad17-120955ba6803"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="font-sharp text-myesa-white-2 uppercase">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium">Preguntas frecuentes</p>
          </div>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-myesa-gray-3">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-myesa-gray-1 hover:bg-opacity-30 transition-colors"
              >
                <span className="font-work font-semibold text-myesa-white text-base">
                  {faq.question}
                </span>
                <span className="text-myesa-white text-2xl flex-shrink-0">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4">
                  <p className="font-work font-medium text-myesa-gray-4 text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
