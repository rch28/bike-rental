import { Bike } from "../global/Bike"



export const FeaturedBikes = () => {
  return (
    <div className="my-12">
        <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <span>Featured</span>
            <span className="text-primary ">Bikes</span>
        </header>

        {/* Mapping Features Bikes */}
        <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 py-12 gap-4">
            <Bike/>
            <Bike/>
            <Bike/>
            <Bike/>
            <Bike/>
            <Bike/>
            <Bike/>
            <Bike/>
            <Bike/>
        </div>
    </div>
  )
}
