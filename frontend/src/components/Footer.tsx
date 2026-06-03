import XIcon from "../reusable_components/XIcon"
import InstagramIcon from "../reusable_components/InstagramIcon"
import YoutubeIcon from "../reusable_components/YoutubeIcon"
import LinkedinIcon from "../reusable_components/LinkedinIcon"

export default function Footer() {

  return (
  <footer className="w-full border-t border-secondary h-40 p-8 sm:h-68.5 bg-white">
    <div className="flex flex-col gap-8 md:flex-row md:gap-40">
      <div className="flex flex-row gap-4">
        <XIcon width={24} height={24} className="text-font-color-primary" />
        <InstagramIcon width={24} height={24} className="text-font-color-primary"  />
        <YoutubeIcon width={24} height={24} className="text-font-color-primary"  />
        <LinkedinIcon  width={24} height={24} className="text-font-color-primary" />
  </div>
    <div className="grid grid-cols-3 gap-8">
    <div className="flex flex-col gap-3 md:w-65.5 md:h-60.5">
      <h3 className="font-bold mb-5">Use Cases</h3>
      <p className="">Link</p>
      <p className="">Link</p>
      <p className="">Link</p>
      <p className="">Link</p>
    </div>
    <div className="flex flex-col gap-3 md:w-65.5 md:h-60.5">
      <h3 className="font-bold mb-5">Explore</h3>
      <p className="">Link</p>
      <p className="">Link</p>
      <p className="">Link</p>
      <p className="">Link</p>
    </div>
    <div className="flex flex-col gap-3 md:w-65.5 md:h-60.5">
      <h3 className="font-bold mb-5">Resources</h3>
      <p className="">Link</p>
      <p className="">Link</p>
      <p className="">Link</p>
      <p className="">Link</p>
    </div>
    </div>
    </div>
    <p className="text-sm text-center md:text-right text-gray-500 mt-6 pb-4">@DogApp 2026</p>
  </footer>
  )
}