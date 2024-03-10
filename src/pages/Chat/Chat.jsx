import  { useState, useRef, useEffect } from "react";
import Messages from "../../components/Messages";
import SendMessage from "../../components/SendMessage";
import Layout from "../../layout/Layout";
//import main from "../../services/askOpenAI"; // Import openai instance and main function

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (text, sender) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const sendMessage = async () => {
    if (!message) return; // Don't send empty messages

    const userMessage = { username: "User", message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const completion = await main(); // Call the main function to get AI response
      const aiMessage = { username: "SheSearch", message: completion.choices[0] };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage("Error occurred", "ai");
    }

    setMessage(""); // Clear input after sending message
  };

  return (
    <>
      <Layout>
        <div className="w-[60vw] max-w-[80vw] flex flex-col">
          <div className="flex-grow flex flex-col overflow-y-auto">
            <Messages messages={messages} />
            <div ref={messagesEndRef} />
          </div>
          <SendMessage
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </Layout>
    </>
  );
};

export default Chat;
