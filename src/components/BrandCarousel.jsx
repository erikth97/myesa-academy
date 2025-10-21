import michelinLogo from '../assets/hero_section/logosMYESA/Michelin.webp';
import kendaLogo from '../assets/hero_section/logosMYESA/Kenda.webp';
import vipalLogo from '../assets/hero_section/logosMYESA/Vipal.webp';
import kohlLogo from '../assets/hero_section/logosMYESA/Kohl.webp';
import shadLogo from '../assets/hero_section/logosMYESA/SHAD.webp';
import r7Logo from '../assets/hero_section/logosMYESA/R7.webp';
import kumotoLogo from '../assets/hero_section/logosMYESA/Kumoto.webp';
import motulLogo from '../assets/hero_section/logosMYESA/Motul.webp';
import ngkLogo from '../assets/hero_section/logosMYESA/NGK.webp';
import rkLogo from '../assets/hero_section/logosMYESA/RK.webp';
import ls2Logo from '../assets/hero_section/logosMYESA/LS2.webp';
import agvLogo from '../assets/hero_section/logosMYESA/AGV.webp';
import alpinestarsLogo from '../assets/hero_section/logosMYESA/Alpinestars.webp';
import osakaLogo from '../assets/hero_section/logosMYESA/Osaka.webp';
import stallionLogo from '../assets/hero_section/logosMYESA/Stallion.webp';
import energyboltLogo from '../assets/hero_section/logosMYESA/Energybolt.webp';
import dynavoltLogo from '../assets/hero_section/logosMYESA/Dynavolt.webp';
import grimaldiLogo from '../assets/hero_section/logosMYESA/Grimaldi.webp';
import promotoLogo from '../assets/hero_section/logosMYESA/Promoto.webp';
import promotoPlatino from '../assets/hero_section/logosMYESA/PromotoPlatino.webp';

export default function BrandCarousel() {
  const brands = [
    { src: michelinLogo, alt: "Michelin", height: "h-12 md:h-14" },
    { src: kendaLogo, alt: "Kenda", height: "h-8 md:h-10" },
    { src: vipalLogo, alt: "Vipal", height: "h-10 md:h-10" },
    { src: kohlLogo, alt: "Kohl", height: "h-8 md:h-8" },
    { src: shadLogo, alt: "SHAD", height: "h-10 md:h-10" },
    { src: r7Logo, alt: "R7", height: "h-12 md:h-12" },
    { src: kumotoLogo, alt: "Kumoto", height: "h-10 md:h-10" },
    { src: motulLogo, alt: "Motul", height: "h-14 md:h-14" },
    { src: ngkLogo, alt: "NGK", height: "h-16 md:h-16" },
    { src: rkLogo, alt: "RK", height: "h-12 md:h-12" },
    { src: ls2Logo, alt: "LS2", height: "h-12 md:h-12" },
    { src: agvLogo, alt: "AGV", height: "h-12 md:h-12" },
    { src: alpinestarsLogo, alt: "Alpinestars", height: "h-10 md:h-10" },
    { src: osakaLogo, alt: "Osaka", height: "h-12 md:h-12" },
    { src: stallionLogo, alt: "Stallion", height: "h-10 md:h-10" },
    { src: energyboltLogo, alt: "Energybolt", height: "h-10 md:h-10" },
    { src: dynavoltLogo, alt: "Dynavolt", height: "h-12 md:h-12" },
    { src: grimaldiLogo, alt: "Grimaldi", height: "h-10 md:h-10" },
    { src: promotoLogo, alt: "Promoto", height: "h-12 md:h-12" },
    { src: promotoPlatino, alt: "Promoto Platino", height: "h-12 md:h-12" },
  ];

  return (
    <section className="bg-myesa-bg py-8 lg:py-12 overflow-hidden">
      <div className="relative w-full">
        <div className="flex items-center gap-8 md:gap-11 animate-scroll-left">
          {/* Primera repetición de logos */}
          {brands.map((brand, index) => (
            <img
              key={`brand-1-${index}`}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.height} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0`}
            />
          ))}

          {/* Segunda repetición (para loop infinito) */}
          {brands.map((brand, index) => (
            <img
              key={`brand-2-${index}`}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.height} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity flex-shrink-0`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
