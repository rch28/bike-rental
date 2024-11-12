import { BikeComponent } from "../global/Bike";

export const FeaturedBikes = () => {
  const BikeData = [
    {
      id: new Date().getTime(),
      name: "BMW G 310 R",
      rating: 4.5,
      image:
        "https://c4.wallpaperflare.com/wallpaper/777/979/707/5c1ce0f3d5e7e-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "313 cc Engine",
        distance: "200 km/day",
      },
      price: "1200",
    },
    {
      id: new Date().getTime(),
      name: "Royal Enfield Himalayan",
      rating: 4.2,
      image:
        "https://c4.wallpaperflare.com/wallpaper/78/34/548/enfield-himalayan-royal-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "411 cc Engine",
        distance: "250 km/day",
      },
      price: "1500",
    },
    {
      id: new Date().getTime(),
      name: "Yamaha MT-09",
      rating: 4.3,
      image:
        "https://c4.wallpaperflare.com/wallpaper/961/40/938/yamaha-yamaha-mt-09-motorcycle-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "155 cc Engine",
        distance: "180 km/day",
      },
      price: "900",
    },
    {
      id: new Date().getTime(),
      name: "Honda CB500X",
      rating: 4.6,
      image:
        "https://c4.wallpaperflare.com/wallpaper/600/317/133/2015-cb500x-honda-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "471 cc Engine",
        distance: "220 km/day",
      },
      price: "1800",
    },
    {
      id: new Date().getTime(),
      name: "KTM Duke 390",
      rating: 5.0,
      image:
        "https://c4.wallpaperflare.com/wallpaper/544/655/653/2017-ktm-390-duke-4k-8k-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "249 cc Engine",
        distance: "200 km/day",
      },
      price: "1100",
    },
    {
      id: new Date().getTime(),
      name: "Kawasaki Ninja 300",
      rating: 4.7,
      image:
        "https://c4.wallpaperflare.com/wallpaper/712/250/346/2015-300-kawasaki-ninja-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "296 cc Engine",
        distance: "180 km/day",
      },

      price: "1600",
    },
  ];

  return (
    <div className="my-12">
      <header className="w-full text-center text-4xl md:text-5xl font-bold text-neutral-800">
        <span>Featured</span>
        <span className="text-primary ">Bikes</span>
      </header>

      {/* Mapping Features Bikes */}
      <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 py-12 gap-4">
        {BikeData.map((bike, index) => (
          <BikeComponent key={index} bike={bike} />
        ))}
      </div>
    </div>
  );
};
