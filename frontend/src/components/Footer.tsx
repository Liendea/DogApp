
export default function Footer() {

  return (
  <footer className="w-full  border-t border-secondary h-50 bg-white">
    <div className="flex flex-row items-center justify-center mt-5">
    <p className="text-sm">Github :</p>
    <a
    href="https://github.com/Liendea/DogApp"
    target="_blank"
    rel="noopener noreferrer"
    >
      DogApp
    </a>
    </div>
      <p className="text-sm text-center">Application made by Erik, Linda, Lisa, José och Hannah.</p>
      <p className="text-sm text-center">Dog images from : Dog.ceo</p>
      <p className="text-sm text-center">Application deployed in RailWay</p>
    <p className="text-sm font-bold text-center">@ DogApp 2026</p>
  </footer>
  )
}