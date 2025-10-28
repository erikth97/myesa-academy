import myesaFooterLogo from '../assets/footer/myesa_footer.png';
import motomexLogo from '../assets/footer/MotomexLogo.webp';
import motosYEquiposLogo from '../assets/footer/Motos y Equipos.png';
import fbIcon from '../assets/footer/socialmedia/FB-Icon.svg';
import igIcon from '../assets/footer/socialmedia/IG-Icon.svg';
import youtubeIcon from '../assets/footer/socialmedia/Youtube-Icon.svg';

export default function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Contenedor principal horizontal */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-6 border-b border-gray-300">
          {/* Sección Izquierda: Logo MYESA */}
          <div className="flex-shrink-0">
            <img
              src={myesaFooterLogo}
              alt="Myesa Academy 2025"
              className="h-24 w-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Sección Central: Redes Sociales */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <p className="font-work text-myesa-black text-sm md:text-base">
              Síguenos en nuestras redes sociales.
            </p>

            {/* Iconos de Redes Sociales */}
            <div className="flex items-center justify-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/MotoYEquip.SA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-8 md:h-8 flex-shrink-0 hover:scale-125 transition-all duration-300 ease-out"
                aria-label="Facebook"
              >
                <img
                  src={fbIcon}
                  alt="Facebook"
                  className="w-full h-full object-contain hover:brightness-110 hover:saturate-150 transition-all duration-300"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/motosyequipos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-8 md:h-8 flex-shrink-0 hover:scale-125 transition-all duration-300 ease-out ml-2"
                aria-label="Instagram"
              >
                <img
                  src={igIcon}
                  alt="Instagram"
                  className="w-full h-full object-contain hover:brightness-110 hover:saturate-150 transition-all duration-300"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@MotosYEquiposSA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-8 md:h-8 flex-shrink-0 hover:scale-125 transition-all duration-300 ease-out ml-2"
                aria-label="YouTube"
              >
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-full h-full object-contain hover:brightness-110 hover:saturate-150 transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* Sección Derecha: Motos y Equipos con línea divisoria */}
          <div className="flex items-center gap-8">
            {/* Línea divisoria vertical (solo visible en desktop) */}
            <div className="hidden lg:block w-px h-20 bg-gray-300"></div>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <p className="font-work text-myesa-black text-sm md:text-base">
                Motos y Equipos, S.A.
              </p>
              <a
                href="https://www.motosyequipos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Visitar Motos y Equipos"
              >
                <img
                  src={motosYEquiposLogo}
                  alt="Motos y Equipos"
                  className="h-10 md:h-16 w-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y Logo Motomex */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright - Justificado a la izquierda */}
          <p className="font-work text-gray-400 text-base md:text-sm text-center md:text-left">
            Copyright © 2025 Motos y Equipos
          </p>

          {/* Logo Grupo Motomex - Justificado a la derecha */}
          <a
            href="https://www.grupomotomex.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Visitar Grupo Motomex"
          >
            <img
              src={motomexLogo}
              alt="Grupo Motomex - 65 Años"
              className="h-8 md:h-12 w-auto object-contain"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
