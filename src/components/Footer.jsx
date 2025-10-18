export default function Footer() {
  return (
    <footer className="bg-white py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 border-r-0 lg:border-r lg:border-myesa-gray-3 pb-8">
          {/* Columna Izquierda */}
          <div className="flex flex-col md:flex-row items-start gap-8 lg:pr-12">
            {/* Logo Myesa */}
            <div className="w-64 flex-shrink-0">
              <img
                src="https://www.figma.com/api/mcp/asset/aa9cf528-e593-48de-927d-2d99f2149527"
                alt="Myesa Academy 2025"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Info y redes sociales */}
            <div className="flex flex-col gap-6">
              <p className="font-work text-myesa-black text-base">
                Síguenos en nuestras redes sociales.
              </p>

              {/* Redes Sociales */}
              <div className="flex items-center gap-6">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-9 h-9 bg-myesa-black rounded-full flex items-center justify-center hover:bg-myesa-orange transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="w-9 h-9 bg-myesa-black rounded-full flex items-center justify-center hover:bg-myesa-orange transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="w-9 h-9 bg-myesa-black rounded-full flex items-center justify-center hover:bg-myesa-orange transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Grupo Motomex */}
          <div className="flex flex-col items-end gap-6 lg:pl-12">
            <p className="font-work text-myesa-black text-base">
              Grupo Motomex
            </p>
            <div className="w-full max-w-md">
              <img
                src="https://www.figma.com/api/mcp/asset/1170fa27-ec12-4394-8d91-fa29924418dc"
                alt="Grupo Motomex - Motomex y Afina"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-myesa-gray-3 pt-5 mt-8">
          <p className="font-work text-myesa-gray-3 text-base text-center">
            Copyright © 2025 Motos y Equipos
          </p>
        </div>
      </div>
    </footer>
  );
}
