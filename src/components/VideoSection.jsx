import bgNoise from '../assets/video_section/BG-Noise.webp';
import arrowSubtitle from '../assets/arrow_subtitle.svg';

export default function VideoSection() {
  return (
    <section className="relative bg-myesa-black py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-24">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={bgNoise}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Título */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-11 h-11">
            <img
              src={arrowSubtitle}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="font-sharp text-myesa-white-2 uppercase">
            <p className="text-lg md:text-xl font-light">Revive la experiencia</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium">Myesa Academy</p>
          </div>
        </div>

        {/* Video */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-myesa-gray-1">
            {/* Placeholder para video - puedes reemplazar con un iframe de YouTube o tag <video> */}
            <div className="w-full h-full flex items-center justify-center text-myesa-white-2">
              <p className="text-xl font-work">Video de Myesa Academy 2024</p>
            </div>
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-myesa-orange rounded-full p-6 hover:bg-myesa-orange-light transition-colors cursor-pointer">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
