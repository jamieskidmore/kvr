import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      return;
    }
    const form = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="max-w-md mx-auto pb-4">
      <div className="mb-4">
        <label
          htmlFor="user_name"
          className="block text-white font-semibold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="w-full px-3 py-2 rounded bg-custom-black text-white focus:outline-none focus:bg-gray-700"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="user_email"
          className="block text-white font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="w-full px-3 py-2 rounded bg-custom-black text-white focus:outline-none focus:bg-gray-700"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-white font-semibold mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-3 py-2 rounded bg-custom-black text-white focus:outline-none focus:bg-gray-700"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-white font-semibold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 rounded bg-custom-black text-white focus:outline-none focus:bg-gray-700"
        ></textarea>
      </div>
      <div className="text-center">
        <input
          type="submit"
          value="Send"
          className="bg-cta-orange border-4 border-border-gray hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
        />
      </div>
    </form>
  );
}
