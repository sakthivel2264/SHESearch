import { Link } from "react-router-dom";
import FighterWoman from "../../assets/img/Hero.png";
const Hero = () => {
  return (
    <div className="my-10  flex justify-center items-center gap-40 flex-col ">
      <div className=" my-10 flex justify-between items-center ">
        {/* Left Part */}
        <div className=" flex flex-col justify-center items-start gap-1 tracking-wider">
          <p className="text-3xl text-white ">
            <span className="text-6xl e font-bold">Ask </span>
            <span> personalized</span>
          </p>
          <p className="py-2 text-6xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
            Questions and Learn
          </p>
          <p className="text-xl text-white">for Your Better Health</p>
          <Link to="/categories"
  className="group  w-12 hover:w-52 h-12 hover:ring-1 hover:ring-yellow-500 relative bg-transparent rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-transparent before:hover:bg-transparent before:rotate-45 ">
    <span>▶</span>
  <spans
    class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100  px-1 transform scale-x-0 group-hover:scale-x-100 transition-all text-lg"
    >Get Started</spans>
</Link>

        </div>
        <div>
          <img src={FighterWoman} alt="mother" className="aspect-auto w-180" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-white  text-2xl tracking-wide">
            <span>
              <span className="text-white text-4xl font-bold">Star</span>
            </span>
            {"  "}
            <span>
              Be the{"  "}
              of your{"  "}
              <span className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
                own child
              </span>
            </span>
          </div>
          <div className="text-gray-200 text-sm  text-center w-1/2 flex justify-center items-center">
            Embark on a beautiful journey filled with joy and anticipation. As
            you become the guiding star of your own child, embrace the physical
            and emotional changes with love and excitement.
          </div>
        </div>
        <div className="ratio ratio-16x9 aspect-video w-full flex justify-center items-start">
          <iframe
            src="https://www.youtube.com/embed/Z6qsvKS4Q10?si=sYP7Y8SxTEsJ4_gZ"
            title="YouTube video"
            allowfullscreen
            className="rounded-3xl w-4/5 h-[57vh]"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
