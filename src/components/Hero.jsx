export default function Hero({ onCtaClick }) {
  return (
    <header id="hero" className="bg-myesa-bg overflow-hidden py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Contenido Principal Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Columna Izquierda: Logo y CTA */}
          <div className="flex flex-col gap-12 lg:gap-16">

            {/* Logo y Ubicación */}
            <div className="flex flex-col gap-8 lg:gap-10">
              {/* Logo Myesa Academy */}
              <div className="w-full max-w-md">
                <img
                  src="https://www.figma.com/api/mcp/asset/710d1319-beff-4dff-9e05-e955dcd10811"
                  alt="Myesa Academy 2025 Logo"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-12 flex-shrink-0">
                  <img
                    src="https://www.figma.com/api/mcp/asset/cb1e177b-cc65-40ce-968c-1368e143c2f7"
                    alt="Ubicación"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-work text-myesa-black">
                  <p className="text-base md:text-lg lg:text-xl font-medium uppercase mb-1">
                    Salones <span className="font-bold">Palenque</span> y <span className="font-bold">Montealbán</span>
                  </p>
                  <p className="text-sm md:text-base lg:text-lg">
                    <span className="font-bold">World Trade Center</span>, CDMX
                  </p>
                </div>
              </div>
            </div>

            {/* Botón CTA */}
            <button
              onClick={onCtaClick}
              className="bg-myesa-black border border-myesa-orange rounded-full px-6 py-4 flex items-center gap-3 w-fit hover:bg-myesa-orange transition-all duration-300 group"
            >
              <span className="font-work font-semibold text-myesa-white uppercase text-sm md:text-base">
                Regístrate ahora
              </span>
              <svg className="w-5 h-5 transform rotate-90 transition-all duration-300 group-hover:translate-y-1" viewBox="0 0 20 20" fill="none">
                <path d="M10 0L10 20M10 20L20 10M10 20L0 10" stroke="#E7E7E7" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* Columna Derecha: Productos */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://www.figma.com/api/mcp/asset/36256d80-4e5b-47f5-a852-36d856fef7a1"
                alt="Productos Myesa - Caja 3"
                className="absolute w-3/5 h-auto object-contain top-1/4 left-1/4 transform -translate-x-1/4"
                loading="lazy"
              />
              <img
                src="https://www.figma.com/api/mcp/asset/854981e5-ccee-4748-8bfd-74114660a443"
                alt="Productos Myesa - Caja 1"
                className="absolute w-2/5 h-auto object-contain top-0 right-0 transform translate-x-1/4 -translate-y-1/4"
                loading="lazy"
              />
              <img
                src="https://www.figma.com/api/mcp/asset/06985176-2d5c-4b2c-88eb-81479c54b4a6"
                alt="Productos Myesa - Caja 2"
                className="absolute w-2/5 h-auto object-contain bottom-0 left-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Fecha del Evento */}
        <div className="mt-12 lg:mt-16 flex items-center justify-center px-4">
          <div className="relative flex items-center justify-center gap-0">
            {/* Día */}
            <div className="bg-myesa-orange px-4 py-3 z-10">
              <p className="font-sharp font-bold text-3xl md:text-4xl lg:text-5xl text-myesa-white-2 uppercase text-center">
                21
              </p>
            </div>

            {/* Mes */}
            <div className="relative bg-myesa-black px-8 md:px-16 lg:px-24 py-3">
              <p className="font-sharp font-medium text-2xl md:text-3xl lg:text-4xl text-myesa-white uppercase text-center">
                noviembre
              </p>
            </div>

            {/* Año */}
            <div className="bg-myesa-blue px-6 py-3 z-10">
              <p className="font-sharp font-bold text-3xl md:text-4xl lg:text-5xl text-myesa-white-2 uppercase text-center">
                2025
              </p>
            </div>
          </div>
        </div>

        {/* Premios/Descuentos */}
        <div className="mt-8 flex items-center justify-center">
          <div className="w-full max-w-md h-24">
            <img
              src="https://www.figma.com/api/mcp/asset/6ffd9bfd-d585-4d71-9a76-f5a8bf9c95b2"
              alt="Descuentos disponibles"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
