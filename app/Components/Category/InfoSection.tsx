import Fade from "@/utils/components/Animation/Fade"

type PriceOptions = {
    title: string,
    price: number,
    included: string[]
}

type Reviews = {
    stars: number,
    reviewContent: string,
    reviewer: string,
    date: string
}

type Props = {
    priceOptions: PriceOptions[],
    reviews: Reviews[]
}

const InfoSection = ({priceOptions, reviews}: Props) => {
    return (
        <>
             {/* Pricelist */}
             <div className="row-span-2 bg-[#F4FFFE] lg:bg-white flex flex-col">
                <Fade>
                    <div className="flex">
                        <div className="h-[1px] bg-black flex-1"></div>
                        <h3 className="mx-4 font-semibold font-playfairDisplay translate-y-[-50%] italic text-2xl">Price List</h3>
                        <div className="h-[1px] bg-black flex-1"></div>
                    </div>
                    {priceOptions.map(({title, included, price}) => (
                        <div key={title} className="flex flex-col gap-2 pl-2 mb-4">
                            <h5 className="text-3xl bg-black text-white px-4 w-fit">{title}</h5>
                            {included.map((data, index) => (
                                <span key={index} className="text-xl font-playfairDisplay font-[600]">{`- ${data}`}</span>
                            ))}
                            <div className="flex">
                                <h6 className="text-2xl bg-black text-white px-2 w-fit pr-8">{price !== 0 ? `£${price}` : "Free"}</h6>
                                {price !== 0 && <button className="ml-auto mr-2 font-extrabold px-3 border-2 border-black rounded-md">Book now</button>}
                            </div>
                            <div className="flex flex-col gap-2 mx-1">
                                <div className="h-[1px] bg-black mr-2"></div>
                                <div className="h-[1px] bg-black mr-8"></div>
                            </div>
                        </div>
                    ))}
                </Fade>
            </div>
            {/* Reviews */}
            <div className="flex flex-col pb-24 px-2">
                <Fade>
                    <h3 className="font-semibold font-playfairDisplay mx-auto mt-2 italic text-2xl mb-8">Reviews</h3>
                    {reviews.map(({stars, reviewContent, reviewer, date}, index) => (
                        <div className="flex flex-col" key={index}>
                            <div className="flex gap-2 mb-1">
                                {[...Array(stars)].map((x, i) =>
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                                )}
                            </div>
                            <p className="mr-2 font-bold"><q>{reviewContent}</q></p>
                            <span className="text-bold text-gray-700 text-sm mb-6"><span className="text-lg font-extrabold">- </span>{`${reviewer}: ${date}`}</span>
                        </div>
                    ))}
                    <button className="mb-4 w-fit mx-auto bg-black text-white font-bold text-xl py-1 px-4 rounded-md font-playfairDisplay">Read More Reviews</button>
                </Fade>
            </div>
        </>
    )
}

export default InfoSection