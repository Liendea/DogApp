import headerImage from "../assets/Header12.png";

export default function Header() {
  return (
    <header className=" relative bg-white flex items-center justify-center h-80 sm:h-160 overflow-hidden">
      <h1 className="absolute text-4xl font-bold top-1 mt-5 border-b-5 z-10">DOGAPP</h1>
      <img src={headerImage} alt="Header" className="w-full h-full object-cover hidden lg:block"/>
      <div className=" absolute top left-50 w-405 h-205 rounded-full bg-primary lg:hidden " />
      
      <div className=" sm:block hidden w-150  absolute  lg:mr-130 lg:w-110  xl:mr-170 xl:w-150 flex-col gap-5 ">
      <h2 className="font-bold text-5xl mb-3">DISCOVER DOGS AND THEIR PERSONALITIES</h2>
      <h4 className="text-md">Browse different dog breeds and explore their characteristics, temperament, and needs. Compare profiles, view photos, and find the dog that best suits your lifestyle — whether you're looking for an active training companion or a calm family dog.</h4>
      </div>
    </header>
  );
}