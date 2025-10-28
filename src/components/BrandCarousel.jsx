import michelinLogo from '../assets/hero_section/logosMYESA/Michelin.webp';
import kendaLogo from '../assets/hero_section/logosMYESA/Kenda.webp';
import vipalLogo from '../assets/hero_section/logosMYESA/Vipal.webp';
import kohlLogo from '../assets/hero_section/logosMYESA/Kohl.webp';
import shadLogo from '../assets/hero_section/logosMYESA/SHAD.webp';
import r7Logo from '../assets/hero_section/logosMYESA/R7.webp';
import kumotoLogo from '../assets/hero_section/logosMYESA/Kumoto.webp';
import motulLogo from '../assets/hero_section/logosMYESA/Motul.webp';
import ngkLogo from '../assets/hero_section/logosMYESA/NGK.webp';
import riffelLogo from '../assets/hero_section/logosMYESA/Riffel.webp';
import iponeLogo from '../assets/hero_section/logosMYESA/Ipone.webp';
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
    { src: michelinLogo, alt: "Michelin", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: kendaLogo, alt: "Kenda", height: "h-[42px] md:h-16 lg:h-[70.56px]" },
    { src: vipalLogo, alt: "Vipal", height: "h-[48px] md:h-18 lg:h-[80px]" },
    { src: kohlLogo, alt: "Kohl", height: "h-[36px] md:h-14 lg:h-[60px]" },
    { src: shadLogo, alt: "SHAD", height: "h-[50px] md:h-20 lg:h-[84px]" },
    { src: r7Logo, alt: "R7", height: "h-[59px] md:h-24 lg:h-[97.32px]" },
    { src: kumotoLogo, alt: "Kumoto", height: "h-[48px] md:h-20 lg:h-[79.32px]" },
    { src: motulLogo, alt: "Motul", height: "h-[66px] md:h-24 lg:h-[110.688px]" },
    { src: ngkLogo, alt: "NGK", height: "h-[77px] md:h-28 lg:h-[127.6px]" },
    { src: riffelLogo, alt: "Riffel", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: iponeLogo, alt: "Ipone", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: ls2Logo, alt: "LS2", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: agvLogo, alt: "AGV", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: alpinestarsLogo, alt: "Alpinestars", height: "h-[48px] md:h-20 lg:h-[80px]" },
    { src: osakaLogo, alt: "Osaka", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: stallionLogo, alt: "Stallion", height: "h-[48px] md:h-20 lg:h-[80px]" },
    { src: energyboltLogo, alt: "Energybolt", height: "h-[48px] md:h-20 lg:h-[80px]" },
    { src: dynavoltLogo, alt: "Dynavolt", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: grimaldiLogo, alt: "Grimaldi", height: "h-[48px] md:h-20 lg:h-[80px]" },
    { src: promotoLogo, alt: "Promoto", height: "h-[65px] md:h-24 lg:h-[108px]" },
    { src: promotoPlatino, alt: "Promoto Platino", height: "h-[65px] md:h-24 lg:h-[108px]" },
  ];

  return (
    <section className="bg-myesa-bg py-5 md:py-10 lg:py-14 overflow-hidden">
      <div className="relative w-full">
        <div className="flex items-center gap-11 animate-scroll-left">
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
