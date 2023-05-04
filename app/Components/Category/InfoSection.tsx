
type PriceOptions = {
    title: string,
    price: number,
    included: string[]
}

type Props = {
    priceOptions: PriceOptions[]
}

const InfoSection = ({priceOptions}: Props) => {
    return (
        <>
        <div className="bg-red-500 text-3xl row-span-2">
            <div>
                <h5>{priceOptions[0].title}</h5>
                <span>{priceOptions[0].included[0]}</span>
                <span>{priceOptions[0].included[1]}</span>
                <h6>{priceOptions[0].price}</h6>
            </div>
        </div>
        {/* Reviews */}
        <div className="bg-blue-500 text-3xl">
            Reviews
        </div>
        </>
    )
}

export default InfoSection