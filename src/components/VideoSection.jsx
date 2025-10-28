import { useState } from 'react';
import bgNoise from '../assets/video_section/BG-Noise.webp';
import videoCover from '../assets/video_section/Video-Cover.png';
import arrowSubtitle from '../assets/arrow_subtitle.svg';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '7D79DrAHHMM';

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-[100px] px-4 md:px-8 lg:px-[95px]"
      style={{
        background: 'linear-gradient(180deg, #1A1A1A 0%, #1A1A1A 70%, #070707 100%)'
      }}
    >

      {/* Background BG-Noise - Textura de fondo */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={bgNoise}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.5 }}
          loading="lazy"
        />
      </div>

      {/* Background con efecto de luminiscencia - Sobre la textura */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <div className="absolute inset-0 bg-gradient-radial from-myesa-gray-2/30 via-myesa-black/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] bg-gradient-radial from-myesa-gray-2/20 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col gap-10 lg:gap-[55px] items-center z-20">

        {/* Título */}
        <div className="flex gap-3 lg:gap-4 items-center justify-center w-full p-[10px]">
          {/* Icono flecha naranja */}
          <div className="w-9 h-9 lg:w-[45px] lg:h-[45px] flex-shrink-0 animate-float-arrow">
            <img
              src={arrowSubtitle}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col justify-center text-center lg:text-left" style={{ lineHeight: 'normal' }}>
            <p className="font-sharp text-[#F5F5F5] mb-0 text-base md:text-lg lg:text-xl" style={{ fontWeight: 400, lineHeight: 'normal' }}>
              Revive la experiencia
            </p>
            <p className="font-sharp text-[#F5F5F5] uppercase text-2xl md:text-3xl lg:text-4xl" style={{ fontWeight: 500, lineHeight: 'normal' }}>
              Myesa Academy
            </p>
          </div>
        </div>

        {/* Contenedor del video con efecto glow */}
        <div className="relative w-full max-w-[900px]">

          {/* Glow effect alrededor del video */}
          <div className="absolute -inset-8 bg-gradient-radial from-myesa-gray-2/40 via-myesa-gray-2/10 to-transparent blur-2xl pointer-events-none"></div>

          {/* Video container con aspect ratio 16:9 */}
          <div className="relative w-full aspect-video bg-myesa-black rounded-lg overflow-hidden shadow-[0px_-4px_30px_2px_rgba(98,96,97,0.5)]">

            {!isPlaying ? (
              <>
                {/* Cover personalizado del video */}
                <img
                  src={videoCover}
                  alt="Myesa Academy Video"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Botón de play con liquid glass effect */}
                <button
                  onClick={handlePlayClick}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  aria-label="Reproducir video"
                >
                  <div className="relative">
                    {/* Glow effect del botón - naranja ligero */}
                    <div className="absolute inset-0 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" style={{ backgroundColor: 'rgba(255, 179, 128, 0.25)' }}></div>

                    {/* Botón glassmorphism - naranja ligero */}
                    <div
                      className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 liquid-glass-button"
                      style={{
                        backgroundColor: 'rgba(255, 179, 128, 0.15)',
                        border: '1px solid rgba(255, 179, 128, 0.3)',
                        boxShadow: '0 8px 32px 0 rgba(255, 146, 72, 0.2)'
                      }}
                    >
                      {/* Icono de play - naranja muy ligero */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="#FFD4B3"
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ml-1"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </button>
              </>
            ) : (
              /* Iframe de YouTube cuando se hace clic en play */
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Myesa Academy Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
