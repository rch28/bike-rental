import BikeList from "@/Bikes/components/BikeList";
import Layout from "@/components/global/Layout";
import React from "react";

const BikeOnRentPage = () => {
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

    {
      id: new Date().getTime(),
      name: "Suzuki Gixxer SF",
      rating: 4.4,
      image:
        "https://images.pexels.com/photos/27543554/pexels-photo-27543554/free-photo-of-a-red-and-white-motorcycle-parked-under-a-car.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: {
        start: "SELF START ONLY",
        engine: "249 cc Engine",
        distance: "190 km/day",
      },
      price: "1000",
    },
    {
      id: new Date().getTime(),
      name: "Ducati Scrambler Icon",
      rating: 4.8,
      image:
        "https://c4.wallpaperflare.com/wallpaper/573/417/162/2015-ducati-icon-scrambler-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "803 cc Engine",
        distance: "220 km/day",
      },
      price: "2500",
    },
    {
      id: new Date().getTime(),
      name: "Harley-Davidson Iron 883",
      rating: 4.9,
      image:
        "https://c4.wallpaperflare.com/wallpaper/865/1012/928/harley-davidson-harley-davidson-sportster-harley-davidson-iron-883-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "883 cc Engine",
        distance: "230 km/day",
      },
      price: "2800",
    },
    {
      id: new Date().getTime(),
      name: "Honda CBR 650R",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/14828820/pexels-photo-14828820.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: {
        start: "SELF START ONLY",
        engine: "649 cc Engine",
        distance: "240 km/day",
      },
      price: "2200",
    },
    {
      id: new Date().getTime(),
      name: "Bajaj Dominar 400",
      rating: 4.6,
      image:
        "https://w0.peakpx.com/wallpaper/298/219/HD-wallpaper-dominar-400-bajaj-dosruedas-motocicleta-motos-off-road-thumbnail.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "373 cc Engine",
        distance: "210 km/day",
      },
      price: "1400",
    },
    {
      id: new Date().getTime(),
      name: "Triumph Street Triple",
      rating: 4.8,
      image:
        "https://c4.wallpaperflare.com/wallpaper/372/489/195/2017-triumph-street-triple-rs-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "765 cc Engine",
        distance: "250 km/day",
      },
      price: "2700",
    },
    {
      id: new Date().getTime(),
      name: "KTM RC 200",
      rating: 4.5,
      image:
        "https://images.pexels.com/photos/14553290/pexels-photo-14553290.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: {
        start: "SELF START ONLY",
        engine: "199 cc Engine",
        distance: "180 km/day",
      },
      price: "1000",
    },
    {
      id: new Date().getTime(),
      name: "Yamaha YZF R3",
      rating: 4.6,
      image:
        "https://c4.wallpaperflare.com/wallpaper/236/845/149/2015-yamaha-yzf-r3-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "321 cc Engine",
        distance: "190 km/day",
      },
      price: "1500",
    },
    {
      id: new Date().getTime(),
      name: "Kawasaki Z900",
      rating: 4.9,
      image:
        "https://c4.wallpaperflare.com/wallpaper/355/43/678/kawasaki-z900-abs-2017-wallpaper-preview.jpg",
      features: {
        start: "SELF START ONLY",
        engine: "948 cc Engine",
        distance: "280 km/day",
      },
      price: "3000",
    },
    {
      id: new Date().getTime(),
      name: "Hero XPulse 200",
      rating: 4.2,
      image:
        "https://wallpapers.com/images/high/hero_-xpulse_200_-off-road_-motorcycle-kgkerfcdliaz651v.webp",
      features: {
        start: "SELF START ONLY",
        engine: "199 cc Engine",
        distance: "170 km/day",
      },
      price: "900",
    },
  ];
  return (
    <div className="py-16">
      <Layout>
        <div>
          <header className="w-full text-center text-5xl font-bold text-neutral-800">
            <h1 className="text-primary">Bike On Rent</h1>
          </header>

          {/* Mapping Features Bikes */}
          {/* <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 py-12 gap-4">
            {BikeData.map((bike, index) => (
              <Bike key={index} bike={bike} />
            ))}
          </div> */}
          <BikeList />
        </div>
      </Layout>
    </div>
  );
};

export default BikeOnRentPage;
