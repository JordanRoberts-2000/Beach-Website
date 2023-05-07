import pageData from '@/Data.json'
import Image from "next/image"
import Category from "./Components/Category/Category"
import InfoSection from "./Components/Category/InfoSection"
import Main from './Components/Main/Main'

export default function Home() {
  return (
    <>
        <div>
            <p className="mx-4 mb-8 font-medium lg:block hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At mollitia nisi numquam! Optio nulla eligendi autem! Doloremque, quod, alias laborum quam repellat sint iusto tempore illo quisquam libero possimus quae.</p>
        </div>
        <section className="py-4">
            <ul className="flex flex-col gap-4 lg:gap-0 ">
                {pageData.map(({imageUrl, title, subtitle, priceOptions, reviews, galleryImageUrls}, index) => (
                    <Category key={title} imageUrl={imageUrl} title={title} subtitle={subtitle} priceOptions={priceOptions} galleryImageUrls={galleryImageUrls} index={index}>
                        <InfoSection priceOptions={priceOptions} reviews={reviews}/>
                    </Category>
                ))}
            </ul>
        </section>
    </>
  )
}
