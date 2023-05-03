import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full h-[100lvh]">
      <div className="relative h-[35%] lg:h-full w-full">
        <Image alt="Beach of Pocahontas" fill src="http://res.cloudinary.com/dewhcvhvq/image/upload/v1683129665/urkmys4futdbzl0ufu8e.webp"/>
      </div>
    </main>
  )
}
