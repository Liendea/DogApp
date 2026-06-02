// src/features/dogDetails/Modal.tsx

import CloseBtn from "./CloseBtn";
import type { Breed } from "../../types/Breed";

type ModalProps = {
  dog: Breed;
  onClose: () => void;
};
export default function Modal({ dog, onClose }: ModalProps) {
  const fallback = `https://placehold.net/default.png`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
      <section className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-80 shrink-0">
            <img
              src={dog.imageUrl ?? fallback}
              alt={dog.breed}
              className="h-72 w-full object-cover md:h-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-8">
            <h2 className="font-sans text-4xl font-bold uppercase text-black">
              {dog.breed}
            </h2>

            <p className="mt-2 text-gray-500 leading-relaxed">
              {dog.description}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {/* Lifespan */}
              <div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5833 7.83333V16.5833L22.4167 19.5M31.1667 16.5833C31.1667 24.6375 24.6375 31.1667 16.5833 31.1667C8.52918 31.1667 2 24.6375 2 16.5833C2 8.52918 8.52918 2 16.5833 2C24.6375 2 31.1667 8.52918 31.1667 16.5833Z"
                      stroke="#09BC8A"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h3 className="font-semibold text-black">Lifespan</h3>
                </div>

                <p className="mt-2 text-gray-500">{dog.lifeSpan}</p>
              </div>

              {/* Origin */}
              <div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.9167 16.3333C30.9167 24.3875 24.3875 30.9167 16.3333 30.9167M30.9167 16.3333C30.9167 8.27918 24.3875 1.75 16.3333 1.75M30.9167 16.3333H1.75M16.3333 30.9167C8.27918 30.9167 1.75 24.3875 1.75 16.3333M16.3333 30.9167C19.981 26.9232 22.054 21.7408 22.1667 16.3333C22.054 10.9259 19.981 5.74343 16.3333 1.75M16.3333 30.9167C12.6856 26.9232 10.6127 21.7408 10.5 16.3333C10.6127 10.9259 12.6856 5.74343 16.3333 1.75M1.75 16.3333C1.75 8.27918 8.27918 1.75 16.3333 1.75"
                      stroke="#09BC8A"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h3 className="font-semibold text-black">Breed Origin</h3>
                </div>

                <p className="mt-2 text-gray-500">{dog.breedOrigin}</p>
              </div>
            </div>

            {/* Temperament */}
            <div className="mt-8">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 35 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 17.5V15.2031C0 14.158 0.534722 13.3073 1.60417 12.651C2.67361 11.9948 4.08333 11.6667 5.83333 11.6667C6.14931 11.6667 6.45313 11.6727 6.74479 11.6849C7.03646 11.697 7.31597 11.7274 7.58333 11.776C7.24306 12.2865 6.98785 12.8212 6.81771 13.3802C6.64757 13.9392 6.5625 14.5226 6.5625 15.1302V17.5H0ZM8.75 17.5V15.1302C8.75 14.3524 8.96267 13.6415 9.38802 12.9974C9.81337 12.3533 10.4149 11.7882 11.1927 11.3021C11.9705 10.816 12.9002 10.4514 13.9818 10.2083C15.0634 9.96528 16.2361 9.84375 17.5 9.84375C18.7882 9.84375 19.9731 9.96528 21.0547 10.2083C22.1363 10.4514 23.066 10.816 23.8438 11.3021C24.6215 11.7882 25.217 12.3533 25.6302 12.9974C26.0434 13.6415 26.25 14.3524 26.25 15.1302V17.5H8.75ZM28.4375 17.5V15.1302C28.4375 14.4983 28.3585 13.9028 28.2005 13.3438C28.0425 12.7847 27.8056 12.2622 27.4896 11.776C27.7569 11.7274 28.0304 11.697 28.3099 11.6849C28.5894 11.6727 28.875 11.6667 29.1667 11.6667C30.9167 11.6667 32.3264 11.9887 33.3958 12.6328C34.4653 13.2769 35 14.1337 35 15.2031V17.5H28.4375ZM11.849 14.5833H23.1875C22.9444 14.0972 22.27 13.6719 21.1641 13.3073C20.0582 12.9427 18.8368 12.7604 17.5 12.7604C16.1632 12.7604 14.9418 12.9427 13.8359 13.3073C12.73 13.6719 12.0677 14.0972 11.849 14.5833ZM5.83333 10.2083C5.03125 10.2083 4.34462 9.92274 3.77344 9.35156C3.20226 8.78038 2.91667 8.09375 2.91667 7.29167C2.91667 6.46528 3.20226 5.77257 3.77344 5.21354C4.34462 4.65451 5.03125 4.375 5.83333 4.375C6.65972 4.375 7.35243 4.65451 7.91146 5.21354C8.47049 5.77257 8.75 6.46528 8.75 7.29167C8.75 8.09375 8.47049 8.78038 7.91146 9.35156C7.35243 9.92274 6.65972 10.2083 5.83333 10.2083ZM29.1667 10.2083C28.3646 10.2083 27.678 9.92274 27.1068 9.35156C26.5356 8.78038 26.25 8.09375 26.25 7.29167C26.25 6.46528 26.5356 5.77257 27.1068 5.21354C27.678 4.65451 28.3646 4.375 29.1667 4.375C29.9931 4.375 30.6858 4.65451 31.2448 5.21354C31.8038 5.77257 32.0833 6.46528 32.0833 7.29167C32.0833 8.09375 31.8038 8.78038 31.2448 9.35156C30.6858 9.92274 29.9931 10.2083 29.1667 10.2083ZM17.5 8.75C16.2847 8.75 15.2517 8.32465 14.401 7.47396C13.5503 6.62326 13.125 5.59028 13.125 4.375C13.125 3.13542 13.5503 2.09635 14.401 1.25781C15.2517 0.419271 16.2847 0 17.5 0C18.7396 0 19.7786 0.419271 20.6172 1.25781C21.4557 2.09635 21.875 3.13542 21.875 4.375C21.875 5.59028 21.4557 6.62326 20.6172 7.47396C19.7786 8.32465 18.7396 8.75 17.5 8.75ZM17.5 5.83333C17.9132 5.83333 18.2595 5.69358 18.5391 5.41406C18.8186 5.13455 18.9583 4.78819 18.9583 4.375C18.9583 3.96181 18.8186 3.61545 18.5391 3.33594C18.2595 3.05642 17.9132 2.91667 17.5 2.91667C17.0868 2.91667 16.7405 3.05642 16.4609 3.33594C16.1814 3.61545 16.0417 3.96181 16.0417 4.375C16.0417 4.78819 16.1814 5.13455 16.4609 5.41406C16.7405 5.69358 17.0868 5.83333 17.5 5.83333Z"
                    fill="#09BC8A"
                  />
                </svg>

                <h3 className="font-semibold text-black">Temperament</h3>
              </div>

              <p className="mt-2 text-gray-500 leading-relaxed">
                {dog.temperament}
              </p>
            </div>

            {/* Button */}
            <div className="mt-auto pt-8 flex justify-end-safe items-center">
              <CloseBtn onClick={onClose} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
