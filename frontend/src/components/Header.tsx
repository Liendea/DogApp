import headerImage from "../assets/Header12.png";

export default function Header() {
  return (
    <header className=" relative bg-white flex items-center justify-center text-center md:text-left h-120 md:h-160 overflow-hidden">
      <h1 className="absolute text-3xl md:text-4xl font-bold top-1 mt-5 border-b-5 z-10">DOGAPP</h1>
      <img src={headerImage} alt="Header" className="w-full h-full object-cover hidden lg:block"/>
      <div className=" absolute top left-50 w-405 h-205 rounded-full bg-primary lg:hidden " />
      
      <div className=" w-100  absolute  lg:mr-110 lg:w-140  xl:mr-170 flex-col gap-5 ">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-3">DISCOVER DOGS AND THEIR PERSONALITIES</h2>
      <h4 className="text-sm md:text-md w-90 pl-10 md:pl-0 lg:w-full">Browse different dog breeds and explore their characteristics, temperament, and needs. Compare profiles, view photos, and find the dog that best suits your lifestyle — whether you're looking for an active training companion or a calm family dog.</h4>
      </div>
    </header>
  );
}