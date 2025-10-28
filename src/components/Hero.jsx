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
    <header id="hero" className="bg-myesa-bg overflow-hidden">
      {/* MOBILE VERSION */}
      <div className="lg:hidden flex flex-col gap-10 items-center justify-center pb-10 pt-[50px] px-[30px]">

        {/* Logo centrado mobile */}
        <div className="flex flex-col gap-[10px] items-center justify-center w-full py-[50px]">
          <div className="w-[320px] h-[110px]">
            <img
              src={myesaLogo}
              alt="Myesa Academy 2025 Logo"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </div>

        {/* Fecha mobile */}
        <div className="flex items-center justify-center w-full -mx-[15px]">
          <img
            src={fechaImg}
            alt="21 Noviembre 2025"
            className="w-full max-w-[1188px] h-auto object-contain scale-110"
          />
        </div>

        {/* Ubicación mobile */}
        <a
          href="https://maps.app.goo.gl/AZuwCHWyjMNiE89w6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-[10px] items-center justify-center hover:opacity-70 transition-opacity duration-300 cursor-pointer"
        >
          <div className="w-5 h-6 flex-shrink-0">
            <img
              src={placeIcon}
              alt="Ubicación"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="font-work text-myesa-black uppercase">
            <p className="text-[12px] font-medium leading-[15px] mb-0">
              Salones <span className="font-bold">Palenque</span> y <span className="font-bold">Montealbán</span>
            </p>
            <p className="text-[10px] leading-[15px]">
              Mezzanine, WTC, CDMX.
            </p>
          </div>
        </a>

        {/* GIF mobile */}
        <div className="flex items-center justify-center w-[315px]">
          <img
            src={plecaGif}
            alt="Capacitaciones, Demostraciones, Descuentos"
            className="w-[205px] h-[50px] object-contain"
          />
        </div>

        {/* Botón CTA Mobile */}
        <button
          onClick={onCtaClick}
          className="bg-myesa-gray-1 rounded-full px-[46px] py-[23px] flex items-center gap-3 transition-all duration-300 group shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] border-[1.5px] border-transparent hover:border-myesa-orange hover:shadow-none active:bg-myesa-black active:shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] active:border-transparent"
        >
          <span className="font-work font-semibold text-white uppercase text-[16px]">
            Regístrate ahora
          </span>
          <div className="w-[18px] h-[18px]">
            <img src={flechaBoton} alt="" className="w-full h-full animate-pulse-arrow" />
          </div>
        </button>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:block py-20 px-24">
        <div className="max-w-7xl mx-auto">

          {/* Contenido Principal Hero Desktop */}
          <div className="flex gap-12 items-center">

            {/* Columna Izquierda: Logo, Ubicación y CTA */}
            <div className="flex-1 flex flex-col gap-16">

              {/* Logo y Ubicación */}
              <div className="flex flex-col gap-10 pt-10">

                {/* Logo Myesa Academy */}
                <div className="w-full max-w-[569px]">
                  <img
                    src={myesaLogo}
                    alt="Myesa Academy 2025 Logo"
                    className="w-full h-auto object-contain"
                    loading="eager"
                  />
                </div>

                {/* Ubicación */}
                <a
                  href="https://maps.app.goo.gl/AZuwCHWyjMNiE89w6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-[10.66px] hover:opacity-70 transition-opacity duration-300 cursor-pointer"
                >
                  <div className="w-10 h-12 flex-shrink-0">
                    <img
                      src={placeIcon}
                      alt="Ubicación"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="font-work text-myesa-black">
                    <p className="text-[21.307px] font-medium uppercase mb-0 leading-[29.298px]">
                      Salones <span className="font-bold">Palenque</span> y <span className="font-bold">Montealbán</span>
                    </p>
                    <p className="text-[18.644px] leading-[29.298px]">
                      <span className="font-bold">World Trade Center</span>, CDMX
                    </p>
                  </div>
                </a>
              </div>

              {/* Botón CTA Desktop */}
              <button
                onClick={onCtaClick}
                className="bg-myesa-gray-1 rounded-full px-[46px] py-[23px] items-center gap-3 w-fit transition-all duration-300 group shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] border-[1.5px] border-transparent hover:border-myesa-orange hover:shadow-none active:bg-myesa-black active:shadow-[0px_6px_10px_4px_rgba(0,0,0,0.15),0px_2px_3px_0px_rgba(0,0,0,0.3)] active:border-transparent flex"
              >
                <span className="font-work font-semibold text-white uppercase text-[16px]">
                  Regístrate ahora
                </span>
                <div className="w-[18px] h-[18px]">
                  <img src={flechaBoton} alt="" className="w-full h-full animate-pulse-arrow" />
                </div>
              </button>
            </div>

            {/* Columna Derecha: Productos Desktop */}
            <div className="flex-1 relative w-full items-center justify-center flex">
              <div className="relative w-full max-w-[525px] h-[550px] flex items-center justify-center">

                {/* PaperBox 1 - Superior derecha (blanca/naranja) */}
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

                {/* PaperBox 3 - Centro (negra, la más grande) */}
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

                {/* PaperBox 2 - Abajo izquierda (azul con casco) */}
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

          {/* Fecha del Evento Desktop */}
          <div className="mt-16 flex items-center justify-center">
            <img
              src={fechaImg}
              alt="21 Noviembre 2025"
              className="w-full max-w-[3888px] h-auto object-contain"
            />
          </div>

          {/* Pleca animada Desktop */}
          <div className="mt-8 flex items-center justify-center">
            <img
              src={plecaGif}
              alt="Capacitaciones, Demostraciones, Descuentos"
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
