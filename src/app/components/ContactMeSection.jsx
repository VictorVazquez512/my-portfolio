"use client";
import { useState } from "react";
import Socials from "./Socials";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Spinner from "./Spinner";

function ContactMeSection() {
  const [submittingEmail, setSubmittingEmail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittingEmail(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      toast.success("Email sent successfully! I will get back to you soon.");
      setSubmittingEmail(false);
    } else {
      toast.error(
        "An error occurred while sending the email. Please try again."
      );
      setSubmittingEmail(false);
    }
  };

  return (
    <footer id="contact" className="h-full mb-10 lg:mb-24 pt-10">
      <div className="container flex flex-col lg:flex-row justify-around mt-8 mx-auto h-full w-[95%]">
        {/* Description */}
        <div className="flex flex-col lg:mb-12 lg:py-12 gap-4 text-center lg:text-left">
          <h2 className="h2 font-bold text-secondary-75 mb-6 w-full">
            Let<span className="text-blue">'</span>s Connect
          </h2>
          <p className="text-paragraph mb-4 max-w-full lg:max-w-md">
            {" "}
            I’m always open to connecting with new people! Whether you have a
            question, want to collaborate, or just want to say hello, feel free
            to reach out. I’ll do my best to respond as soon as possible!
          </p>
          <div className="flex justify-center lg:justify-start mb-8 xl:mb-0">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-blue rounded-full flex 
                  justify-center items-center text-blue text-base hover:bg-blue 
                  hover:text-primary hover:transition-all duration-500"
            ></Socials>
          </div>
        </div>
        {/* Form */}
        <div className="flex flex-col w-full lg:w-[50%] lg:my-12 lg:py-6 px-6 gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* email field */}
            <label
              htmlFor="email"
              className="text-secondary block text-sm font-semibold"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-transparent border border-secondary placeholder-emphasis text-secondary text-sm rounded-lg w-full p-2.5"
              placeholder="jacob@gmail.com"
              required
            />
            {/* subject field */}
            <label
              htmlFor="subject"
              className="text-secondary block text-sm font-semibold"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-transparent border border-secondary placeholder-emphasis text-secondary text-sm rounded-lg w-full p-2.5"
              placeholder="Saying Hello!"
              required
            />
            {/* message field */}
            <label
              htmlFor="message"
              className="text-secondary block text-sm font-semibold"
            >
              Message
            </label>
            <input
              name="message"
              type="text"
              id="message"
              className="bg-transparent border border-secondary placeholder-emphasis text-secondary text-sm rounded-lg w-full p-2.5"
              placeholder="Hello! I want to contact you for..."
              required
            />
            {/* message field */}
            <Button
              variant="outline"
              size="lg"
              disabled={submittingEmail}
              className="uppercase flex items-center gap-2 border border-blue text-blue text-base hover:bg-blue hover:text-primary hover:transition-all duration-500 my-2"
            >
              {submittingEmail ? <Spinner /> : "Send Email"}
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default ContactMeSection;
