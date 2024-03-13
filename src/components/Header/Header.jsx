import { Link } from "react-router-dom";

const  Header = () => {

  return (
    <header className="bg-black/50  py-2 w-full flex justify-around items-center text-white sticky top-0 backdrop-blur-md mb-10 z-50 border-b-[1px]">

      <Link to="/" className="flex justify-center items-center text-2xl "><span>She </span>&nbsp;Search</Link>

      <ul className="flex justify-center items-center gap-20 text-[1.3rem]">
        {/* AboutUs */}
        <Link to="/about" className="text-white hover:text-yellow-300  cursor-pointer drop-shadow-lg">AboutUs</Link>
        {/* Testimonials */}
        <Link to="/testimonials"  className="text-white hover:text-yellow-300  cursor-pointer drop-shadow-lg">Testimonials</Link>
        {/* FAQ */}
        <Link to="/headerFAQ"className="text-white hover:text-yellow-300  cursor-pointer drop-shadow-lg">
          FAQ
        </Link>
      </ul>

      {/* Get Started button */}
      <Link to="/signup">
        <button className="bg-pink-800 text-white  text-xl px-3 py-2 rounded-lg hover:bg-purple-950 drop-shadow-lg right-1 ring-white">
          Signup
        </button>
      </Link>
    </header>
  );
};

export default Header;
