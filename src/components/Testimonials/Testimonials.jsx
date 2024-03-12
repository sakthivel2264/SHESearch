import Header from "../Header";
import Footer from "../Footer";

// Fake testimonials data
const testimonialsData = [
  {
    id: 1,
    name: 'Emily Johnson',
    text: 'I absolutely love this app! It has helped me discover so many new learning resources tailored to my interests. The personalized recommendations are spot on!',
    position: 'Software Engineer'
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    text: 'As a busy mom, I appreciate how convenient and user-friendly this app is. Its become my go-to tool for finding reliable health information and educational content for my family.',
    position: 'Registered Nurse'
  },
  {
    id: 3,
    name: 'Michelle Rodriguez',
    text: 'This app has been a game-changer for me. Not only has it expanded my knowledge base, but it has also connected me with a supportive community of like-minded women. Highly recommend!',
    position: 'Entrepreneur'
  },
  {
    id: 4,
    name: 'Amanda Carter',
    text: 'Ive tried many similar apps, but none compare to this one. The quality of content and the level of personalization are unmatched. Keep up the great work!',
    position: 'Marketing Specialist'
  }
];

const Testimonials = () => {
  return (
    <>
      <Header />
      <div className=" m-auto p-2 mb-28 mx-10">
        <h2 className="text-4xl font-bold text-white text-center mb-9 "><span className="text-5xl">T</span>estimonials</h2>
        <div className="flex h-[350px] gap-10 ">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="bg-black/50 backdrop-blur-lg rounded-lg p-6 shadow-lg shadow-slate-100 bg-opacity-60 ring-1 ring-white text-white hover:shadow-none hover:scale-105 cursor-default transition-all" >
              <p className="mb-4 text-center">{testimonial.text}</p>
              <p className="font-light text-center mb-2"><span>{testimonial.name}</span></p>
              <p className="italic text-center">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
