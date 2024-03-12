import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 justify-between items-center w-full bg-black text-gray-300 py-6 pt-10 text-sm border-t-2 ">
      <div className="mx-auto flex justify-evenly items-center w-full">
        <div className="flex flex-col gap-1 justify-center items-start ">
          <Link to="/">
            <div className="text-3xl font-bold"><span>She&nbsp;</span>Search</div>
          </Link>
          <div className="text-xl text-gray-400">
            Personalized Question Web App
          </div>
          <div className="mt-3 flex text-xl gap-2 text-gray-500  cursor-pointer">
            <FaFacebook className="hover:text-yellow-300 " />
            <FaInstagram className="hover:text-yellow-300 " />
            <FaTiktok className="hover:text-yellow-300 " />
            <FaTwitter className="hover:text-yellow-300 " />
            <FaLinkedin className="hover:text-yellow-300" />
          </div>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <h1 className="text-xl text-white">About</h1>
          <div className="hover:text-yellow-300">About Us</div>
          <div className="hover:text-yellow-300">Features</div>
          <div className="hover:text-yellow-300">News</div>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <h1 className="text-xl text-white">Account</h1>
          <div className="hover:text-yellow-300">Support Center</div>
          <div className="hover:text-yellow-300">Feedback</div>
          <div className="hover:text-yellow-300">Contact Us</div>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
          <h1 className="text-xl text-white"> Company</h1>
          <div className="hover:text-yellow-300">Our Team</div>
          <div className="hover:text-yellow-300">Partner</div>
          <div className="hover:text-yellow-300">FAQ</div>
        </div>
      </div>
      <div className="text-gray-400 text-lg cursor-default" title="She Search">
        &#169; SheSearch {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
