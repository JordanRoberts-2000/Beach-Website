import HomeImage from "./HomeImage"
import MainResize from "./MainResize"


const Main = () => {
  return (
    <MainResize>
        <div className="relative h-[35vh] lg:h-full w-full flex mb-2">
            <HomeImage/>
            <h1 className="top-[40%] backdrop-blur-sm text-xl font-playfairDisplay italic font-[800] absolute lg:top-20 left-[50%] translate-x-[-50%] lg:text-7xl whitespace-nowrap lg:text-center">
                {/* <span className="lg:hidden">--</span> */}
                The Best Beach in the<br className="hidden lg:block"/> Sutton West
            </h1>
            <h2 className="absolute translate-x-[-50%] left-[50%] top-[25%] font-playfairDisplay lg:backdrop-blur-sm px-4 py-2 font-bold lg:border-black lg:border-4 whitespace-nowrap italic text-3xl">Pocahontas Beach</h2>
            <div className="fadeWhite translate-y-[2px] lg:hidden w-full h-6 z-10 mt-auto"></div>
            <div className="flex mt-auto gap-12 z-30 mb-16 absolute bottom-0 left-[50%] translate-x-[-50%] w-[90%]">
                <button className="border-2 font-sm py-1 border-black backdrop-blur-sm flex-1 rounded-sm px-4 font-bold whitespace-nowrap">Book now</button>
                <button className="bg-black py-1 text-white rounded-sm flex-1 px-4 font-bold whitespace-nowrap">See Activities</button>
            </div>
        </div>
        <span className="text-2xl font-playfairDisplay font-[800] ml-4">About</span>
        <p className="ml-4 mr-4 mb-8 font-bold lg:hidden">
            We are dedicated to providing you with
            the best experience possible when planning
            your next trip to the beach. We offers a wide
            range of activities that will make your beach
            adventure unforgettable.
        </p>
        {/* Social Links */}
        <div className="flex flex-col lg:absolute lg:bottom-0 lg:right-0 lg:mr-12 lg:mb-16">
            <button className="w-fit shadow-lg border-2 border-black lg:bg-black lg:text-white rounded-sm font-bold px-4 mb-4 py-1 ml-auto mr-2 lg:rounded-none lg:text-3xl lg:font-playfairDisplay lg:font-[600]">See Our Reviews</button>
            <div className="flex pr-4 ml-4 items-center lg:flex-col-reverse lg:items-start lg:ml-0">
                <ul className="flex gap-8 lg:gap-12 items-center">
                    <li>
                        <svg className="h-4 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                    </li>
                    <li>
                        <svg className="h-4 lg:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                    </li>
                    <li>
                        <svg className="h-5 lg:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </li>
                </ul>
                <div className="h-[2px] flex-1 bg-black mx-4"></div>
                <span className="text-xl font-[600] font-playfairDisplay lg:mb-4 lg:text-3xl lg:bg-black lg:text-white lg:px-4 lg:py-1">Follow Us</span>
            </div>
        </div>
    </MainResize>
  )
}

export default Main