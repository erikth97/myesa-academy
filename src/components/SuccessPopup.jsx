import { useEffect } from 'react';
import bgPopup from '../assets/popup/Bg-popup-dektop.png';
import checkIcon from '../assets/popup/Check_icon.png';

export default function SuccessPopup({ isOpen, onClose }) {
  // Bloquear scroll del body cuando el popup está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay con backdrop blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Popup Card */}
      <div
        className="relative w-full max-w-[480px] animate-fade-in-scale"
        style={{
          animation: 'fadeInScale 0.4s ease-out forwards'
        }}
      >
        <div
          className="flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-24 p-8 md:p-10 lg:p-[64px_70px] rounded-2xl border border-[#D7DEDD] relative overflow-hidden"
          style={{
            boxShadow: '0 20px 20px 0 rgba(0, 0, 0, 0.04), 0 4px 3.25px 0 rgba(0, 0, 0, 0.02)'
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgPopup})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Overlay para oscurecer un poco el fondo si es necesario */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />

          {/* Contenido del popup */}
          <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 lg:gap-12 w-full">
            {/* Icono de Check con animación */}
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 animate-check-bounce">
              <img
                src={checkIcon}
                alt="Registro exitoso"
                className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* Textos */}
            <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6 w-full">
              {/* Título principal */}
              <h3 className="font-work font-semibold text-white text-center text-xl md:text-2xl lg:text-[28px] leading-tight">
                Tus respuestas se han enviado correctamente
              </h3>

              {/* Línea divisoria */}
              <div className="w-full max-w-[280px] h-px bg-white/30" />

              {/* Mensaje secundario */}
              <p className="font-work text-white text-center text-sm md:text-base lg:text-[16px] leading-relaxed max-w-[320px]">
                En breve se te enviará un WhatsApp para confirmar tu registro
              </p>
            </div>
          </div>

          {/* Botón Continuar */}
          <div className="relative z-10 w-full flex justify-center mt-4">
            <button
              onClick={onClose}
              className="flex w-full max-w-[320px] px-8 py-2.5 justify-center items-center gap-2.5 rounded-[20px] bg-myesa-orange hover:bg-myesa-orange-light transition-all duration-300 shadow-[0px_4px_8px_0px_rgba(255,58,0,0.25)] hover:shadow-[0px_6px_12px_0px_rgba(255,58,0,0.35)] active:scale-95"
            >
              <span className="font-work font-semibold text-white uppercase text-sm tracking-wide">
                Continuar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
