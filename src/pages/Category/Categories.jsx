import Header from "../../components/Header";
import Layout from "../../layout/Layout";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
const Categories = () => {

  // Array of descriptions corresponding to each category
  const details = [
    "Health & Safety, Healthcare & Hygiene, Clothings, sleep & Bedding",
    "Health&Wellness, Personal Style, Career & Professional development, Education & Personal Growth ",
    "Prenatal health, Comfort & Clothing, Health & Wellness, Preparation for Baby, Childbirth Preparation",
    "Self-Care & Beauty, Career & Person Development, Financial Management, Fitness & Exercise, Mental Health",
    "Medical Care, Comfortable & Adaptive Living, Financial Management, End of Life Planning"
  ];
  return (
    <>
      <Header/>
      <Layout>
        <div className="container mx-10 my-10 flex justify-center items-center space-y-4 w-full">
        <ul className=" flex gap-10">
      {["Childhood", "Adulthood", "Pregnant Women", "Middle Age", "Old Age"].map((item, index) => (
        <li key={index} className="w-[220px] p-6 bg-transparent border border-gray-200 rounded-lg shadow-md shadow-white  hover:scale-110 flex flex-col transition-all">
          <Link
            to={`/${item.toLowerCase().replace(" ", "")}`}
          >
           <span className="text-2xl text-center flex justify-center"> {item}</span>
            <p className="py-4 font-normal  dark:text-gray-400 text-center ">{details[index]}</p>
          </Link>
          
        </li>
      ))}
    </ul>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Categories;
