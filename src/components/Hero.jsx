import myesaLogo from '../assets/hero_section/Myesa.webp';
import placeIcon from '../assets/hero_section/place_icon.svg';
import paperBox1 from '../assets/hero_section/PaperBox1.webp';
import paperBox2 from '../assets/hero_section/PaperBox2.webp';
import paperBox3 from '../assets/hero_section/PaperBox3.webp';
import flechaBoton from '../assets/hero_section/Flecha-Boton.svg';
import fechaImg from '../assets/hero_section/Fecha.png';
import plecaGif from '../assets/Pleca.gif';

export default function Hero({ onCtaClick }) {
  return (
    <header id="hero" className="bg-myesa-bg overflow-hidden py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Contenido Principal Hero */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

          {/* Columna Izquierda: Logo y CTA */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-16">

            {/* Logo y Ubicación */}
            <div className="flex flex-col gap-8 lg:gap-10 pt-8 lg:pt-10">
              {/* Logo Myesa Academy */}
              <div className="w-full max-w-[320px] lg:max-w-[569px]">
                <img
                  src={myesaLogo}
                  alt="Myesa Academy 2025 Logo"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-5 p-[10.66px]">
                <div className="w-10 h-12 flex-shrink-0">
                  <img
                    src={placeIcon}
                    alt="Ubicación"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-work text-myesa-black">
                  <p className="text-base md:text-lg lg:text-[21.307px] font-medium uppercase mb-0 lg:leading-[29.298px]">
                    Salones <span className="font-bold">Palenque</span> y <span className="font-bold">Montealbán</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-[18.644px] lg:leading-[29.298px]">
                    <span className="font-bold">World Trade Center</span>, CDMX
                  </p>
                </div>
              </div>
            </div>

            {/* Botón CTA Desktop */}
            <button
              onClick={onCtaClick}
              className="hidden lg:flex bg-myesa-gray-1 rounded-full px-10 py-5 items-center gap-3 w-fit transition-all duration-300 group shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] hover:border-[1.5px] hover:border-myesa-orange hover:shadow-none active:bg-myesa-black active:shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] active:border-0"
            >
              <span className="font-work font-semibold text-white uppercase text-sm">
                Regístrate ahora
              </span>
              <div className="w-4 h-4 transition-all duration-300 group-hover:translate-y-1">
                <img src={flechaBoton} alt="" className="w-full h-full transform rotate-90" />
              </div>
            </button>
          </div>

          {/* Columna Derecha: Productos SOLO DESKTOP - OCULTO EN MOBILE */}
          <div className="hidden lg:flex flex-1 relative w-full items-center justify-center">
            <div className="relative w-full max-w-[525px] h-[550px] flex items-center justify-center">

              {/* PaperBox 1 - Superior derecha (blanca/naranja) - 256.077px × 243.273px */}
              <img
                src={paperBox1}
                alt="Productos Myesa - Caja 1"
                className="absolute w-[256px] h-[243px] object-contain animate-float-slow z-30"
                loading="lazy"
                style={{
                  left: '308px',
                  top: '-110px',
                  aspectRatio: '256.08/243.27',
                  animationDelay: '0s'
                }}
              />

              {/* PaperBox 3 - Centro (negra, la más grande) - 357.378px × 305.022px */}
              <img
                src={paperBox3}
                alt="Productos Myesa - Caja 3"
                className="absolute w-[357px] h-[305px] object-contain animate-float z-20"
                loading="lazy"
                style={{
                  left: '42px',
                  top: '15px',
                  aspectRatio: '357.38/305.02',
                  animationDelay: '1.4s'
                }}
              />

              {/* PaperBox 2 - Abajo izquierda (azul con casco) - 237.622px × 255.921px */}
              <img
                src={paperBox2}
                alt="Productos Myesa - Caja 2"
                className="absolute w-[238px] h-[256px] object-contain animate-float-slow z-10"
                loading="lazy"
                style={{
                  left: '5px',
                  top: '238px',
                  aspectRatio: '237.62/255.92',
                  animationDelay: '0.7s'
                }}
              />

            </div>
          </div>
        </div>

        {/* Fecha del Evento */}
        <div className="mt-12 lg:mt-16 flex items-center justify-center px-4">
          <img
            src={fechaImg}
            alt="21 Noviembre 2025"
            className="w-full max-w-[1080px] h-auto object-contain"
          />
        </div>

        {/* Pleca animada */}
        <div className="mt-6 lg:mt-8 flex items-center justify-center">
          <img
            src={plecaGif}
            alt="Capacitaciones, Demostraciones, Descuentos"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>

        {/* Botón CTA Mobile */}
        <div className="mt-10 flex items-center justify-center lg:hidden">
          <button
            onClick={onCtaClick}
            className="bg-myesa-gray-1 rounded-full px-10 py-5 flex items-center gap-3 transition-all duration-300 group shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] hover:border-[1.5px] hover:border-myesa-orange hover:shadow-none active:bg-myesa-black active:shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] active:border-0"
          >
            <span className="font-work font-semibold text-white uppercase text-sm">
              Regístrate ahora
            </span>
            <div className="w-4 h-4 transition-all duration-300 group-hover:translate-y-1">
              <img src={flechaBoton} alt="" className="w-full h-full transform rotate-90" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}