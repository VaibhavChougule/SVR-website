import React, { useState } from 'react';

function Chatbox({ className = '', onClose }) {
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [messages, setMessages] = useState([]);

  const qaPairs = {
    'Products': {
      'What products do you offer?': 'We offer a wide range of products tailored to different industries. Let me know what you are looking for!',
      'How much does your product cost?': 'The cost varies depending on the product and its features. Please contact our sales team for detailed pricing.',
      'Do you offer product customization?': 'Yes, we offer customization options based on your business needs.',
      'What is your refund policy?': 'Our refund policy depends on the product type and purchase agreement. Please check our terms or contact support.'
    },
    'Maintenance': {
      'How do I maintain the product?': 'Regular maintenance includes cleaning, software updates, and checking for wear and tear. Please refer to our maintenance guide.',
      'Do you provide after-sales support?': 'Yes, we have a dedicated support team to assist you with any issues.',
      'How often does the product require servicing?': 'The servicing frequency depends on usage. We recommend periodic checks as per our maintenance guidelines.',
      'What should I do if the product stops working?': 'Please check the troubleshooting guide. If the issue persists, contact our support team.'
    },
    'Training & Workshops': {
      'Do you provide training for your products?': 'Yes, we offer training sessions to help you get the most out of our products.',
      'Are there any workshops available?': 'Yes, we organize workshops on product usage and best practices. Please visit our website for the schedule.',
      'Is the training free or paid?': 'We offer both free and paid training sessions depending on the complexity of the product.',
      'How can I register for a workshop?': 'You can register through our website or contact our training team for assistance.'
    },
    'Marketing': {
      'How do you promote your products?': 'We use a mix of digital marketing, social media, and offline campaigns to reach our customers.',
      'Do you offer partnership opportunities?': 'Yes, we collaborate with businesses for marketing and distribution. Reach out to explore partnership opportunities.',
      'Can I become a distributor for your products?': 'Yes, we welcome distributors! Please contact our sales team for more details.',
      'Do you offer discounts for bulk purchases?': 'Yes, we have special pricing for bulk orders. Please get in touch with our sales team for a quote.',
      'How can I stay updated about new products?': 'Subscribe to our newsletter or follow us on social media for the latest updates.'
    }
  };

  const handleSend = () => {
    if (!selectedCategory || !input.trim()) return;
    const answer = qaPairs[selectedCategory][input];
    setMessages([...messages, { question: input, answer }]);
    setInput('');
  };

  return (
    <div className={`w-full max-w-xs mx-auto p-4 border rounded-lg shadow-md bg-white ${className} sm:max-w-lg`}> 
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Chatbox</h2>
        <button 
          className="text-red-500 font-bold px-2 py-1 rounded-lg hover:bg-red-100"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
      <div className="h-60 overflow-y-auto p-2 border-b space-y-2 bg-slate-400 rounded-md">
        Ask Questions
        {messages.map((msg, index) => (
          <div key={index} className="p-2 bg-gray-100 rounded-lg">
            <p className="text-blue-600 font-semibold">You: {msg.question}</p>
            <p className="text-gray-700">Bot: {msg.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <select
          className="w-full p-2 border rounded-lg"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setInput('');
          }}
        >
          <option value="" disabled>Select a category...</option>
          {Object.keys(qaPairs).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      {selectedCategory && (
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <select
            className="flex-1 p-2 border rounded-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          >
            <option value="" disabled>Select a question...</option>
            {Object.keys(qaPairs[selectedCategory]).map((question, index) => (
              <option key={index} value={question}>{question}</option>
            ))}
          </select>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default Chatbox;
