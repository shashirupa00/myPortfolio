import { useState } from "react";
import { sendCustomEmail } from "./email";

function Message() {
  const [details, setDetails] = useState({
    subject: "",
    message: "",
  });

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
    setDetails((prevDetails) => ({ ...prevDetails, subject: "", message: "" }));
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject:
        </label>
        <input
          id="subject"
          name="subject"
          value={details.subject}
          onChange={handleDetailsChange}
          type="text"
          placeholder="Enter your subject"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={details.message}
          onChange={handleDetailsChange}
          placeholder="Type your message"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        disabled={!details.subject || !details.message}
        onClick={handleSendEmail}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
      >
        Send Email
      </button>
    </div>
  );
}

export default Message;
