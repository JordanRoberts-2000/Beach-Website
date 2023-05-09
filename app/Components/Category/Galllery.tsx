import Image from "next/image"

type GalleryImageUrls = {
    url: string,
    placeholder: string,
    blurImageUrl: string
}

const Galllery = ({active, galleryImageUrls}: {active: boolean, galleryImageUrls:GalleryImageUrls[]}) => {
  return (
    <>
        <div className={`${active ? "opacity-100" : "opacity-0"} w-full duration-300 font-bold z-[10] text-xl flex items-center translate-y-[-50%]`}>
            <div className='flex-1 bg-black h-[2px]'></div>
            <span className="mx-4 font-semibold font-playfairDisplay backdrop-blur-sm italic text-2xl">Gallery</span>
            <div className='flex-1 bg-black h-[2px]'></div>
        </div>
        <div className='flex gap-4 relative overflow-x-scroll px-4 pb-4'>
            {galleryImageUrls.map(({url, placeholder, blurImageUrl}, index) => (
                <div key={index} className='flex-shrink-0 w-[70%] aspect-video relative'>
                    <Image alt={placeholder} loading={index <= 1 ? "eager" : "lazy"} src={url} fill className="object-cover" sizes="70vw" placeholder="blur" blurDataURL={`${blurImageUrl}`}/>
                </div>
            ))}
        </div>
    </>
  )
}

export default Galllery