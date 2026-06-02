
export default function Footer() {

  return (
  <footer className="w-full border-t border-secondary h-40 sm:h-50 bg-white">
    <div className="flex flex-row justify-around mt-2 sm:mt-5">
    <div className="flex flex-col">
      <h3 className="font-bold">Links : </h3>
        <a
        href="https://github.com/Liendea/DogApp"
        target="_blank"
        rel="noopener noreferrer"
        >
          Github
        </a>
        <a
        href="https://dog.ceo/dog-api/"
        target="_blank"
        rel="noopener noreferrer"
        >
          Image Source
        </a>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="font-bold">About us : </h3>
      <a
      href="https://github.com/Grayfox665"
      target="_blank"
      rel="noopener noreferrer"
      >
        Erik
      </a>
      <a
      href="https://github.com/Liendea"
      target="_blank"
      rel="noopener noreferrer"
      >
        Linda
      </a>
      <a
      href="https://github.com/JoseRaul-TR"
      target="_blank"
      rel="noopener noreferrer"
      >
        José
      </a>
      <a
      href="https://github.com/hannasahlberg"
      target="_blank"
      rel="noopener noreferrer"
      >
        Hannah
      </a>
      <a
      href="https://github.com/lisa-desousa"
      target="_blank"
      rel="noopner noreferrer"
      >
        Lisa
      </a>
    </div>
    </div>
    <p className="text-sm font-light text-center">@ DogApp 2026</p>
  </footer>
  )
}