export default function BrandCarousel() {
  const brands = [
    { src: "https://www.figma.com/api/mcp/asset/d6f9be94-9e2a-4265-91fd-70b191cdff89", alt: "Michelin", height: "h-6 md:h-7" },
    { src: "https://www.figma.com/api/mcp/asset/139230bf-6fa9-4ae3-bf10-848e047e7b0f", alt: "Kenda", height: "h-4 md:h-5" },
    { src: "https://www.figma.com/api/mcp/asset/1eec366a-1f70-420a-9d34-b7e8a1caa4b2", alt: "Vipol", height: "h-5 md:h-5" },
    { src: "https://www.figma.com/api/mcp/asset/2d6806e3-acb4-43a3-ae1b-71dc6d708898", alt: "Kohl", height: "h-4 md:h-4" },
    { src: "https://www.figma.com/api/mcp/asset/175734a6-e91f-4f7e-b7be-0f19b3b5b44f", alt: "Shad", height: "h-5 md:h-5" },
    { src: "https://www.figma.com/api/mcp/asset/f03ab027-0e49-4ae1-ba3e-93f76e7eac71", alt: "Ferodo", height: "h-6 md:h-6" },
    { src: "https://www.figma.com/api/mcp/asset/ace7c9c9-eb58-463a-907a-88f7d4c60a39", alt: "Jupeso", height: "h-5 md:h-5" },
    { src: "https://www.figma.com/api/mcp/asset/e36384f7-e49d-46e5-bd69-fe095fe1ec08", alt: "K7", height: "h-7 md:h-7" },
    { src: "https://www.figma.com/api/mcp/asset/d0073b74-0cdc-48e1-9098-78b6cf1c8c1e", alt: "KYB", height: "h-8 md:h-8" },
    { src: "https://www.figma.com/api/mcp/asset/51ee57da-eb06-433f-a652-2e3d9dde8d80", alt: "Motul", height: "h-6 md:h-6" },
  ];

  return (
    <section className="bg-myesa-bg py-8 lg:py-12 overflow-hidden">
      <div className="flex items-center gap-8 md:gap-11">
        <div className="flex gap-8 md:gap-11 animate-scroll whitespace-nowrap">
          {/* Primera repetición de logos */}
          {brands.map((brand, index) => (
            <img
              key={`brand-1-${index}`}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.height} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
            />
          ))}

          {/* Segunda repetición (para loop infinito) */}
          {brands.map((brand, index) => (
            <img
              key={`brand-2-${index}`}
              src={brand.src}
              alt={brand.alt}
              className={`${brand.height} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
