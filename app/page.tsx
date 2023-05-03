import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full h-[100lvh] relative">
      <div className="relative h-[35%] lg:h-full w-full flex">
        <Image alt="Beach of Pocahontas" fill src="http://res.cloudinary.com/dewhcvhvq/image/upload/v1683129665/urkmys4futdbzl0ufu8e.webp"/>
          <h1 className="ml-2 bottom-0 mb-3 text-xl font-playfairDisplay italic font-[800] absolute lg:top-28 lg:left-[50%] lg:translate-x-[-50%] lg:text-5xl lg:text-center">
          <span className="lg:hidden">--</span>
          The Best Beach in the Sutton West
        </h1>
        <h2 className="absolute translate-x-[-50%] left-[50%] top-[35%] px-4 py-2 font-bold border-black lg:border-4 border-2 whitespace-nowrap lg:text-3xl">Pocahontas Beach</h2>
        <div className="fadeWhite translate-y-[2px] lg:hidden w-full h-6 z-10 mt-auto"></div>
      </div>
    </main>
  )
}
