import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import KratosPng from "../../public/kratos-png.png"
import Image from "next/image";

function Intro() {
  return (
    <div className="text-center py-10 mb-12">
      <h2 className="text-5xl py-2 bg-gradient-to-b  from-cyan-500 to-teal-500 bg-clip-text text-transparent">
        Manoj Kumar
      </h2>
      <h3 className="text-2xl py-2 font-normal text-white md:text-3xl">
        Full Stack Web Developer
      </h3>
      <p className="text-md py-5 text-[#afafbf] font-mono  leading-8 text-800 max-w-xl mx-auto md:text-xl">
        Welcome to my portfolio, where pixels turn into possibilities and lines of code shape captivating journeys.
      </p>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20">
        <Image  alt="Authors-pic" src={KratosPng} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Intro;
