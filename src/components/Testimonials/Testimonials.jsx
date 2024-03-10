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
      <div className="max-w-lg mx-auto p-2 ">
        <h2 className="text-3xl font-bold ">Testimonials</h2>
        <div className="space-y-6">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-md">
              <p className="text-gray-800 mb-4">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="italic">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
