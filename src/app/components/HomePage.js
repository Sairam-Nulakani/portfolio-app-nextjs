import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import Image from "next/image";
import photo from "../../../public/photo.jpeg";

const HomePage = () => {
  return;
  <div>
    <div className="text-center px-10">
      <h2 className="text-5xl uppercase py-2 text-teal-600 font-medium">
        Sairam Nulakani
      </h2>
      <h3 className="text-2xl py-2">React Developer</h3>
      <p className="text-md py-5 leading-8 text-gray-800">
        I'm a passionate and innovative React developer with a deep love for web
        development and a knack for creating immersive user experiences, and I
        thrive on crafting beautiful and efficient web applications using
        cutting-edge technologies. With a solid background in front-end
        development and an insatiable curiosity for learning, I'm always eager
        to stay ahead of the curve and embrace emerging trends in the React
        ecosystem.
      </p>
    </div>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <AiFillTwitterCircle />
      <AiFillLinkedin />
      <AiFillInstagram />
      <AiFillFacebook />
    </div>
    <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden">
      <Image src={photo} layout="fill" objectFit="cover" />
    </div>
    ;
  </div>;
};

export default HomePage;
