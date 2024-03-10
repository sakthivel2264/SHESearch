import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Layout from '../../layout/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const GenAIComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText) return;

    setMessages([...messages, { text: inputText, type: 'user' }]);
    setInputText('');
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(inputText);
      const response = await result.response;
      const generatedText = response.text().trim();
      setMessages([...messages, { text: generatedText, type: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
    <Header/>
    <Layout>
      <div className="relative min-h-screen flex flex-col justify-between pt-20">
        <div className="max-w-lg mx-auto p-4 flex-grow">
          <div className="bg-white p-4 rounded-lg shadow-md h-full">
            <h1 className="text-2xl font-bold mb-8 text-center">Chat with GenAI</h1>
            <div className="h-[calc(100%-4rem)] overflow-y-auto mb-">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-200 text-blue-900 self-end' : 'bg-gray-200 text-gray-900 self-start'}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            {loading && <div className="flex justify-center items-center mb-2"><div className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-gray-900"></div>Loading...</div>}
            <div ref={messageEndRef}></div>
          </div>
        </div>
        <div className="max-w-lg mx-auto p-4">
          <div className="bg-white rounded-lg shadow-md flex">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-500 rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Layout>
    <Footer/>
    </>
  );
};

export default GenAIComponent;
