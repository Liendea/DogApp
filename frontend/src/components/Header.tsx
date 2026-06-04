import headerImage from "../assets/Header12.png";

export default function Header() {
  return (
    <header className="relative bg-white flex items-center justify-center md:justify-start text-center md:text-left h-90 md:h-120 lg:h-160 overflow-hidden">
      <h1 className="absolute text-3xl md:text-4xl font-bold top-1 mt-5 border-b-5 z-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        DOGGO APP
      </h1>

      <img
        src={headerImage}
        alt="Header"
        className="w-full h-full object-cover hidden sm:block"
      />

      <div className="absolute top left-50 w-405 h-205 rounded-full bg-primary sm:hidden" />

      {/* 1. ÄNDRING: Höjt max-w-md till md:max-w-2xl och lg:max-w-3xl på själva containern */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl absolute left-4 lg:left-auto pt-20 lg:mr-110 lg:w-140 xl:mr-170 flex flex-col items-start justify-start text-left px-2">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl md:pl-4 mb-3 text-left mr-4">
          DISCOVER DOGS AND THEIR PERSONALITIES
        </h2>

        {/* KORT TEXT - Denna är bara för mobil, max-w-xs */}
        <h4 className="text-sm w-full max-w-xs text-left md:hidden mr-4">
          Browse different dog breeds and find the perfect companion for your
          lifestyle.
        </h4>

        {/* ORIGINALTEXT - 2. ÄNDRING: Ändrat från max-w-xs till md:max-w-xl och lg:max-w-none */}
        <h4 className="text-sm md:text-md w-full max-w-xs md:max-w-xl lg:max-w-none md:pl-4 lg:w-full mr-4 text-left hidden md:block">
          Browse different dog breeds and explore their characteristics,
          temperament, and needs. Compare profiles, view photos, and find the
          dog that best suits your lifestyle — whether you're looking for an
          active training companion or a calm family dog.
        </h4>
      </div>
    </header>
  );
}
