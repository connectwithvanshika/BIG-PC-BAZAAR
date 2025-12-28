import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import "../styles/ChatBot.css";

const faqData = [
  {
    keywords: ["warranty", "guarantee"],
    answer: "Yes, all laptops come with official manufacturer warranty."
  },
  {
    keywords: ["delivery", "shipping", "time"],
    answer: "Delivery usually takes 3–5 business days."
  },
  {
    keywords: ["cod", "cash on delivery"],
    answer: "COD is available on selected products only."
  },
  {
    keywords: ["gaming", "gaming laptop"],
    answer: "Yes, we offer high-performance gaming laptops from top brands."
  },
  {
    keywords: ["contact", "support", "help"],
    answer: "You can contact us at vanshika.connects@gmail.com or WhatsApp +91 74549 30553."
  }
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Ask me anything about laptops, PCs or orders." }
  ]);

  const getReply = (question) => {
    const q = question.toLowerCase();
    for (let item of faqData) {
      if (item.keywords.some(word => q.includes(word))) {
        return item.answer;
      }
    }
    return "Sorry, I couldn’t find this. Please contact our support team.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: getReply(input) }
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-launcher" onClick={() => setOpen(!open)}>
        <FaComments />
        <span>Ask your queries</span>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Big PC Bazaar Assistant</span>
            <FaTimes onClick={() => setOpen(false)} />
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
