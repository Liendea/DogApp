import headerImage from "../assets/Header10.png";

export default function Header() {
  return (
    <header className="bg-white flex items-center justify-between h-160 overflow-hidden">
      <img src={headerImage} alt="Header" className="w-full h-full object-cover"/>
      <div className="z-10 absolute ml-35 w-180 flex flex-col gap-6">
      <h1 className="font-bold text-5xl">UPPTÄCK HUNDAR OCH DERAS PERSONLIGHETER</h1>
      <h4 className="text-md">Sök bland olika hundraser och utforska deras egenskaper, temperament och behov. Jämför profiler, se bilder och hitta den hund som passar din livsstil bäst — oavsett om du letar efter en aktiv träningspartner eller en lugn familjehund.</h4>
      </div>
    </header>
  );
}