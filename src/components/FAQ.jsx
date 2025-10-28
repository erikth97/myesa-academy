import { useState } from 'react';
import arrowSubtitle from '../assets/arrow_subtitle.svg';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      question: "¿A qué hora empieza Myesa Academy?",
      answer: "El registro inicia a las 10:00 a.m. donde obtendrás tu gafete de acceso, la última conferencia termina a las 8:00 pm"
    },
    {
      question: "¿Cómo puedo asistir a Myesa Academy?",
      answer: "Debes registrarte llenando el formulario con los datos indicados, al final recibirás un mensaje via WhatsApp de tu inscripción, junto con un código QR."
    },
    {
      question: "¿Cuál es la fecha límite para registrarme?",
      answer: "El último día para llenar el formulario y registrarte es el 10 de noviembre de 2025. Te recomendamos registrarte lo antes posible para asegurar tu lugar."
    },
    {
      question: "¿Puedo llevar acompañante al evento?",
      answer: "Si. En caso de asistir con acompañante(s), este deberá completar su propio registro. te recomendamos asistir con alguien de tu staff para que conozca mas a detalle sobre nuestras marcas"
    },
    {
      question: "¿Habrá alimentos accesibles?",
      answer: "Sí, habrá servicio de coffee break entre cada conferencia del evento para los asistentes registrados."
    },
    {
      question: "¿Tiene costo el evento?",
      answer: "No, Myesa Academy es completamente gratuito y específicamente para nuestros distribuidores, solo debes registrarte previamente."
    },
    {
      question: "¿Está permitido el acceso a niños?",
      answer: "Queremos que disfruten plenamente de la experiencia de conocer y aprender de nuestras marcas, por lo que el evento está diseñado exclusivamente para adultos."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gradient-to-b from-myesa-gray-1 via-[50%] via-myesa-gray-1 to-myesa-gray-2 py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-24 relative">
      {/* Separador con degradado */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="h-full w-full bg-gradient-to-r from-myesa-white via-transparent to-myesa-white"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="flex items-center justify-center gap-4 mb-12 lg:mb-14">
          <div className="w-10 h-10 lg:w-11 lg:h-11 animate-float-arrow flex-shrink-0">
            <img
              src={arrowSubtitle}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="font-sharp text-myesa-white-2 uppercase text-center lg:text-left">
            <p className="text-2xl md:text-2xl lg:text-4xl font-medium leading-tight md:leading-none">
              Preguntas<br className="md:hidden" /> frecuentes
            </p>
          </div>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-0 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-myesa-gray-3 border-t-0 first:border-t">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-6 md:py-7 flex items-center justify-between gap-4 text-left hover:bg-myesa-gray-1 hover:bg-opacity-20 transition-colors"
              >
                <span className="font-work font-semibold text-myesa-white text-sm md:text-base flex-1">
                  {faq.question}
                </span>
                <span
                  className={`text-myesa-white text-2xl flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                    activeIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-6 bg-myesa-gray-1 bg-opacity-10">
                  <p className="font-work text-myesa-white text-sm md:text-base leading-relaxed">
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
