import pageData from '@/Data.json'
import Image from "next/image"
import Category from "./Components/Category/Category"
import InfoSection from "./Components/Category/InfoSection"
import Main from './Components/Main/Main'

export default function Home() {
  return (
    <div className='flex'>
        <section className="pb-4 bg-white lg:flex-[9]">
            <ul className="flex flex-col gap-4 lg:gap-0 ">
                {pageData.map(({imageUrl, title, subtitle, priceOptions, reviews, galleryImageUrls, blurImageUrl}, index) => (
                    <Category key={title} imageUrl={imageUrl} title={title} subtitle={subtitle} priceOptions={priceOptions} 
                                galleryImageUrls={galleryImageUrls} index={index} blurImageUrl={blurImageUrl}>
                        <InfoSection priceOptions={priceOptions} reviews={reviews}/>
                    </Category>
                ))}
            </ul>
        </section>
        <div className='lg:flex-1 hidden bg-blue-100 '>

        </div>
    </div>
  )
}
