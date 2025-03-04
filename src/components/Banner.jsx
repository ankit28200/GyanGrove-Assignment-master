import React from "react";
import banner from "../assets/Banner.svg";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img src={banner} alt="Banner" className="" />
        </div>
        <div className="absolute top-48 text-white">
          <div className="text-5xl font-medium mx-52">Discover Exciting Events Happening Near You - Stay Tuned for Updates!</div>
          <div className="mx-56 mt-16 text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi fugiat quam voluptas esse odit, quibusdam enim illum quod voluptates rem ea, vitae illo officia! Ullam consequatur veritatis sed dolor nobis.
            Eaque rem quasi facere, consequuntur ab, temporibus ducimus numquam iure quidem quisquam autem culpa eligendi maiores ullam iusto neque natus. Quisquam atque sapiente alias nostrum molestiae unde a saepe rem.
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
