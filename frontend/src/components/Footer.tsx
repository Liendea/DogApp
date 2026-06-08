import XIcon from "@/reusable_components/XIcon";
import InstagramIcon from "@/reusable_components/InstagramIcon";
import YoutubeIcon from "@/reusable_components/YoutubeIcon";
import LinkedinIcon from "@/reusable_components/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-secondary h-auto p-8 bg-white flex flex-col gap-10">
      {/* RAD 1: Logga till vänster och Ikoner till höger (på samma rad) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-6">
        {/* Loggan */}
        <div className="text-xl font-bold underline cursor-pointer tracking-wide text-font-color-primary mb-4 ">
          DOGGO APP
        </div>

        {/* Ikonerna – hamnar till höger på större skärmar (sm och uppåt) */}
        <div className="flex flex-row gap-4 justify-start items-center sm:justify-end">
          <XIcon
            width={20}
            height={20}
            className="text-font-color-primary cursor-pointer hover:opacity-80"
          />
          <LinkedinIcon
            width={20}
            height={20}
            className="text-font-color-primary cursor-pointer hover:opacity-80"
          />
          <InstagramIcon
            width={20}
            height={20}
            className="text-font-color-primary cursor-pointer hover:opacity-80"
          />

          <YoutubeIcon
            width={24}
            height={24}
            className="text-font-color-primary cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      {/* RAD 2: Länkarna – helt på en egen rad under loggan, vänsterställda */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 w-full md:max-w-xl text-left">
        {/* Column 1: Dog Breeds */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold mb-2">Breeds</h3>
          <p className="cursor-pointer hover:underline text-sm">All Breeds</p>
          <p className="cursor-pointer hover:underline text-sm">
            Calm Family Dogs
          </p>
          <p className="cursor-pointer hover:underline text-sm">
            Active Companions
          </p>
          <p className="cursor-pointer hover:underline text-sm">
            Hypoallergenic
          </p>
        </div>

        {/* Column 2: Explore */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold mb-2">Explore</h3>
          <p className="cursor-pointer hover:underline text-sm">About DogApp</p>
          <p className="cursor-pointer hover:underline text-sm">Features</p>
          <p className="cursor-pointer hover:underline text-sm">
            Articles & Tips
          </p>
          <p className="cursor-pointer hover:underline text-sm">
            Find Breeders
          </p>
        </div>

        {/* Column 3: Support */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold mb-2">Support</h3>
          <p className="cursor-pointer hover:underline text-sm">Help Center</p>
          <p className="cursor-pointer hover:underline text-sm">Contact Us</p>
          <p className="cursor-pointer hover:underline text-sm">
            Terms of Service
          </p>
          <p className="cursor-pointer hover:underline text-sm">
            Privacy Policy
          </p>
        </div>
      </div>

      {/* Copyright-texten i botten */}
      <p className="text-sm text-center md:text-left text-gray-500 mt-4 pb-2">
        @ DogApp 2026
      </p>
    </footer>
  );
}
