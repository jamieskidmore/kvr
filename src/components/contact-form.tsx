"use client";

import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [emailSent, setEmailSent] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Check if any of the fields are empty
    let allFieldsFilled = true;
    formData.forEach((value) => {
      if (!value) {
        allFieldsFilled = false;
      }
    });

    if (!allFieldsFilled) {
      setShowMessage(true);
      return;
    }

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      return;
    }

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
          setEmailSent(true);
          setShowMessage(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="max-w-sm md:max-w-full text-lg mx-auto p-4 bg-header-bg rounded-2xl space-y-4"
    >
      <div>
        <label
          htmlFor="user_name"
          className="block text-text-white font-semibold"
        >
          Name
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="w-full px-3 rounded bg-text-white text-text-gray focus:bg-text-gray focus:text-text-white"
        />
      </div>
      <div>
        <label
          htmlFor="user_email"
          className="block text-text-white font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="w-full px-3 rounded bg-text-white text-text-gray focus:bg-text-gray  focus:text-text-white"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-text-white font-semibold"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-3 rounded text-text-gray bg-text-white focus:bg-text-gray focus:text-text-white"
        />
      </div>
      <div className="">
        <label
          htmlFor="message"
          className="block text-text-white font-semibold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 rounded bg-text-white text-text-gray focus:bg-text-gray focus:text-text-white"
        ></textarea>
      </div>
      {showMessage && (
        <div className="bg-text-white w-52 mx-auto rounded">
          <p className="text-cta-orange text-center font-semibold">
            Please enter all fields.
          </p>
        </div>
      )}
      <div className="text-center">
        <input
          type="submit"
          value={emailSent ? "Sent ✔" : "Send"}
          className={`${
            emailSent
              ? "bg-green-500 button-disabled pointer-events-none"
              : "bg-cta-orange"
          } px-4 rounded-xl text-text-white text-xl cursor-pointer`}
        />
      </div>
    </form>
  );
}
