/* eslint-disable react/no-unescaped-entities */
import Footer from "../Footer";
import Header from "../Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="py-6 mb-36">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold text-center mb-8">About <span>Us</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 "><div/>
            <div className="bg-black backdrop-blur-lg rounded-lg p-6 shadow-lg shadow-slate-100 bg-opacity-60 ring-1 ring-white text-white hover:shadow-none hover:scale-105 cursor-default  transition-all">
              <h3 className="text-xl font-bold mb-4 text-center"><span>Our Mission</span></h3>
              <p className="text-center">Our mission is to empower women by providing access to personalized learning resources and reliable health information through our web app. We aim to bridge the gender gap in digital literacy and health awareness by leveraging WHO data and delivering tailored content to meet the diverse needs of women worldwide.</p>
            </div>
            <div className="bg-black/50 backdrop-blur-lg rounded-lg p-6 shadow-lg shadow-slate-100 bg-opacity-60 ring-1 ring-white text-white hover:shadow-none hover:scale-105 cursor-default  transition-all">
              <h3 className="text-xl font-bold mb-4 text-center"><span>Our Vision</span></h3>
              <p className="text-center">Our vision is to create a supportive online community where women can learn, connect, and thrive. We envision a future where every woman has the knowledge and tools she needs to make informed decisions about her health, career, and personal development, leading to greater empowerment and equality.</p>
            </div>
            {/* <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 ">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>We believe in inclusivity and diversity, ensuring our platform is accessible to women of all backgrounds and abilities.</li>
                <li>We prioritize accuracy and reliability in the information we provide, drawing on trusted sources such as WHO data.</li>
                <li>We are committed to continuous improvement, seeking feedback from our users to enhance their experience and meet their evolving needs.</li>
                <li>We advocate for women's rights and empowerment, striving to create positive change and address societal challenges through education and awareness.</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
