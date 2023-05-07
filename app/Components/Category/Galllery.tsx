import Image from "next/image"

type GalleryImageUrls = {
    url: string,
    placeholder: string
}

const Galllery = ({active, galleryImageUrls}: {active: boolean, galleryImageUrls:GalleryImageUrls[]}) => {
  return (
    <>
        <div className={`${active ? "opacity-100" : "opacity-0"} w-full duration-300 font-bold z-[10] text-xl flex items-center translate-y-[-50%]`}>
            <div className='flex-1 bg-black h-[2px]'></div>
            <span className=' border-4 px-2 mx-4 border-black'>Gallery</span>
            <div className='flex-1 bg-black h-[2px]'></div>
        </div>
        <div className='flex gap-4 relative overflow-x-scroll px-4 pb-4'>
            {galleryImageUrls.map(({url, placeholder}, index) => (
                <div key={index} className='flex-shrink-0 w-[70%] aspect-video relative'>
                    <Image alt={placeholder} src={url} fill className="object-cover" sizes="70vw"/>
                </div>
            ))}
        </div>
    </>
  )
}

export default Galllery